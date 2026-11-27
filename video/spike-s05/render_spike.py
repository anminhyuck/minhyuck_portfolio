"""S05 2.5D spike: turn one still image into a ~10s shot with code only.

Throwaway experiment (no AI video). Effects:
  - window panes split into a separate "outside" layer (parallax + rack focus)
  - slow camera push-in with a slight truck
  - sun beams and floating dust
  - year caption, vignette, film grain, fades

Usage: python3 render_spike.py [output.mp4]
"""

import math
import subprocess
import sys
from multiprocessing import Pool
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
SOURCE = HERE.parent / "v1" / "images" / "S05_style-test_v01.png"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"

FPS = 30
DURATION = 10.0
FRAMES = int(FPS * DURATION)
FOCUS = (700.0, 430.0)  # point the camera pushes toward (source pixels)

# Window panes measured from luminance profiles of the source image.
ROWS_BLOCK = [(137, 221), (230, 319), (328, 419)]
PANES = (
    [(x0, y0, x1, y1) for (x0, x1) in [(304, 382), (400, 478)] for (y0, y1) in ROWS_BLOCK]
    + [(x0, y0, x1, y1) for (x0, x1) in [(898, 987), (994, 1072)] for (y0, y1) in ROWS_BLOCK]
    + [(491, 121, 676, 434), (700, 121, 885, 434)]
    + [(x0, 19, x1, 85) for (x0, x1) in [(300, 386), (393, 475), (486, 572), (579, 664),
                                          (713, 798), (805, 890), (901, 987), (994, 1078)]]
)
# Hoguk's hat pokes into the centre pane; keep it in the foreground.
HAT_ELLIPSES = [(718, 462, 66, 56), (686, 424, 20, 18), (762, 428, 20, 18)]
FILL_BOX = (285, 10, 1100, 450)


def ease(x):
    x = min(max(x, 0.0), 1.0)
    return 0.5 - 0.5 * math.cos(math.pi * x)


def ramp(t, t0, t1):
    return ease((t - t0) / (t1 - t0))


def box_blur(arr, r):
    """Separable box blur on a float array (H, W[, C]) with edge padding."""
    if r < 1:
        return arr
    out = arr
    for axis in (0, 1):
        pad = [(0, 0)] * out.ndim
        pad[axis] = (r + 1, r)
        p = np.pad(out, pad, mode="edge")
        c = np.cumsum(p, axis=axis)
        hi = np.take(c, np.arange(2 * r + 1, c.shape[axis]), axis=axis)
        lo = np.take(c, np.arange(0, c.shape[axis] - 2 * r - 1), axis=axis)
        out = (hi - lo) / (2 * r + 1)
    return out


def build_glass_mask(size):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for (x0, y0, x1, y1) in PANES:
        draw.rectangle([x0, y0, x1, y1], fill=255)
    for (cx, cy, rx, ry) in HAT_ELLIPSES:
        draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=0)
    return mask


def build_outside_plate(img, glass):
    """Fill mullions/sill so the outside layer can slide without wood streaks."""
    rgb = np.asarray(img).astype(np.float64)
    known = (np.asarray(glass) > 127).astype(np.float64)
    x0, y0, x1, y1 = FILL_BOX
    region = np.zeros_like(known, dtype=bool)
    region[y0:y1, x0:x1] = True
    result = rgb.copy()
    filled = np.where(region, known, 1.0)
    for r in (2, 4, 8, 16, 32, 64):
        num = box_blur(result * filled[..., None], r)
        den = box_blur(filled, r)
        todo = (filled < 0.5) & (den > 0.02)
        result[todo] = num[todo] / den[todo][..., None]
        filled = np.where(todo, 1.0, filled)
    return Image.fromarray(np.clip(result, 0, 255).astype(np.uint8))


def build_beams(size):
    beams = Image.new("L", size, 0)
    draw = ImageDraw.Draw(beams)
    for (top_x, width, spread) in [(520, 70, 160), (640, 50, 120), (760, 80, 190), (930, 60, 140)]:
        draw.polygon([(top_x, 430), (top_x + width, 430),
                      (top_x + width + spread, 768), (top_x + spread * 0.3, 768)], fill=255)
    return np.asarray(beams.filter(ImageFilter.GaussianBlur(28))).astype(np.float64) / 255.0


def build_vignette(w, h):
    ys, xs = np.mgrid[0:h, 0:w]
    d = np.sqrt(((xs - w / 2) / (w / 2)) ** 2 + ((ys - h / 2) / (h / 2)) ** 2)
    return (1.0 - 0.24 * np.clip(d - 0.45, 0, None) ** 1.6)[..., None]


def build_dust(rng, count=150):
    return {
        "x": rng.uniform(380, 1080, count), "y": rng.uniform(260, 720, count),
        "vx": rng.uniform(-7, 5, count), "vy": rng.uniform(-9, -1.5, count),
        "size": rng.uniform(0.8, 2.4, count), "alpha": rng.uniform(0.35, 1.0, count),
        "freq": rng.uniform(0.3, 1.4, count), "phase": rng.uniform(0, 2 * math.pi, count),
    }


BASE = Image.open(SOURCE).convert("RGB")
W, H = BASE.size
GLASS = build_glass_mask(BASE.size)
GLASS_SOFT = GLASS.filter(ImageFilter.GaussianBlur(1.2))
OUTSIDE = build_outside_plate(BASE, GLASS)
BEAMS = build_beams(BASE.size)
VIGNETTE = build_vignette(W, H)
DUST = build_dust(np.random.default_rng(7))
FONT_BIG = ImageFont.truetype(FONT, 58)


def affine(img, scale, tx, resample=Image.BICUBIC):
    fx, fy = FOCUS
    data = (1 / scale, 0, fx - fx / scale + tx, 0, 1 / scale, fy - fy / scale)
    return img.transform(img.size, Image.AFFINE, data, resample=resample)


def dust_layer(t):
    layer = Image.new("L", (W, H), 0)
    draw = ImageDraw.Draw(layer)
    d = DUST
    xs = d["x"] + d["vx"] * t + 6 * np.sin(0.7 * t + d["phase"])
    ys = d["y"] + d["vy"] * t
    tw = 0.55 + 0.45 * np.sin(2 * math.pi * d["freq"] * t + d["phase"])
    for x, y, s, a, k in zip(xs, ys, d["size"], d["alpha"], tw):
        v = int(255 * a * k)
        draw.ellipse([x - s, y - s, x + s, y + s], fill=v)
    return layer.filter(ImageFilter.GaussianBlur(0.7))


def caption(frame, t):
    alpha = ramp(t, 1.2, 2.2) * (1 - ramp(t, 6.4, 7.4))
    if alpha <= 0:
        return frame
    over = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(over)
    a = int(235 * alpha)
    rise = 8 * (1 - ramp(t, 1.2, 2.4))
    draw.text((96, 612 + rise), "1948", font=FONT_BIG, fill=(246, 236, 214, a))
    draw.line([(98, 690 + rise), (98 + 150 * ramp(t, 1.6, 3.0), 690 + rise)],
              fill=(246, 236, 214, int(a * 0.8)), width=2)
    return Image.alpha_composite(frame.convert("RGBA"), over).convert("RGB")


def render_frame(i):
    t = i / FPS
    cam = ease(t / DURATION)
    room_scale, room_tx = 1.0 + 0.10 * cam, 26 * cam
    out_scale, out_tx = 1.0 + 0.035 * cam, 9 * cam

    # rack focus: kids -> soldiers outside -> back to kids
    to_out = ramp(t, 3.0, 5.0) * (1 - ramp(t, 7.6, 9.3))
    room_blur, out_blur = 2.4 * to_out, 2.6 * (1 - to_out)

    room = affine(BASE, room_scale, room_tx)
    outside = affine(OUTSIDE, out_scale, out_tx)
    mask = affine(GLASS_SOFT, room_scale, room_tx, Image.BILINEAR)
    if room_blur > 0.05:
        room = room.filter(ImageFilter.GaussianBlur(room_blur))
    if out_blur > 0.05:
        outside = outside.filter(ImageFilter.GaussianBlur(out_blur))
    frame = Image.composite(outside, room, mask)

    arr = np.asarray(frame).astype(np.float64)
    beam_strength = 0.13 + 0.04 * math.sin(2 * math.pi * t / 4.5)
    beams = np.asarray(affine(Image.fromarray((BEAMS * 255).astype(np.uint8)),
                              room_scale, room_tx, Image.BILINEAR)).astype(np.float64) / 255
    arr += (beams * beam_strength)[..., None] * np.array([255, 214, 160])
    dust = np.asarray(affine(dust_layer(t), room_scale, room_tx, Image.BILINEAR)).astype(np.float64) / 255
    arr += (dust * (0.25 + 0.75 * beams) * 0.85)[..., None] * np.array([255, 236, 200])
    arr *= VIGNETTE
    arr += np.random.default_rng(i).normal(0, 3.2, (H, W))[..., None]
    fade = ramp(t, 0.0, 0.9) * (1 - ramp(t, DURATION - 0.9, DURATION))
    arr *= fade
    frame = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    return caption(frame, t).tobytes()


def main():
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "out" / "S05_spike_v01.mp4"
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
           "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
           "-vf", "crop=1365:768,scale=1280:720:flags=lanczos",
           "-c:v", "libx264", "-preset", "slow", "-crf", "19", "-pix_fmt", "yuv420p",
           "-movflags", "+faststart", str(out)]
    ffmpeg = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    with Pool(4) as pool:
        for buf in pool.imap(render_frame, range(FRAMES), chunksize=4):
            ffmpeg.stdin.write(buf)
    ffmpeg.stdin.close()
    if ffmpeg.wait() != 0:
        raise SystemExit("ffmpeg failed")
    print(out)


if __name__ == "__main__":
    main()

# 프롬프트 로그 (v1)

| 파일명 | 모델 | 장면 | 비율·해상도 | 결과 | 채택 |
|---|---|---|---|---|---|
| S05_style-test_v01 | Nano Banana 2.1 (Figma Weave) | S05 1948 유치원 블록 + 창밖 국군 | 16:9 · 1376×768 | 생성됨 (Weave 출력 ID `cdd14e07-8615-47c9-9403-590a785ed89f`) | 검토 대기 |
| S15_style-test_v01 | Nano Banana 2.1 (Figma Weave) | S15 야간 경계, 로봇·드론 | 16:9 · 1376×768 | 생성됨 (Weave 출력 ID `3859b117-ab4f-4140-9da3-f44cf98410ab`) | 검토 대기 |
| S18_style-test_v01 | — | S18 반전 | — | **실행 안 됨**: Weave 무료 플랜 실행 횟수(2회) 소진 | — |

## 공통 스타일 문장 (STYLE_BASE 초안)

```
Cinematic 3D animated feature film still. Stylized, expressive characters with soft rounded
features; highly detailed, realistic environment and accurate military equipment with
real-world proportions, materials and mechanical detail. Cinematic lighting, subtle film grain.
```

## 호국이 외형 문장 (CHR-01 초안)

- 어린 시절: `a Korean boy named Hoguk - round face, bright dark eyes, short black hair with a small cowlick - wearing a hand-knitted orange-and-black striped wool hat with two small round tiger ears`
- 성인 군인: `Hoguk, a 20-year-old Korean soldier - round face, bright dark eyes, short black hair - in a modern Republic of Korea Army digital camouflage uniform, a small embroidered tiger patch on his shoulder`

## 장면별 전체 프롬프트

### S05_style-test_v01
```
Cinematic 3D animated feature film still. Stylized, expressive characters with soft rounded features; highly detailed, realistic environment and historically accurate props with real-world proportions and materials. Warm cinematic lighting, gentle shallow depth of field, subtle film grain.

Scene: Korea, 1948. Interior of a modest wooden kindergarten classroom, warm late-afternoon sunlight. FOREGROUND, in sharp focus: a 5-year-old Korean boy named Hoguk - round face, bright dark eyes, short black hair with a small cowlick - wearing simple late-1940s Korean children's clothes and a hand-knitted orange-and-black striped wool hat with two small round tiger ears. He is laughing while stacking wooden toy blocks on the floor with seven other children.
BACKGROUND, seen through a large wooden-framed window and softly out of focus: soldiers of the newly founded Republic of Korea Army in late-1940s uniforms and M1 steel helmets marching in formation down a dirt street, rifles on shoulders, a Taegukgi flag waving.
Composition: the window frame clearly divides the cozy everyday foreground from the soldiers in the background. Peaceful, nostalgic, hopeful mood. No text.
```

### S15_style-test_v01
```
Cinematic 3D animated feature film still. Stylized, expressive characters with soft rounded features; highly detailed, realistic environment and accurate modern military equipment with real-world proportions, materials and mechanical detail. Cinematic lighting, subtle film grain.

Scene: near future Korea, night, a mountain ridge along a long barbed-wire border fence. FOREGROUND: Hoguk, a 20-year-old Korean soldier - round face, bright dark eyes, short black hair - in a modern Republic of Korea Army digital camouflage combat uniform, helmet with night-vision mount flipped up, a small embroidered tiger patch on his shoulder. He kneels calmly, reading a rugged tablet controller. Beside him stands a realistic four-legged military quadruped robot with sensor head and antennas. Small reconnaissance drones with soft status lights hover along the fence line; a compact tracked unmanned ground vehicle waits further down the path.
In the distance, a long chain of small sensor lights stretches along the fence into the dark mountains - only a few soldiers, but the whole line is watched.
Cold blue moonlight with warm screen glow on his face. Calm vigilance, no combat, no weapons fired. No text.
```

### S18_style-test_v01 (아직 생성 안 됨)
```
Cinematic 3D animated feature film still. Stylized, expressive characters with soft rounded features; highly detailed, realistic environment and accurate modern military equipment. Warm cinematic lighting, subtle film grain.

Scene: dawn, inside a modern Korean army guard post on a hill, looking out through a large window. FOREGROUND: Hoguk, a 20-year-old Korean soldier - round face, bright dark eyes, short black hair - in a modern Republic of Korea Army digital camouflage uniform, helmet held under his arm, a small embroidered tiger patch on his sleeve, seen from behind at three-quarter angle, softly rim-lit by the sunrise. A four-legged military quadruped robot sits quietly beside him like a loyal companion.
BACKGROUND, through the window: down the hill, a bright, colorful kindergarten playground in golden morning light, where small children are stacking big colorful toy blocks and playing.
Composition: the reverse of a childhood scene - now the soldier is in the foreground and the peaceful everyday life is outside the window. Emotional, hopeful, quietly proud. No text.
```

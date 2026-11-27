# 1차안 프롬프트 묶음 (v1)

> 방식 C: 1차안 이미지는 무료 이미지 툴에서 직접 생성 → 결과를 채팅에 올리기 → 제가 검토·기록
> 기준 이미지: `images/S05_style-test_v01.png` (어린 호국이), `images/S15_style-test_v01.png` (군인 호국이)

---

## 사용법

1. 이미지 툴에 **기준 이미지 1장을 먼저 첨부**한다. 각 프롬프트 위에 어떤 이미지를 붙일지 적어 두었다.
2. 아래 **영어 프롬프트 블록을 통째로 복사**해 붙여 넣는다. (영어가 결과가 더 안정적이다)
3. 비율은 **16:9**로 설정한다. 설정이 없으면 프롬프트 안의 `16:9 widescreen`이 대신한다.
4. 마음에 드는 결과가 나올 때까지 2~3번 다시 생성해도 된다. 고른 이미지를 채팅에 올리면서 **장면 번호**를 같이 적어 준다. (예: `S01`)
5. 순서는 **★ 핵심 장면 먼저**. 핵심 7장만 있어도 1차안 흐름이 보인다.

| 순서 | 장면 |
|---|---|
| ★ 핵심 (7장) | S01, S06, S11, S13, S18, S19, S15 수정판 |
| 나머지 (10장) | S02, S03, S04, S07, S08, S09, S10, S12, S14, S16, S17 |

---

## 기준 이미지에서 확정한 것

### 스타일 (STYLE_BASE v1) — 두 장 모두 이 느낌
- 극장용 3D 애니메이션 질감, 둥글고 부드러운 캐릭터
- 소품·건물·장비는 재질과 비율이 사실적
- 따뜻한 역광(낮) / 차가운 달빛 + 따뜻한 화면광(밤)
- 창틀·철책처럼 **화면을 나누는 선**이 구도의 중심

### 호국이 (CHR-01 v1)
| 요소 | 고정값 |
|---|---|
| 얼굴 | 둥근 얼굴, 크고 반짝이는 검은 눈, 짙은 눈썹, 웃을 때 눈이 휘어짐 |
| 머리 | 짧은 검은 머리, 정수리에 작게 삐친 머리 |
| 상징 물건 | **주황 바탕에 검은 줄무늬 손뜨개 털모자, 위에 둥근 호랑이 귀 2개** |
| 군인 시절 | 디지털 위장 전투복, **오른쪽 어깨에 호랑이 얼굴 패치**, 왼쪽 어깨에 태극기 패치 |

### 고칠 점 (군 간부 시선으로 본 것)
| 장면 | 보인 것 | 이번 프롬프트에서 고친 방향 |
|---|---|---|
| S05 | 창밖 군인들이 아이와 같은 비율이라 **어린아이처럼 보인다** | `adult men with adult proportions` 명시 |
| S05 | 태극기의 4괘 배치가 정확한지 확인 필요 | 확대해서 검수 (자료집 단계) |
| S15 | 드론의 **초록·파란 불빛**과 밝은 태블릿 화면은 야간 등화관제와 어긋난다 | 드론은 불빛 없이 실루엣만, 화면은 어둡게 줄인 붉은빛 |
| S15 | 경계 근무인데 **개인화기가 없다** | 가슴 앞으로 총구를 아래로 향한 K2C1 소총 |
| S15 | 철책을 따라 이어진 불빛 | GOP 철책 경계등은 실제로 있어서 유지 |

---

## 핵심 장면 ★

### S01 · 1897 대한제국, 탄생 ★
첨부: `S05` (얼굴형·털모자 참고)
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style as the reference image: stylized characters with soft rounded features, realistic historically accurate environment and props, warm cinematic lighting, subtle film grain.
Korea, 1897. Inside a traditional hanok room at dawn, warm light through rice-paper sliding doors. FOREGROUND: a kind elderly Korean grandmother in a plain white hanbok gently places a tiny hand-knitted orange-and-black striped wool hat with two small round tiger ears on a newborn baby boy wrapped in white cloth; the young mother smiles beside them.
BACKGROUND: one sliding door is half open; outside in the courtyard beyond the wall, adult soldiers of the Korean Empire army in dark western-style 1890s uniforms and kepi caps stand in a training line, one raising a bugle.
The door frame clearly separates the tender family moment from the soldiers. Peaceful, sacred, hopeful. No text.
```

### S06 · 1950 피란길 ★
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image: stylized characters with soft rounded features, realistic historically accurate environment, cinematic lighting, subtle film grain.
Korea, winter 1950. A long line of refugees crossing toward a wooden bridge under a pale grey sky. FOREGROUND: the same 6-year-old boy Hoguk, wearing his orange-and-black striped wool hat with tiger ears and a padded winter coat, sits on a wooden hand cart piled with bundles; his mother hands him a rice ball and he smiles at her.
BACKGROUND, softly out of focus: adult Republic of Korea Army soldiers in 1950 winter uniforms and M1 helmets stand guard along the bridge with their backs to us, protecting the refugee line.
No fighting, no explosions, no injuries. Quiet, cold, but warm between mother and child. No text.
```

### S11 · 2026 텅 빈 놀이터 ★
첨부: `S15` (성인 얼굴형 참고)
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same young man's face as the reference image: stylized characters with soft rounded features, realistic modern environment, cinematic lighting, subtle film grain.
Korea, 2026, autumn dusk. An almost empty neighborhood playground between apartment buildings: an empty swing slowly moving, a slide with no children. FOREGROUND: Hoguk, a 20-year-old Korean man with a round face, big bright dark eyes and short black hair, in a casual hoodie, sits alone on a bench looking at his smartphone; an orange-and-black tiger-ear knitted keychain hangs from his backpack. His face is lit by the phone, thoughtful.
BACKGROUND: quiet streets, no soldiers, no people — the emptiness is the point.
Melancholic, quiet, a question in the air. No readable text on the phone.
```

### S13 · 유무인복합분대 첫 만남 ★
첨부: `S15`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same soldier as the reference image: stylized characters with soft rounded features, highly realistic modern military equipment with accurate proportions and mechanical detail, cinematic lighting, subtle film grain.
Near-future Korea, morning, a training ground in front of a military hangar. A manned-unmanned combined squad stands in formation: eight young Korean soldiers in modern Republic of Korea Army digital camouflage uniforms — four combat soldiers with K2C1 rifles held at the ready pointed down, and four unmanned-systems operators with rugged tablets and controllers. In front of them, neatly lined up like building blocks: two four-legged military quadruped robots, a row of reconnaissance quadcopter drones on the ground, and a compact tracked unmanned ground vehicle.
Hoguk, with a tiger patch on his right shoulder, stands in the front row, looking at the robots with curiosity and a small smile.
Orderly, proud, a new beginning. No text.
```

### S15 수정판 · 야간 경계 ★
첨부: `S15`
```
16:9 widescreen. Same scene, same art style and same soldier as the reference image, with these changes:
- The soldier carries a K2C1 rifle slung across his chest, muzzle pointed down.
- The tablet screen is dimmed with a red night filter, only a faint red glow on his face.
- The drones have no colored lights — only dark silhouettes against the night sky.
- Keep the long line of fence lights along the barbed-wire fence into the mountains, the quadruped robot, the tracked unmanned ground vehicle, the guard tower and the cold blue moonlight.
Calm vigilance, no combat. No text.
```

### S18 · 반전: 초소 창문 너머 유치원 ★
첨부: `S15`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same soldier as the reference image: stylized characters with soft rounded features, realistic modern military environment and equipment, warm cinematic lighting, subtle film grain.
Dawn, inside a modern Korean army guard post on a hill, looking out through a large window with a wooden-like frame. FOREGROUND: Hoguk in his digital camouflage uniform with the tiger patch on his right shoulder, helmet held under his arm, seen from behind at a three-quarter angle, rim-lit by the sunrise. A four-legged military quadruped robot sits quietly beside him like a loyal companion.
BACKGROUND, through the window: down the hill, a bright kindergarten playground in golden morning light, small children stacking big colorful toy blocks and playing.
The composition mirrors a 1948 kindergarten scene in reverse: now the soldier is in the foreground and peaceful everyday life is outside the window. Emotional, hopeful, quietly proud. No text.
```

### S19 · 마지막: 털모자를 쓴 아이 ★
첨부: `S05` (구도를 그대로 따라가게)
```
16:9 widescreen. Same composition, camera angle and art style as the reference image, but set in present-day Korea: a bright modern kindergarten classroom with large clean windows, colorful toys, warm morning light.
FOREGROUND: a small 5-year-old child wearing the same hand-knitted orange-and-black striped wool hat with two round tiger ears, laughing while stacking wooden toy blocks with a few friends (fewer children than in the reference image).
BACKGROUND, through the window and softly out of focus: a modern Republic of Korea Army manned-unmanned squad walks by — adult soldiers in digital camouflage uniforms with a four-legged quadruped robot and a small drone above them. One soldier with a round face turns slightly toward the window.
Hopeful, warm, full circle. No text.
```

---

## 나머지 장면

### S02 · 1907 군대 해산 → 의병
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same baby boy as the reference image (younger): stylized characters with soft rounded features, realistic historically accurate environment, cinematic lighting, subtle film grain.
Korea, 1907, late afternoon. FOREGROUND: on the wooden veranda (toenmaru) of a hanok, a 1-year-old toddler wearing the orange-and-black tiger-ear knitted hat takes his very first steps toward his clapping parents.
BACKGROUND, beyond the low stone wall: a group of adult soldiers in worn dark Korean Empire uniforms, now disbanded, walk away carrying their rifles toward the mountains; on a distant ridge, small torch lights of the Righteous Army begin to glow in the dusk.
Tender in front, solemn behind. No text.
```

### S03 · 1920 눈 오는 마당, 독립군
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image (age 3): stylized characters with soft rounded features, realistic historically accurate environment, cinematic lighting, subtle film grain.
Korea, winter 1920. A snowy hanok courtyard. FOREGROUND: a 3-year-old boy in a padded winter hanbok and the orange-and-black tiger-ear knitted hat builds a small snowman, cheeks red, laughing.
BACKGROUND: on a far snowy mountain ridge under a pale sky, a line of small silhouettes of Korean independence army fighters in winter coats marching single file.
Quiet snowfall, cold air, warm child. No text.
```

### S04 · 1945 광복
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image (age 5): stylized characters with soft rounded features, realistic historically accurate environment, warm cinematic lighting, subtle film grain.
Korea, August 1945, Liberation Day. A crowded street full of joyful people in white clothes waving Taegukgi flags. FOREGROUND: the boy with the orange-and-black tiger-ear knitted hat rides on his father's shoulders, both arms raised, shouting with joy.
BACKGROUND at the edge of the crowd: a few adult soldiers of the Korean Liberation Army in khaki uniforms and caps, standing tall and moved, watching the crowd.
Explosive joy, golden summer light. No text.
```

### S07 · 1960~70년대 등굣길, 대민 지원
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image (age 8): stylized characters with soft rounded features, realistic historically accurate environment, warm morning light, subtle film grain.
Korea, early 1970s, spring morning. FOREGROUND: the boy in a 1970s Korean elementary school uniform with a school bag and the orange-and-black tiger-ear knitted hat walks to school along a narrow path between rice paddies, holding a friend's hand.
BACKGROUND: in the flooded paddies, adult Republic of Korea Army soldiers in 1970s olive fatigues help farmers plant rice seedlings, sleeves rolled up, smiling.
Bright, hardworking, hopeful. No text.
```

### S08 · 1988 운동회, 올림픽
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image (age 10): stylized characters with soft rounded features, realistic historically accurate environment, bright cinematic daylight, subtle film grain.
Korea, autumn 1988, school sports day. FOREGROUND: the boy with the orange-and-black tiger-ear knitted hat sprints in a relay race, white headband, crowded cheering classmates — the schoolyard is full of children.
BACKGROUND, beyond the school fence: adult Republic of Korea Army soldiers in 1980s woodland-pattern camouflage uniforms and helmets standing guard near colorful 1988 Olympic banners (no readable text).
Energetic, festive. No text.
```

### S09 · 1990~2000년대 가족 여행, 수해 복구
첨부: `S05`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same boy as the reference image (age 13): stylized characters with soft rounded features, realistic environment, soft cinematic light, subtle film grain.
Korea, late 1990s. Inside the back seat of a 1990s Korean family sedan on a highway. FOREGROUND: the boy, now 13, sleeps against the car window; his backpack beside him has a small orange-and-black tiger-ear knitted keychain. His parents chat in the front seats.
BACKGROUND, through the car window: in a flooded village by the road, adult Republic of Korea Army soldiers in camouflage uniforms carry sandbags and help residents clean up after a flood.
Calm inside, hard work outside. No text.
```

### S10 · 2010~2020년대 빈 책상
첨부: `S15` (얼굴형을 10대로)
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same face as the reference image but as a 17-year-old student: stylized characters with soft rounded features, realistic modern environment, soft daylight, subtle film grain.
Korea, 2020. A modern high school classroom with many empty desks — only a few students wearing face masks. FOREGROUND: Hoguk in a school uniform sits by the window, the tiger-ear knitted keychain on his bag hanging from the desk.
BACKGROUND, through the window: adult Republic of Korea Army soldiers in protective suits and masks spraying disinfectant along the street outside the school.
Quiet, slightly lonely, sunlight on empty chairs. No text.
```

### S12 · 입대, 관물대
첨부: `S15`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same young man as the reference image: stylized characters with soft rounded features, realistic modern military barracks, cinematic lighting, subtle film grain.
Korea, present day. A clean modern army training-center barracks at night. FOREGROUND: Hoguk, newly enlisted, freshly buzz-cut, in a new digital camouflage uniform, carefully places the old orange-and-black tiger-ear knitted hat on the top shelf of his metal locker, smiling softly.
BACKGROUND: through the barracks window, the dark training ground and a single lit flagpole.
Quiet resolve, a new chapter. No text.
```

### S14 · 훈련, 로봇개와 털모자
첨부: `S15`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style and same soldier as the reference image: stylized characters with soft rounded features, highly realistic modern military equipment, bright daylight, subtle film grain.
A muddy training field. A four-legged military quadruped robot trots proudly toward Hoguk carrying his orange-and-black tiger-ear knitted hat in its gripper; Hoguk, kneeling in his digital camouflage uniform, laughs in surprise while the rest of his squad behind him burst out laughing.
Warm humor, team bond. No text.
```

### S16 · 지휘통제실
첨부: `S15`
```
16:9 widescreen. Cinematic 3D animated feature film still, same art style as the reference image: stylized characters with soft rounded features, highly realistic modern military command post, cinematic lighting, subtle film grain.
A dark modern Korean army command and control room. A large wall display shows a tactical map of mountainous terrain where many small icons — soldiers, quadruped robots, drones and unmanned vehicles — are connected by glowing network lines. Officers and operators in digital camouflage uniforms work at consoles. Hoguk's squad appears as one connected cluster on the map.
Focused, high-tech, calm. No readable text.
```

### S17 · 블록이 쌓여 한반도가 되다
첨부: 없음 (또는 `S05` 블록 질감 참고)
```
16:9 widescreen. Cinematic 3D animated feature film still: stylized, warm cinematic lighting, subtle film grain.
On a dark background, wooden toy building blocks are stacked into the shape of the Korean Peninsula. Each block carries a tiny realistic miniature: soldiers, quadruped robots, drones, tracked unmanned vehicles. More blocks are floating in and landing into place, filling the peninsula from south to north, glowing softly where they connect.
Symbolic, building toward the future. No text.
```

# คู่มือสเปกและ Prompt สำหรับ Gen ภาพตัวละครใหม่ (c051 - c080)

เอกสารนี้รวบรวมข้อมูลอย่างละเอียดสำหรับนำไปสร้างภาพกราฟิกในโปรเจกต์ Anime TCG ทั้งหมด 30 ตัวละครใหม่ แบ่งเป็น 2 รูปแบบหลัก:
1. **TCG Card Artwork (`assets/anime/cards/cXXX.webp`)**: ภาพการ์ดเต็มตัว สไตล์อนิเมะลายเส้นคมชัด อัตราส่วน 3:4 (แนะนำ 768x1024 หรือ 1200x1600 แล้วเซฟเป็น .webp)
2. **8-Bit Battle Sprite Sheet (`assets/anime/sprites/cXXX.png`)**: ภาพพิกเซลอาร์ตสำหรับฉากต่อสู้ ขนาดรวม 256x64 px (4 เฟรมแนวนอน: Idle, Ready, Attack, Hurt แต่ละเฟรมขนาด 64x64 px) หรือพิกเซลสไปรท์เดี่ยว 64x64 px พื้นหลังโปร่งใส (Transparent RGBA PNG)

---

## สรุปภาพรวมจำนวน Asset
| กลุ่มความหายาก | จำนวนตัวละคร | รหัส ID | ลักษณะออร่า & เอฟเฟกต์ |
| :-- | :-: | :-- | :-- |
| **UR (Ultra Rare)** | 3 | c051, c057, c060 | ออร่าทองเปล่งประกาย คลื่นพลังอลังการ ท่าไม้ตายเต็มจอ |
| **SSR (Super Super Rare)** | 9 | c052, c056, c058, c061, c064, c067, c068, c071, c076 | ออร่าธาตุเข้มข้น ประกายแสงเอฟเฟกต์เฉพาะตัว |
| **SR (Super Rare)** | 9 | c059, c063, c065, c066, c069, c072, c073, c077, c078 | ท่วงท่าต่อสู้คล่องแคล่ว มีเอฟเฟกต์พลังธาตุรอบตัว |
| **R (Rare)** | 9 | c053, c054, c055, c062, c070, c074, c075, c079, c080 | ท่าทางเอกลักษณ์ประจำตัว สะท้อนบุคลิกตามเนื้อเรื่อง |

---

## 1. One Piece (3 ตัวละคร)

### c051: Edward Newgate (Whitebeard)
- **Rarity**: UR | **ธาตุ**: Earth | **Role**: Attacker
- **Stats**: HP 2750 | ATK 555 | DEF 400 | SPD 108 | SP 60
- **สกิล**: Gura Gura no Mi: Seaquake Punch (สั่นสะเทือนมิติ รอยแยกอากาศกระจายตัว)
- **Card Prompt (`c051.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Edward Newgate Whitebeard from One Piece, massive towering muscular build, iconic white crescent mustache, open dark coat fluttering, wielding giant Murakumogiri naginata with glowing sphere of seismic tremor energy around his fist, shattering air glass cracking shockwaves, roaring naval battlefield Marineford background, dramatic lighting, epic volumetric aura, golden UR framing accents, vertical card composition --ar 3:4`
- **8-Bit Sprite Prompt (`c051.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Edward Newgate Whitebeard, tall muscular pirate captain with white crescent mustache, holding naginata, frame 1 idle breathing, frame 2 combat ready stance, frame 3 swinging naginata with earthquake white shockwave, frame 4 hurt reaction, clean pixel art, vibrant retro game colors, transparent background --ar 4:1`

---

### c052: Jinbe
- **Rarity**: SSR | **ธาตุ**: Water | **Role**: Tank
- **Stats**: HP 2650 | ATK 460 | DEF 450 | SPD 102 | SP 50
- **สกิล**: Fish-Man Karate: Samehada Shotei (คาราเต้มนุษย์เงือก คลื่นน้ำวนกระแทก)
- **Card Prompt (`c052.webp`)**:
  > `masterpiece, dynamic anime card art, Jinbe First Son of the Sea from One Piece, blue whale shark fish-man with wild black topknot and yellow traditional kimono, powerful martial art palm thrust releasing swirling spiral water vortex and crashing ocean waves, glowing turquoise water droplets, stormy ocean reef background, cinematic lighting, SSR glowing border --ar 3:4`
- **8-Bit Sprite Prompt (`c052.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Jinbe the fish-man karate master, blue skin bulky frame, yellow kimono, frame 1 standing firm, frame 2 karate palm raised, frame 3 thrusting water wave palm, frame 4 defensive stagger, retro arcade pixel aesthetic, transparent background --ar 4:1`

---

### c053: Usopp
- **Rarity**: R | **ธาตุ**: Earth | **Role**: Tactician
- **Stats**: HP 2050 | ATK 335 | DEF 325 | SPD 100 | SP 40
- **สกิล**: Midori Boshi: Devil (ยิงกระสุนพฤกษา กัดกินและพันธนาการศัตรู)
- **Card Prompt (`c053.webp`)**:
  > `anime card art, Usopp God Usopp post-timeskip from One Piece, wearing goggles and yellow hat, pulling back giant Kuro Kabuto slingshot, aiming Pop Green seed sprout, giant carnivorous green vines and snapping flytrap plants bursting from ground, dense overgrown jungle background, energetic action angle --ar 3:4`
- **8-Bit Sprite Prompt (`c053.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Usopp with long nose and large slingshot, frame 1 idle holding slingshot, frame 2 aiming pose, frame 3 shooting seed bullet, frame 4 comical ducking hurt, cute retro pixel game style, transparent background --ar 4:1`

---

## 2. Jujutsu Kaisen (3 ตัวละคร)

### c054: Shoko Ieiri
- **Rarity**: R | **ธาตุ**: Light | **Role**: Healer
- **Stats**: HP 2150 | ATK 315 | DEF 335 | SPD 95 | SP 40
- **สกิล**: Reverse Cursed Technique: Field Medic (ไสยเวทย์ย้อนกลับ ละอองแสงฟื้นฟู)
- **Card Prompt (`c054.webp`)**:
  > `anime card art, Shoko Ieiri from Jujutsu Kaisen, doctor white coat over dark shirt, calm expression, hands glowing with warm emerald and golden healing aura of Reverse Cursed Technique, soft glowing particles and medical ward atmosphere, Jujutsu High clinic room background, clean anime shading --ar 3:4`
- **8-Bit Sprite Prompt (`c054.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Shoko Ieiri doctor in white coat, frame 1 calm standing, frame 2 raising hands with green glow, frame 3 casting glowing healing aura wave, frame 4 stepping back hurt, retro pixel art, transparent background --ar 4:1`

---

### c055: Panda
- **Rarity**: R | **ธาตุ**: Earth | **Role**: Tank
- **Stats**: HP 2250 | ATK 320 | DEF 350 | SPD 92 | SP 40
- **สกิล**: Gorilla Mode: Drumming Rampage (โหมดกอริลลา กล้ามโต ทุบพื้นสะเทือน)
- **Card Prompt (`c055.webp`)**:
  > `anime card art, Panda in Gorilla Mode from Jujutsu Kaisen, giant muscular anthropomorphic panda with spiked brass knuckles, fierce roar, earth craters cracking beneath feet, cursed energy smoke swirling around fists, dynamic low angle punch, Jujutsu High training grounds --ar 3:4`
- **8-Bit Sprite Prompt (`c055.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Panda gorilla core, bulky cute yet fierce panda with boxing wraps, frame 1 bouncing stance, frame 2 chest pounding, frame 3 heavy double-fist ground slam, frame 4 stumbling back, retro pixel art, transparent background --ar 4:1`

---

### c056: Yuta Okkotsu
- **Rarity**: SSR | **ธาตุ**: Light | **Role**: Spell
- **Stats**: HP 2350 | ATK 520 | DEF 360 | SPD 118 | SP 55
- **สกิล**: Rika Manifestation: Pure Love Beam (ริกะปรากฏกาย ลำแสงแห่งความรักบริสุทธิ์)
- **Card Prompt (`c056.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Yuta Okkotsu from Jujutsu Kaisen 0, white uniform, holding katana infused with brilliant blue and radiant white cursed energy, giant monstrous spectral silhouette of Rika Queen of Curses looming protectively behind him, blasting massive beam of pure love light, dark shattered Sendai ruins, SSR glowing border --ar 3:4`
- **8-Bit Sprite Prompt (`c056.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Yuta Okkotsu with katana and dark ghostly shadow companion behind, frame 1 ready with sword, frame 2 channeling bright blue energy, frame 3 sword slash unleashing spectral energy beam, frame 4 shield block recoil, pixel art, transparent background --ar 4:1`

---

## 3. Demon Slayer (3 ตัวละคร)

### c057: Yoriichi Tsugikuni
- **Rarity**: UR | **ธาตุ**: Fire | **Role**: Attacker
- **Stats**: HP 2550 | ATK 570 | DEF 370 | SPD 130 | SP 60
- **สกิล**: Sun Breathing: Dance & Solar Heat Haze (ปราณตะวัน ระบำเพลิงสุริยัน)
- **Card Prompt (`c057.webp`)**:
  > `masterpiece, god-tier anime card art, Yoriichi Tsugikuni the progenitor of breathing styles from Demon Slayer, calm transcendent eyes, flame mark on forehead, red haori and hanafuda earrings, unsheathing deep crimson red Nichirin blade enveloped in blinding swirling solar flares, dragon of pure golden sunfire erupting, burning embers floating in twilight, UR ornate golden framing --ar 3:4`
- **8-Bit Sprite Prompt (`c057.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Yoriichi Tsugikuni legendary swordsman in red haori, frame 1 serene standing with hand on hilt, frame 2 unsheathing sword with glowing red flame, frame 3 circular solar dragon flame slash, frame 4 slight step-back parry, fluid retro pixel art, transparent background --ar 4:1`

---

### c058: Giyu Tomioka
- **Rarity**: SSR | **ธาตุ**: Water | **Role**: Attacker
- **Stats**: HP 2450 | ATK 520 | DEF 375 | SPD 116 | SP 50
- **สกิล**: Water Breathing: Eleventh Form, Dead Calm (ปราณวารี กระบวนท่าที่ 11 ผิวน้ำสงบนิ่ง)
- **Card Prompt (`c058.webp`)**:
  > `masterpiece, dynamic anime card art, Giyu Tomioka Water Hashira from Demon Slayer, split pattern haori, impassive sharp gaze, wielding blue Nichirin sword in perfect stillness, serene mirror-smooth lake surface reflecting moon, sudden explosion of crystal blue water ripples and tidal waves slicing through darkness, Natagumo mountain night background, SSR frame --ar 3:4`
- **8-Bit Sprite Prompt (`c058.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Giyu Tomioka Hashira in split-pattern haori, frame 1 steady calm stance, frame 2 low ready sword draw, frame 3 dead calm water blade strike with blue ripples, frame 4 guarded stance, retro pixel game aesthetic, transparent background --ar 4:1`

---

### c059: Shinobu Kocho
- **Rarity**: SR | **ธาตุ**: Wind | **Role**: Assassin
- **Stats**: HP 2000 | ATK 465 | DEF 310 | SPD 136 | SP 45
- **สกิล**: Insect Breathing: Dance of the Dragonfly (ปราณแมลง ระบำแมลงปอ พิษวิสทีเรีย)
- **Card Prompt (`c059.webp`)**:
  > `anime card art, Shinobu Kocho Insect Hashira from Demon Slayer, butterfly wing patterned haori, gentle enigmatic smile, slender needle-tip Nichirin stinger blade, mid-air leaping pose surrounded by a flurry of luminous purple butterfly illusions and glowing wisteria poison sparkles, moonlight night forest background --ar 3:4`
- **8-Bit Sprite Prompt (`c059.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Shinobu Kocho butterfly haori, frame 1 floating light stance, frame 2 needle blade poised forward, frame 3 rapid multi-thrust with purple butterfly sparks, frame 4 delicate airborne recovery, retro pixel art, transparent background --ar 4:1`

---

## 4. Naruto (3 ตัวละคร)

### c060: Minato Namikaze
- **Rarity**: UR | **ธาตุ**: Lightning | **Role**: Assassin
- **Stats**: HP 2300 | ATK 555 | DEF 350 | SPD 148 | SP 55
- **สกิล**: Flying Thunder God: Rasengan Strike (เทพสายฟ้าเหิน กระสุนวงจักรประกายแสงสีทอง)
- **Card Prompt (`c060.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Minato Namikaze the Yellow Flash of the Leaf Fourth Hokage, white and flame-trimmed Hokage cloak billowing, holding tri-pronged Flying Thunder God kunai in one hand and forming a massive spiraling electric-blue Rasengan with golden teleportation lightning streaks around his body, warping through space, UR golden accents --ar 3:4`
- **8-Bit Sprite Prompt (`c060.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Minato Namikaze Yellow Flash in white Hokage coat, frame 1 holding special kunai, frame 2 charging blue Rasengan sphere, frame 3 instant yellow flash dash attack, frame 4 agile backward leap, fast-paced pixel art, transparent background --ar 4:1`

---

### c061: Tsunade
- **Rarity**: SSR | **ธาตุ**: Water | **Role**: Healer
- **Stats**: HP 2450 | ATK 430 | DEF 380 | SPD 108 | SP 50
- **สกิล**: Creation Rebirth: Hundred Healings (วิชากำเนิดใหม่ เบียคุโกะฟื้นฟูเซลล์ขั้นสูงสุด)
- **Card Prompt (`c061.webp`)**:
  > `masterpiece, dynamic anime card art, Tsunade the Fifth Hokage Legendary Sannin, green haori over grey kimono, Strength of a Hundred seal diamond mark releasing black tattoos across forehead and face, vibrant green regenerative chakra healing aura, stomping ground causing colossal stone fissures, Konoha hospital ruins background, SSR glowing frame --ar 3:4`
- **8-Bit Sprite Prompt (`c061.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Tsunade Hokage in green jacket, frame 1 confident arm fold, frame 2 chakra fist raised, frame 3 colossal ground punch with green chakra shockwave, frame 4 resilient guard, 16-bit pixel game sprite, transparent background --ar 4:1`

---

### c062: Rock Lee
- **Rarity**: R | **ธาตุ**: Wind | **Role**: Attacker
- **Stats**: HP 2000 | ATK 355 | DEF 310 | SPD 106 | SP 40
- **สกิล**: Eight Gates: Primary Lotus (เปิดประตูด่านที่หนึ่ง บัวบานแรกแย้ม)
- **Card Prompt (`c062.webp`)**:
  > `anime card art, Rock Lee from Naruto, green jumpsuit and orange leg warmers, unravelling white hand bandages, intense fiery determined gaze, surging green vapor aura of the Inner Gates opening, leaping into high-speed dynamic kick creating air whirlwinds, Chunin exam arena background --ar 3:4`
- **8-Bit Sprite Prompt (`c062.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Rock Lee in green suit, frame 1 iconic thumbs-up pose, frame 2 taijutsu ready stance, frame 3 furious spinning roundhouse kick with wind spiral, frame 4 exhaustion stagger, retro pixel art, transparent background --ar 4:1`

---

## 5. Hunter x Hunter (3 ตัวละคร)

### c063: Alluka Zoldyck (Nanika)
- **Rarity**: SR | **ธาตุ**: Light | **Role**: Healer
- **Stats**: HP 2150 | ATK 405 | DEF 345 | SPD 106 | SP 45
- **สกิล**: Nanika's Wish: Reset (คำขอของนานิกะ พลังแก้ไขชะตากรรมฟื้นฟูไร้ขีดจำกัด)
- **Card Prompt (`c063.webp`)**:
  > `anime card art, Alluka Zoldyck shifting into Nanika from Hunter x Hunter, traditional shrine maiden robe, dark abyss void eyes and eerie innocent smile, swirling magical iridescent light particles, Reality-warping mystical cosmos aura twisting around fingertips, Zoldyck mansion room background --ar 3:4`
- **8-Bit Sprite Prompt (`c063.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Alluka / Nanika with dark face shift, frame 1 cute standing, frame 2 hands reaching out, frame 3 dark void face casting cosmic healing spark, frame 4 innocent tilt, retro pixel art, transparent background --ar 4:1`

---

### c064: Isaac Netero
- **Rarity**: SSR | **ธาตุ**: Light | **Role**: Tank
- **Stats**: HP 2650 | ATK 470 | DEF 440 | SPD 104 | SP 55
- **สกิล**: 100-Type Guanyin Bodhisattva (คันนนร้อยกร เมตตาฝ่ามือสวรรค์)
- **Card Prompt (`c064.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Chairman Isaac Netero from Hunter x Hunter Chimera Ant arc, Shingen-ryu heart shirt, hands clasped in supreme prayer of gratitude, colossal golden multi-armed Guanyin Bodhisattva glowing behind him with dozens of divine golden palms descending at supersonic speed, Tomb of the King background, SSR border --ar 3:4`
- **8-Bit Sprite Prompt (`c064.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Chairman Netero old martial artist in sleeveless shirt, frame 1 praying hands stance, frame 2 closing eyes, frame 3 golden multi-palm strike apparition, frame 4 relaxed smiling dodge, retro pixel art, transparent background --ar 4:1`

---

### c065: Feitan Portor
- **Rarity**: SR | **ธาตุ**: Fire | **Role**: Assassin
- **Stats**: HP 2050 | ATK 480 | DEF 315 | SPD 134 | SP 45
- **สกิล**: Rising Sun: Pain Packer (อาทิตย์อัสดง เปลวเพลิงแผดเผาตามความเจ็บปวด)
- **Card Prompt (`c065.webp`)**:
  > `anime card art, Feitan Portor Phantom Troupe member from Hunter x Hunter, dark cloak with skull collar, pulling umbrella sword with sinister piercing golden eyes, conjuring Pain Packer armor and unleashing a blazing miniature artificial sun ball of searing incinerating red-hot heat, Meteor City ruins background --ar 3:4`
- **8-Bit Sprite Prompt (`c065.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Feitan in black coat with skull mask, frame 1 holding umbrella, frame 2 drawing concealed thin sword, frame 3 fiery sun fireball eruption, frame 4 agile sidestep, retro 16-bit pixel art, transparent background --ar 4:1`

---

## 6. Bleach (5 ตัวละคร)

### c066: Orihime Inoue
- **Rarity**: SR | **ธาตุ**: Light | **Role**: Healer
- **Stats**: HP 2250 | ATK 385 | DEF 365 | SPD 102 | SP 45
- **สกิล**: Santen Kesshun & Soten Kisshun (โล่ตรีเทพและม่านฟื้นฟูปฏิเสธความเป็นจริง)
- **Card Prompt (`c066.webp`)**:
  > `anime card art, Orihime Inoue from Bleach Thousand-Year Blood War, orange hair, gentle resolute expression, deploying golden polygonal energy shield barrier Santen Kesshun, warm golden spiritual fairy spirits Ayame and Shun'o creating a glowing healing reversal field, Hueco Mundo desert sky background --ar 3:4`
- **8-Bit Sprite Prompt (`c066.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Orihime Inoue in white attire, frame 1 standing praying, frame 2 hands forward summon, frame 3 triangular glowing golden shield and healing aura, frame 4 defensive recoil, retro pixel art, transparent background --ar 4:1`

---

### c067: Yoruichi Shihoin
- **Rarity**: SSR | **ธาตุ**: Lightning | **Role**: Assassin
- **Stats**: HP 2200 | ATK 515 | DEF 335 | SPD 146 | SP 50
- **สกิล**: Shunko: Lightning Flash God (ชุนโค เทพสายฟ้าไร้เงา)
- **Card Prompt (`c067.webp`)**:
  > `masterpiece, dynamic anime card art, Yoruichi Shihoin the Flash Goddess from Bleach, athletic build, purple ponytail, executing Shunko with cracked fabric on back and shoulders emitting blinding white and violet lightning pressure waves, sprinting at supersonic speed leaving afterimages, rooftop of Seireitei background, SSR glowing border --ar 3:4`
- **8-Bit Sprite Prompt (`c067.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Yoruichi agile ninja form, frame 1 low crouch ready, frame 2 shunko lightning charge around shoulders, frame 3 high speed flying kick with violet lightning trail, frame 4 nimble landing, retro pixel art, transparent background --ar 4:1`

---

### c068: Kenpachi Zaraki
- **Rarity**: SSR | **ธาตุ**: Earth | **Role**: Attacker
- **Stats**: HP 2600 | ATK 545 | DEF 360 | SPD 104 | SP 50
- **สกิล**: Unrestrained Slash: Eyepatch Released (ปลดผ้าปิดตา คลื่นแรงดันวิญญาณฟาดฟัน)
- **Card Prompt (`c068.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Kenpachi Zaraki Squad 11 Captain from Bleach, menacing grin, ragged captain haori, tearing off eyepatch, titanic golden-yellow spiritual pressure reiatsu roaring like a giant skull demon in the sky, overhead two-handed cleave of chipped zanpakuto slicing the earth in half, Seireitei battleground, SSR border --ar 3:4`
- **8-Bit Sprite Prompt (`c068.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Kenpachi Zaraki spiked hair captain haori, frame 1 dragging sword on ground, frame 2 ripping off eyepatch, frame 3 giant downward two-handed slash with yellow shockwave, frame 4 bloodthirsty laugh taking hit, retro pixel art, transparent background --ar 4:1`

---

### c069: Toshiro Hitsugaya
- **Rarity**: SR | **ธาตุ**: Water | **Role**: Spell
- **Stats**: HP 2100 | ATK 470 | DEF 325 | SPD 118 | SP 45
- **สกิล**: Hyorinmaru: Guncho Tsurara (เฮียวรินมารุ ฝูงห่าศรน้ำแข็งมังกรคราม)
- **Card Prompt (`c069.webp`)**:
  > `anime card art, Toshiro Hitsugaya Squad 10 Captain from Bleach, silver hair, captain haori, swinging Hyorinmaru releasing an enormous serpentine ice dragon soaring through swirling blizzard winds, crystalline frost shards and icicles bursting outward, frozen lake Soul Society background --ar 3:4`
- **8-Bit Sprite Prompt (`c069.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Toshiro Hitsugaya small stature captain with back-sheathed sword, frame 1 sword held forward, frame 2 freezing frost aura around blade, frame 3 ice dragon wave thrust, frame 4 ice shield block, retro pixel art, transparent background --ar 4:1`

---

### c070: Yasutora Sado (Chad)
- **Rarity**: R | **ธาตุ**: Earth | **Role**: Tank
- **Stats**: HP 2350 | ATK 335 | DEF 345 | SPD 90 | SP 40
- **สกิล**: El Directo: La Muerte (หมัดยักษ์แขนขวาแห่งยักษ์ หมัดเพลิงปีศาจ)
- **Card Prompt (`c070.webp`)**:
  > `anime card art, Yasutora Chad Sado from Bleach, tall broad-shouldered build, Brazo Derecha del Gigante armored arm and Brazo Izquierda del Diablo shield arm activated, firing crushing electrical skull blast La Muerte, shattered stone boulders flying, dark Karakura town street background --ar 3:4`
- **8-Bit Sprite Prompt (`c070.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Chad with giant armored demonic arms, frame 1 heavy guard stance, frame 2 winding up giant arm, frame 3 explosive straight punch with energy skull impact, frame 4 sturdy shield block, retro pixel art, transparent background --ar 4:1`

---

## 7. Katekyo Hitman Reborn! (5 ตัวละคร)

### c071: Tsunayoshi Sawada (Tsuna)
- **Rarity**: SSR | **ธาตุ**: Fire | **Role**: Attacker
- **Stats**: HP 2520 | ATK 545 | DEF 370 | SPD 122 | SP 50
- **สกิล**: X-Burner: Maximum Output (เพลิงดับเครื่องชนแรงผลักดันสูงสุด เร่งความเร็วและทำลายล้าง)
- **Card Prompt (`c071.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Tsunayoshi Sawada Tsuna from Katekyo Hitman Reborn, Hyper Dying Will Mode, pure blazing orange Sky Dying Will Flame on forehead, sharp focused amber eyes, wearing black sweater and X-Gloves Ver. Vongola Ring firing colossal concentrated orange flame beam forward with X-Burner posture, dynamic blast shockwave tearing ground, floating embers, SSR glowing flame border --ar 3:4`
- **8-Bit Sprite Prompt (`c071.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Tsuna Hyper Dying Will mode with orange forehead flame, frame 1 hovering floating idle, frame 2 crossed arms X-Burner charge, frame 3 firing massive orange X-Burner beam, frame 4 aerial recoil hover, retro arcade pixel art, transparent background --ar 4:1`

---

### c072: Kyoya Hibari
- **Rarity**: SR | **ธาตุ**: Dark | **Role**: Assassin
- **Stats**: HP 2100 | ATK 490 | DEF 320 | SPD 140 | SP 45
- **สกิล**: Cloud Tonfa: Kamikorosu (กระหน่ำทอนฟาวายุเมฆา กัดให้ตายและสตัน)
- **Card Prompt (`c072.webp`)**:
  > `anime card art, Kyoya Hibari from Katekyo Hitman Reborn, Namimori Middle school black uniform coat draped casually over shoulders, cold piercing smirk, dual steel tonfas ignited with swirling violet Cloud Dying Will flames, purple needle hedgehog Roll manifestation in dark misty background, midnight moonlit school rooftop, SR border --ar 3:4`
- **8-Bit Sprite Prompt (`c072.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Kyoya Hibari with black school coat and tonfas, frame 1 hand in pocket idle, frame 2 tonfas raised with purple flame, frame 3 rapid tonfa combo flurry with purple slash arcs, frame 4 arrogant sidestep guard, retro pixel art, transparent background --ar 4:1`

---

### c073: Takeshi Yamamoto
- **Rarity**: SR | **ธาตุ**: Water | **Role**: Tactician
- **Stats**: HP 2300 | ATK 460 | DEF 360 | SPD 114 | SP 45
- **สกิล**: Shigure Soen Ryu: Mirroring Rain (เพลงดาบพิรุณชิเงุเระโซเอ็นริว ดาบสายน้ำแห่งความสงบนิ่ง)
- **Card Prompt (`c073.webp`)**:
  > `anime card art, Takeshi Yamamoto from Katekyo Hitman Reborn, cheerful smile shifting into deadly swordsman focus, wielding Shigure Kintoki katana enveloped in serene blue Rain Dying Will flames and rushing water torrents, Kojiro blue swallow bird soaring alongside, reflective rain ripples, SR border --ar 3:4`
- **8-Bit Sprite Prompt (`c073.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Takeshi Yamamoto swordsman with blue flame blade, frame 1 relaxed blade resting on shoulder, frame 2 two-handed kendo ready stance, frame 3 dashing horizontal slash with blue wave rush, frame 4 calm defensive block, retro pixel art, transparent background --ar 4:1`

---

### c074: Ryohei Sasagawa
- **Rarity**: R | **ธาตุ**: Light | **Role**: Healer
- **Stats**: HP 2250 | ATK 340 | DEF 340 | SPD 96 | SP 40
- **สกิล**: Maximum Cannon: Sun Activation (หมัดอรุณสุดขั้ว ปล่อยเพลิงอรุณเร่งการรักษาเซลล์ทั้งทีม)
- **Card Prompt (`c074.webp`)**:
  > `anime card art, Ryohei Sasagawa from Katekyo Hitman Reborn, boxing headgear and hand wraps, shouting EXTREME with fiery passion, radiant golden and yellow Sun Dying Will flames erupting from fists, glowing regenerative sunlight aura healing surroundings, boxing ring canvas shattering --ar 3:4`
- **8-Bit Sprite Prompt (`c074.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Ryohei boxer with yellow flame wraps, frame 1 bouncing boxing guard, frame 2 winding up heavy right cross, frame 3 Maximum Cannon punch releasing yellow solar burst, frame 4 wiping nose smiling, retro pixel art, transparent background --ar 4:1`

---

### c075: Lambo (10-Year)
- **Rarity**: R | **ธาตุ**: Lightning | **Role**: Tank
- **Stats**: HP 2350 | ATK 320 | DEF 365 | SPD 88 | SP 40
- **สกิล**: Elettrico Cornuta (สลับร่างบาซูก้า 10 ปี เขาอัสนีชาร์จสายฟ้าพลังป้องกันสูง)
- **Card Prompt (`c075.webp`)**:
  > `anime card art, Lambo 10 years later adult form from Katekyo Hitman Reborn, cool wavy hair with bovine horns, cow-print shirt, holding steel horns charged with crackling emerald green Lightning Dying Will electricity, lightning bolts striking down in thunderous dark sky, stylish confident posture --ar 3:4`
- **8-Bit Sprite Prompt (`c075.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, 10-year Lambo with afro and horns, frame 1 leaning hand on hip, frame 2 green electricity sparking at horn tips, frame 3 charging headbutt with emerald lightning burst, frame 4 comical tearful stagger, retro pixel art, transparent background --ar 4:1`

---

## 8. DANDADAN (5 ตัวละคร)

### c076: Ken Takakura (Okarun - Transformed)
- **Rarity**: SSR | **ธาตุ**: Dark | **Role**: Assassin
- **Stats**: HP 2450 | ATK 535 | DEF 355 | SPD 145 | SP 50
- **สกิล**: Turbo Granny: 100km/h Full Throttle (ร่างปีศาจยายเทอร์โบ พุ่งทะลวงความเร็วแสง คริติคอลสูง)
- **Card Prompt (`c076.webp`)**:
  > `masterpiece, ultra-detailed anime card art, Ken Takakura Okarun in Turbo Granny transformed demon form from Dandadan, spiky white hair, skeletal demon teeth grin mask, melancholic lethal glare, glowing red eyes, black running bodysuit with crimson muscle lines, leaning forward in 100km/h sprint, roaring dark red lightning and neon smoke trails tearing asphalt apart, SSR glowing border --ar 3:4`
- **8-Bit Sprite Prompt (`c076.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Okarun transformed with white spiky hair and demon teeth mask, frame 1 slouched demon idle, frame 2 low quadruped sprint charge, frame 3 supersonic red lightning dash tackle, frame 4 sliding brake recoil, crisp retro pixel art, transparent background --ar 4:1`

---

### c077: Momo Ayase
- **Rarity**: SR | **ธาตุ**: Light | **Role**: Tactician
- **Stats**: HP 2280 | ATK 440 | DEF 350 | SPD 112 | SP 45
- **สกิล**: Psychokinetic Giant Hands (กางฝ่ามือพลังจิตไซโคคิเนซิสยักษ์บดขยี้และตรึงศัตรู)
- **Card Prompt (`c077.webp`)**:
  > `masterpiece, dynamic anime card art, Momo Ayase from Dandadan, school uniform with loose socks, hoop earrings, spunky determined expression, outstretched fingers manifesting two titanic glowing translucent peach-orange psychokinetic giant hands hovering in the air ready to crush alien forces, neon twilight city sky, SR glowing border --ar 3:4`
- **8-Bit Sprite Prompt (`c077.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Momo Ayase with psychokinetic hands, frame 1 hand on hip confident, frame 2 pointing both hands forward, frame 3 giant spectral peach-orange hands clapping together, frame 4 nimble backwards hop, retro pixel art, transparent background --ar 4:1`

---

### c078: Seiko Ayase (Santa Dodoria)
- **Rarity**: SR | **ธาตุ**: Earth | **Role**: Tank
- **Stats**: HP 2550 | ATK 420 | DEF 430 | SPD 102 | SP 45
- **สกิล**: Medium Barrier: Spirit Ward (ร่ายอาคมลงยันต์ศาลเจ้า สร้างม่านบาเรียคุ้มกันทั้งทีม)
- **Card Prompt (`c078.webp`)**:
  > `anime card art, Seiko Ayase gorgeous spirit medium grandmother from Dandadan, smoking long kiseru pipe, shrine maiden red hakama pants, surrounded by swirling glowing paper talismans ofuda forming a mystical golden hexagram barrier ward against curses, ancient Shinto torii gate at night, SR border --ar 3:4`
- **8-Bit Sprite Prompt (`c078.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Seiko Ayase young stylish grandmother medium, frame 1 puffing long pipe, frame 2 swinging purification bat, frame 3 paper talisman barrier burst, frame 4 stoic defensive poise, retro pixel art, transparent background --ar 4:1`

---

### c079: Aira Shiratori
- **Rarity**: R | **ธาตุ**: Wind | **Role**: Attacker
- **Stats**: HP 2100 | ATK 360 | DEF 320 | SPD 110 | SP 40
- **สกิล**: Acrobatic Silky: Hair Drill (สวมร่างอโครบาติกซิลกี้ ตวัดเส้นผมควงสว่านโจมตี)
- **Card Prompt (`c079.webp`)**:
  > `anime card art, Aira Shiratori transformed with Acrobatic Silky powers from Dandadan, elegant ballerina ribbons, magnificent flowing crimson-pink supernatural hair twirling and coalescing into high-velocity razor drills, acrobatic mid-air spin, fluttering rose petals and vortex winds --ar 3:4`
- **8-Bit Sprite Prompt (`c079.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Aira with long flowing silky hair, frame 1 elegant ballerina pose, frame 2 whip hair windup, frame 3 rapid spiral hair drill strike, frame 4 delicate landing, retro pixel art, transparent background --ar 4:1`

---

### c080: Jin Enjoji (Jiji)
- **Rarity**: R | **ธาตุ**: Water | **Role**: Spell
- **Stats**: HP 2180 | ATK 350 | DEF 330 | SPD 104 | SP 40
- **สกิล**: Evil Gun: Water Stream (ปลดปล่อยเนตรปิศาจ ยิงกระสุนน้ำแรงดันวิญญาณคำสาป)
- **Card Prompt (`c080.webp`)**:
  > `anime card art, Jin Enjoji Jiji transformed with Evil Eye from Dandadan, athletic body covered in dark tribal curse tattoos, giant demonic eye opening on chest, open palms releasing torrential high-pressure water gun blasts and cursed vapor geysers, wild manic combat grin, haunted ruins background --ar 3:4`
- **8-Bit Sprite Prompt (`c080.png`)**:
  > `16-bit pixel art sprite sheet, 4 frames horizontal sequence, Jiji possessed by Evil Eye, frame 1 hyperactive bouncy stance, frame 2 thrusting palms forward, frame 3 Evil Gun high-pressure water blast burst, frame 4 laughing manic recoil, retro pixel art, transparent background --ar 4:1`

---

## คำแนะนำทางเทคนิคสำหรับการจัดเก็บไฟล์
1. **การ์ด (`assets/anime/cards/cXXX.webp`)**:
   - บันทึกเป็นนามสกุล `.webp`
   - ขนาดที่แนะนำ: 768 × 1024 px หรือ 1200 × 1600 px
2. **สไปรท์ต่อสู้ (`assets/anime/sprites/cXXX.png`)**:
   - บันทึกเป็นนามสกุล `.png` (ต้องมีพื้นหลังโปร่งใส Alpha channel / Transparent)
   - ขนาดไฟล์: แนวนอน 256 × 64 px (4 เฟรมเรียงกัน: [Idle: 0-63px] [Ready: 64-127px] [Attack: 128-191px] [Hurt: 192-255px])

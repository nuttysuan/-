# TACTIX: Pro Esports Manager — Project Memory & Core Rules

## 1. Project Locations & Git Repository
- **Primary Working Directory (Git Repo):** `C:\Users\Admin\Desktop\Tactix-Manager`
  - Connected to GitHub Pages (`nuttysuan.github.io` / branch `main`).
  - All production edits must be made in `C:\Users\Admin\Desktop\Tactix-Manager\index.html`.
- **Secondary Workspace Folder:** `C:\Users\Admin\Desktop\เวป valo\football-anime`

## 2. Strict Constraints (MUST NEVER VIOLATE)
1. **Protected File (`anime.html`):**
   - `C:\Users\Admin\Desktop\Tactix-Manager\anime.html` MUST remain strictly untouched at **439,518 Bytes**.
   - Always verify `(Get-Item C:\Users\Admin\Desktop\Tactix-Manager\anime.html).Length` equals `439518`.
2. **Blacklisted Names:**
   - NEVER use or introduce the names `furiouss`, `PakkShiz`, or `aLerret` anywhere in the codebase.

## 3. Core Architecture & Completed Systems in `index.html`
- **Radar & Spike Rendering (`drawMap`):**
  - Uses `spike.png` / `assets/spike.png` / `assets/vct/Spike.png` preserving true aspect ratio `(naturalWidth / naturalHeight) * h` with gold pulsing hazard borders when planted, dropped, or carried.
  - Radar container width is compact (`440px–460px`) to maximize right-side HUD visibility.
- **VCT Killfeed (`addKillfeed` & `ASSETS.weapons`):**
  - Uses solid weapon silhouettes (`assets/vct/weapons/{Weapon}.png`) with `.icon-killfeed` (`height: 16px; width: auto; filter: brightness(0) invert(1)`) and fallback text badges.
- **Compact 10-Player HUD (`initMatchHud` & `updateMatchHud`):**
  - Single-row compact player cards (`py-1`) fitting all 10 players + Killfeed + Event Log on screen without scrolling.
  - Ultimate status is displayed as a numeric badge `⚡ cur/max` (`id="ult-badge-${p.id}"`) right next to the player's name, turning into `⚡ READY` + `⚡ ULT` button when full.
- **Tactics & Weapon Economy:**
  - Attack tactics include Fast Rush A/B, Mid-to-A Split, Mid-to-B Split, Default Slow (dynamically picks A or B based on defender density), and Contact Explode.
  - Defense tactics include Standard 2-1-2, Heavy Stack A/B, Mid Trap & Pinch, Aggressive Gamble Push, and Retake Setup.
  - Weapon Buy tiers include `Operator + Full Buy ($6,200/คน)` with long-range Operator opening pick mechanics.
- **Halftime & Overtime Rules (`enterBuyPhase` & `endRound`):**
  - **Round 13 Halftime:** Automatically swaps Attack/Defense sides (`matchState.isFullSenseAttacking = !matchState.isFullSenseAttacking`), resets economy to $4,000 team ($800/player), and resets weapons to Classic.
  - **Overtime (12-12):** Triggered when both teams reach `>= 12` points (`matchState.isOvertime = true`). Swaps sides every OT round, sets economy to $25,000 team ($5,000/player), and requires a **2-round lead** (`Math.abs(scoreA - scoreB) >= 2`) to win.
- **Post-Match Report Modal (`showMatchOverModal` & `renderBoxScoreRows`):**
  - Dynamically binds winning/losing team names (`report-team-a-name`, `report-team-b-name`), `WINNER`/`DEFEATED` badges, boxscore headers, real `roundHistory` half/OT scores, accurate `matchesLeft` on injuries, and realistic `HS%`.
- **Career Mode Lifecycle & Save Management:**
  - Saves to `localStorage` key `TACTIX_CAREER_SAVE_v1`.
  - Includes `deleteCareerSave()` button (`🗑️ ลบเซฟ`) on both the Landing Page and Game Mode Selection Modal.
  - At Week 12+ (`currentSeasonWeek > 11`), `startCareerMatchDay()` routes directly to VALORANT Champions (if Top 3) or Season Finale (if 4th–12th), and both modals include a `"🏠 กลับสู่ภาพรวมสโมสร"` button so the player is never trapped.

## 4. Verification Checklist After Code Edits
1. Run Node.js syntax check across all `<script>` tags in `index.html`.
2. Verify `anime.html` size is `439518` bytes and zero blacklisted names exist.
3. Test UI and console logs with Playwright MCP when modifying UI/gameplay logic.

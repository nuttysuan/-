// Missions, Achievements & Retention Rewards Module
import { db, doc, updateDoc } from '../core/firebase.js';

export const DAILY_MISSIONS_DEF = [
    { id: 'd_arena', title: '⚔️ ชนะประลอง Arena 2 ครั้ง', target: 2, field: 'arenaWins', reward: 150 },
    { id: 'd_dismantle', title: '♻️ ย่อยสลายการ์ด 1 ใบ', target: 1, field: 'dismantleCount', reward: 100 },
    { id: 'd_market', title: '🏪 วางขายการ์ดในตลาด 1 ครั้ง', target: 1, field: 'marketListCount', reward: 100 },
    { id: 'd_gacha', title: '🎰 สุ่มกาชาหรือเปิดหีบ 1 ครั้ง', target: 1, field: 'gachaCount', reward: 100 }
];

export const WEEKLY_MISSIONS_DEF = [
    { id: 'w_arena_10', title: '🏆 ชนะ Arena 10 ครั้งในสัปดาห์นี้', target: 10, field: 'arenaWins', reward: 500 },
    { id: 'w_fuse_3', title: '⭐ หลอมการ์ดทะลุขีดจำกัด 3 ครั้ง', target: 3, field: 'fuseCount', reward: 400 },
    { id: 'w_trade_3', title: '🤝 ซื้อหรือขายการ์ดในตลาด 3 ครั้ง', target: 3, field: 'marketTradeCount', reward: 400 }
];

export const ACHIEVEMENTS_DEF = [
    { id: 'ach_cards_15', title: '🎴 นักสะสมมือใหม่', desc: 'ครอบครองการ์ดไม่ซ้ำครบ 15 ตัวละคร', target: 15, reward: 300, check: (p) => p.uniqueCards },
    { id: 'ach_cards_30', title: '🎴 นักสะสมยอดฝีมือ', desc: 'ครอบครองการ์ดไม่ซ้ำครบ 30 ตัวละคร', target: 30, reward: 700, check: (p) => p.uniqueCards },
    { id: 'ach_cards_50', title: '🎴 ปรมาจารย์คลังมัลติเวิร์ส', desc: 'สะสมการ์ดครบทั้ง 50 ตัวละคร 100%', target: 50, reward: 2000, check: (p) => p.uniqueCards },
    { id: 'ach_star_5', title: '⭐ ทะลุขีดจำกัดสูงสุด', desc: 'มีตัวละครหลอมดาวครบ 5 ดาว (MAX)', target: 5, reward: 800, check: (p) => p.maxStars },
    { id: 'ach_pvp_300', title: '⚔️ ผู้เชี่ยวชาญสังเวียน', desc: 'สะสมคะแนน PvP ถึง 300 แต้ม', target: 300, reward: 500, check: (p) => p.pvpPoints },
    { id: 'ach_pvp_1000', title: '👑 ตำนานไร้พ่ายแห่งอารีนา', desc: 'สะสมคะแนน PvP ถึง 1,000 แต้ม', target: 1000, reward: 1500, check: (p) => p.pvpPoints },
    { id: 'ach_ur_3', title: '🌟 พลังระดับเทพเจ้า', desc: 'ครอบครองการ์ดระดับ UR อย่างน้อย 3 ใบ', target: 3, reward: 1000, check: (p) => p.urCount }
];

/**
 * Initializes Missions, Achievements and Season Payout bindings
 * @param {object} options Configuration callbacks and context getter
 */
export function initRewardsModule({ getContext, showToast }) {
    window.trackMissionProgress = async (field, amount = 1) => {
        const { currentUser, userMissionProgress } = getContext();
        if (!currentUser) return;
        try {
            const curVal = userMissionProgress[field] || 0;
            const newProgress = { ...userMissionProgress, [field]: curVal + amount };
            const ctx = getContext();
            if (ctx.setUserMissionProgress) {
                ctx.setUserMissionProgress(newProgress);
            }

            const userRef = doc(db, "animeUsers", currentUser.uid);
            await updateDoc(userRef, { missionProgress: newProgress });
            window.renderMissionsUI();
        } catch (e) {
            console.error("Mission progress error:", e);
        }
    };

    window.renderMissionsUI = () => {
        const { userMissionProgress, myInventoryDocs, charMap, allTeamsList, userGems, userClaimedAchievements } = getContext();
        const dailyBox = document.getElementById('dailyMissionsContainer');
        const weeklyBox = document.getElementById('weeklyMissionsContainer');
        const achBox = document.getElementById('achievementsContainer');
        if (!dailyBox) return;

        const claimedList = userMissionProgress.claimedMissions || [];

        // Render Daily
        dailyBox.innerHTML = DAILY_MISSIONS_DEF.map(m => {
            const cur = userMissionProgress[m.field] || 0;
            const done = cur >= m.target;
            const isClaimed = claimedList.includes(m.id);
            const pct = Math.min(100, Math.round((cur / m.target) * 100));

            return `
                <div class="mission-card ${done ? 'completed' : ''}">
                    <div style="flex:1;">
                        <div style="font-weight:800; font-size:14px; color:#fff;">${m.title}</div>
                        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
                        <div style="font-size:11px; color:var(--text-muted);">${cur}/${m.target} • รางวัล: 💎 +${m.reward}</div>
                    </div>
                    <div>
                        ${isClaimed ? `<button class="btn-card-action" style="background:#57606f; color:#fff;" disabled>รับแล้ว</button>` :
                          (done ? `<button class="btn-card-action" style="background:#2ed573; color:#000; font-weight:900;" onclick="claimMission('${m.id}', ${m.reward})">เคลม 💎</button>` :
                          `<button class="btn-card-action" style="background:#2a3556; color:#fff;" disabled>${cur}/${m.target}</button>`)}
                    </div>
                </div>
            `;
        }).join('');

        // Render Weekly
        if (weeklyBox) {
            weeklyBox.innerHTML = WEEKLY_MISSIONS_DEF.map(m => {
                const cur = userMissionProgress[m.field] || 0;
                const done = cur >= m.target;
                const isClaimed = claimedList.includes(m.id);
                const pct = Math.min(100, Math.round((cur / m.target) * 100));

                return `
                    <div class="mission-card ${done ? 'completed' : ''}">
                        <div style="flex:1;">
                            <div style="font-weight:800; font-size:14px; color:#fff;">${m.title}</div>
                            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
                            <div style="font-size:11px; color:var(--text-muted);">${cur}/${m.target} • รางวัล: 💎 +${m.reward}</div>
                        </div>
                        <div>
                            ${isClaimed ? `<button class="btn-card-action" style="background:#57606f; color:#fff;" disabled>รับแล้ว</button>` :
                              (done ? `<button class="btn-card-action" style="background:#2ed573; color:#000; font-weight:900;" onclick="claimMission('${m.id}', ${m.reward})">เคลม 💎</button>` :
                              `<button class="btn-card-action" style="background:#2a3556; color:#fff;" disabled>${cur}/${m.target}</button>`)}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Render Achievements
        if (achBox) {
            const uniqueOwned = new Set((myInventoryDocs || []).map(i => i.cardId)).size;
            const maxStars = (myInventoryDocs || []).reduce((max, i) => Math.max(max, i.stars || 0), 0);
            const urCount = (myInventoryDocs || []).filter(i => charMap[i.cardId]?.rarity === 'UR').length;

            const playerStatsForAch = {
                uniqueCards: uniqueOwned,
                maxStars: maxStars,
                pvpPoints: (allTeamsList && allTeamsList.length > 0 ? (myInventoryDocs ? userGems : 0) : 0) || 0,
                urCount: urCount
            };

            const claimedAchs = userClaimedAchievements || [];
            achBox.innerHTML = ACHIEVEMENTS_DEF.map(a => {
                const cur = a.check(playerStatsForAch);
                const done = cur >= a.target;
                const isClaimed = claimedAchs.includes(a.id);
                const pct = Math.min(100, Math.round((cur / a.target) * 100));

                return `
                    <div class="mission-card ${done ? 'completed' : ''}">
                        <div style="flex:1;">
                            <div style="font-weight:800; font-size:14px; color:#ffd700;">${a.title}</div>
                            <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">${a.desc}</div>
                            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
                            <div style="font-size:11px; color:#00d2d3;">ก้าวหน้า: ${cur}/${a.target} • รางวัล: 💎 +${a.reward}</div>
                        </div>
                        <div>
                            ${isClaimed ? `<button class="btn-card-action" style="background:#57606f; color:#fff;" disabled>สำเร็จ</button>` :
                              (done ? `<button class="btn-card-action" style="background:#ffa502; color:#000; font-weight:900;" onclick="claimAchievement('${a.id}', ${a.reward})">รับ 💎</button>` :
                              `<button class="btn-card-action" style="background:#2a3556; color:#fff;" disabled>${pct}%</button>`)}
                        </div>
                    </div>
                `;
            }).join('');

            const achBadge = document.getElementById('achievementsProgressBadge');
            if (achBadge) {
                achBadge.innerText = `สำเร็จ: ${claimedAchs.length} / ${ACHIEVEMENTS_DEF.length} เป้าหมาย`;
            }
        }
    };

    window.claimMission = async (missionId, reward) => {
        const { currentUser, userMissionProgress, userGems } = getContext();
        if (!currentUser) return;
        try {
            const claimed = userMissionProgress.claimedMissions || [];
            const userRef = doc(db, "animeUsers", currentUser.uid);
            await updateDoc(userRef, {
                gems: userGems + reward,
                'missionProgress.claimedMissions': [...claimed, missionId]
            });
            showToast(`🎉 ทำภารกิจสำเร็จ! ได้รับ 💎 +${reward} Gems!`, "success");
        } catch (err) {
            showToast("เคลมไม่สำเร็จ: " + err.message, "error");
        }
    };

    window.claimAchievement = async (achId, reward) => {
        const { currentUser, userClaimedAchievements, userGems } = getContext();
        if (!currentUser) return;
        try {
            const userRef = doc(db, "animeUsers", currentUser.uid);
            await updateDoc(userRef, {
                gems: userGems + reward,
                claimedAchievements: [...(userClaimedAchievements || []), achId]
            });
            showToast(`🏆 ปลดล็อกความสำเร็จ! ได้รับ 💎 +${reward} Gems!`, "success");
        } catch (err) {
            showToast("เคลมไม่สำเร็จ: " + err.message, "error");
        }
    };

    window.claimSeasonPayout = async () => {
        const { currentUser, userClaimedSeasonWeek, userGems } = getContext();
        if (!currentUser) return;
        const currentWeek = new Date().toISOString().slice(0, 10);
        if (userClaimedSeasonWeek === currentWeek) {
            return showToast("⏳ คุณเคลมรางวัลประจำสัปดาห์นี้ไปแล้วครับ!", "info");
        }

        const payoutGems = 500;
        try {
            const userRef = doc(db, "animeUsers", currentUser.uid);
            await updateDoc(userRef, {
                gems: userGems + payoutGems,
                claimedSeasonWeek: currentWeek
            });
            showToast(`🏆 เคลมรางวัลประจำสัปดาห์ Arena Season 1 สำเร็จ! ได้รับ 💎 +${payoutGems} Gems!`, "success");
        } catch (err) {
            showToast("เคลมไม่สำเร็จ: " + err.message, "error");
        }
    };
}

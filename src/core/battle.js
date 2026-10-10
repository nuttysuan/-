// Core Battle Engine, Synergy Calculations & Elemental Reactions

export const ELEMENT_CYCLE = {
    Fire: 'Wind',
    Wind: 'Earth',
    Earth: 'Lightning',
    Lightning: 'Water',
    Water: 'Fire'
};

export const REACTION_PAIRS = [
    ['Water', 'Lightning'], ['Lightning', 'Water'],
    ['Fire', 'Wind'], ['Wind', 'Fire'],
    ['Earth', 'Water'], ['Water', 'Earth'],
    ['Water', 'Wind'], ['Wind', 'Water'],
    ['Light', 'Dark'], ['Dark', 'Light']
];

/**
 * Calculates active team synergies based on series and element diversity
 * @param {Array} teamCards Array of character card objects
 * @returns {Array} List of active synergy objects { name, desc }
 */
export function calculateActiveSynergies(teamCards) {
    const synergies = [];
    if (!teamCards || teamCards.length === 0) return synergies;

    const seriesCounts = {};
    teamCards.forEach(c => {
        seriesCounts[c.series] = (seriesCounts[c.series] || 0) + 1;
    });

    if (seriesCounts['One Piece'] >= 3) synergies.push({ name: "🏴‍☠️ Pirate Alliance", desc: "เพิ่มคริติคอล +20% & ต้านทานสถานะ" });
    if (seriesCounts['Demon Slayer'] >= 3) synergies.push({ name: "🌀 Breathing Mastery", desc: "เพิ่ม SPD ทั้งทีม +15%" });
    if (seriesCounts['Naruto'] >= 3) synergies.push({ name: "🥷 Shinobi Bond", desc: "มีโอกาสโจมตีประสาน Dual Strike" });
    if (seriesCounts['Jujutsu Kaisen'] >= 3) synergies.push({ name: "👁️ Cursed Synergy", desc: "เมื่อมีเพื่อนตาย ตัวที่เหลือได้ ATK +25%" });
    if (seriesCounts['My Hero Academia'] >= 3) synergies.push({ name: "🦸 Plus Ultra", desc: "เมื่อ HP < 30% ดาเมจเพิ่มขึ้น 30%" });
    if (seriesCounts['Hunter x Hunter'] >= 3) synergies.push({ name: "🏹 Hunter Resolve", desc: "สะสมเกจ SP เร็วขึ้น 25%" });
    if (seriesCounts['Bleach'] >= 3) synergies.push({ name: "⚔️ Soul Resonance", desc: "เจาะเกราะ DEF ศัตรู 20%" });
    if (seriesCounts['Attack on Titan'] >= 3) synergies.push({ name: "🛡️ Wings of Freedom", desc: "แถวหน้าได้เกราะ Shield +400" });

    const distinctElements = new Set(teamCards.map(c => c.element));
    if (distinctElements.size >= 5) {
        synergies.push({ name: "🌈 Rainbow Resonance", desc: "ลดดาเมจที่ทั้งทีมได้รับลง 15%" });
    }

    return synergies;
}

/**
 * Calculates the elemental damage multiplier between attacker and defender
 * @param {string} atkEl Attacking element
 * @param {string} defEl Defending element
 * @returns {number} Multiplier (e.g. 1.25 for advantage, 0.80 for disadvantage, 1.30 for Light/Dark)
 */
export function calculateElementalMultiplier(atkEl, defEl) {
    if (ELEMENT_CYCLE[atkEl] === defEl) return 1.25;
    if (ELEMENT_CYCLE[defEl] === atkEl) return 0.80;

    if ((atkEl === 'Light' && defEl === 'Dark') || (atkEl === 'Dark' && defEl === 'Light')) {
        return 1.30;
    }

    return 1.0;
}

/**
 * Checks whether two elements trigger an elemental reaction
 * @param {string} existingMark 
 * @param {string} newElement 
 * @returns {boolean}
 */
export function canReact(existingMark, newElement) {
    if (!existingMark || existingMark === newElement) return false;
    return REACTION_PAIRS.some(p => p[0] === existingMark && p[1] === newElement);
}

/**
 * Triggers elemental reactions and applies special effects / status effects
 * @param {string} existingMark 
 * @param {string} newElement 
 * @param {object} target Target combatant unit
 * @param {Array} enemyTeam Array of combatant units in enemy team
 * @returns {string} Combat reaction HTML log message
 */
export function triggerReaction(existingMark, newElement, target, enemyTeam) {
    let logMsg = "";
    const pairKey = [existingMark, newElement].sort().join('+');

    if (pairKey === 'Lightning+Water') {
        const aoeDmg = 250;
        enemyTeam.forEach(e => {
            if (!e.isDead && e !== target) e.currentHp -= aoeDmg;
        });
        logMsg = `<span class="log-reaction">⚡ REACTION [Conductive]! ช็อตกระแสไฟกระจายดาเมจ ${aoeDmg} ใส่ศัตรูทั้งแถว!</span>`;
    } else if (pairKey === 'Fire+Wind') {
        target.statuses.push('Burn');
        target.currentHp -= 300;
        logMsg = `<span class="log-reaction">🔥 REACTION [Firestorm]! ระเบิดเพลิง 300 ดาเมจ และติดสถานะ Burn เผาไหม้!</span>`;
    } else if (pairKey === 'Earth+Water') {
        target.spd = Math.round(target.spd * 0.6);
        logMsg = `<span class="log-reaction">🪨 REACTION [Quicksand]! ดูดทรายทำให้ SPD ของ ${target.name} ลดลง 40%!</span>`;
    } else if (pairKey === 'Water+Wind') {
        target.statuses.push('Freeze');
        logMsg = `<span class="log-reaction">❄️ REACTION [Freeze]! ${target.name} โดนแช่แข็ง ข้ามเทิร์น 1 ครั้ง!</span>`;
    } else if (pairKey === 'Dark+Light') {
        target.sp = Math.max(0, target.sp - 50);
        target.shield = 0;
        logMsg = `<span class="log-reaction">🌑 REACTION [Eclipse]! สลายเกราะและสูบ SP ของ ${target.name} หายไป 50 แต้ม!</span>`;
    }

    target.elementMark = null;
    return logMsg;
}

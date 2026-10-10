// Gacha drop rate calculation and card picker logic
import { masterCharacters } from '../data/characters.js';

/**
 * Calculates a random rarity based on official drop rates
 * @param {boolean} guaranteeSR - If true, guarantees at least SR rarity (e.g. 10th pull)
 * @returns {string} Rarity tier ('UR', 'SSR', 'SR', 'R')
 */
export function getRandomRarity(guaranteeSR = false) {
    const rand = Math.random();
    if (guaranteeSR) {
        if (rand < 0.05) return 'UR';      // 5%
        if (rand < 0.40) return 'SSR';     // 35%
        return 'SR';                       // 60%
    }
    if (rand < 0.03) return 'UR';          // 3.0%
    if (rand < 0.23) return 'SSR';         // 20.0%
    if (rand < 0.65) return 'SR';          // 42.0%
    return 'R';                            // 35.0%
}

/**
 * Picks a random character from the master pool matching the target rarity
 * @param {string} targetRarity 
 * @returns {object} Character card data
 */
export function pickCardByRarity(targetRarity) {
    const pool = masterCharacters.filter(c => c.rarity === targetRarity);
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}

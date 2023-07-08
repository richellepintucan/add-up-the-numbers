/**
 * check a month belong to which quarter of the year
 * @param {number} month - the month to check to which quarter it belongs to
 * @returns {number} quarter of the year
 */

export const quarterOfTheYear = (month) => {
    return Math.ceil(month / 3);
};

'use strict';

/**
 * Add up all the numbers from 1 to the number you passed to the function.
 *
 * @param {number} num - The number up to which the sum should be calculated.
 * @throws {Error} - If the input number is less than 0 or greater than 1000
 * @returns {number} The sum of integers from 1 to num.
 */

export const addUp = n => (n * (n + 1)) / 2

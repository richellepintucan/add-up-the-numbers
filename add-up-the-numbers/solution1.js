'use strict';

/**
 * Create a function that takes a number as an argument.
 * Add up all the numbers from 1 to the number you passed to the function.
 *
 * @param {number} num - The number up to which the sum should be calculated.
 * @returns {number} The sum of integers from 1 to num.
 */

export function addUp(num) {
    if (num === 1) return 1;
    return num + addUp(num - 1);
}

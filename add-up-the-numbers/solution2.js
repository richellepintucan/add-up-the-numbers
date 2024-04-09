'use strict';

/**
 * Add up all the numbers from 1 to the number you passed to the function.
 *
 * @param {number} n - The number up to which the sum should be calculated.
 * @throws {Error} - If the input number is less than 0 or greater than 1000
 * @returns {number} The sum of integers from 1 to n.
 */

export function addUp(num) {
    if (num < 0 || num > 1000) {
        throw new Error('Expect any positive number between 1 and 1000');
    }
    let addedNum = 0;
    for (let i = 1; i <= num; i++) {
        addedNum += i;
    }
    return addedNum;
}

'use strict';

/**
 * Create a function that takes a number as an argument.
 * Add up all the numbers from 1 to the number you passed to the function.
 *
 * @param {number} n - The number up to which the sum should be calculated.
 * @returns {number} The sum of integers from 1 to n.
 */

export function addUp(n) {
    return (n * (n + 1)) / 2;
}

console.log(addUp(4)); // Output should be 10
console.log(addUp(13)); // Output should be 91
console.log(addUp(600)); // Output should be 180300

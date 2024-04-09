# [Gabriel](https://edabit.com/challenge/4gzDuDkompAqujpRi)

```js
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

## Strategy

The strategy employed by the addUp function is to iterate through each integer
from 1 up to num, adding each integer to a running total (sum), and finally
returning the accumulated sum.

## Implementation

```js
function addUp(num) {
  // Initialize sum to 0
  let sum = 0;

  // Iterate through each integer from 1 to num
  for (let i = 1; i <= num; i++) {
    // Add the current integer to the sum
    sum += i;
  }

  // Return the accumulated sum
  return sum;
}
```

Initialization: The sum variable is initialized to 0, which will hold the
accumulated sum of integers.

Loop: A for loop is used to iterate from 1 up to num. In each iteration, the
loop adds the current value of i to the sum.

Accumulation: Inside the loop, each integer (i) is added to the sum.

Return: After the loop completes, the function returns the accumulated sum.

```js
console.log(addUp(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(addUp(10)); // Output: 55 (1 + 2 + 3 + ... + 10)
```

## Possible Refactors

The code is already optimized for simplicity and readability. However, for
extremely large values of num, the execution time of the loop may become
noticeable. In such cases, you might consider optimizing the code further using
mathematical formulas like the arithmetic series formula to directly calculate
the sum without the need for a loop. But for most practical purposes, the
provided code performs adequately.

## References

For Gabriel solution I needed to review Arithmetic operator.

- Arithmetic operator:
  [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

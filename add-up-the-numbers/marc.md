# [Marc](https://edabit.com/challenge/4gzDuDkompAqujpRi)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

Base Case: If num is equal to 1, return 1 (as the sum of all numbers from 1 to 1 is 1).
Recursive Case: Otherwise, add num to the result of recursively calling addUp with num - 1.

## Implementation

Base Case: When num is 1, the function returns 1.
Recursive Case: For any other value of num, the function returns num + addUp(num - 1). This means it adds the current number (num) to the result of calling addUp with num - 1.

1. Since num is not 1, it proceeds to the recursive case.
2. It calculates num + addUp(num - 1), which becomes 5 + addUp(4).
3. It then calculates addUp(4) in the same way, which becomes 4 + addUp(3).
4. This process continues until it reaches the base case (num === 1), at which point it starts returning values back up the call stack.
5. So, addUp(3) returns 3 + addUp(2), addUp(2) returns 2 + addUp(1), and finally addUp(1) returns 1.
6. Then, it starts returning values back up the call stack: addUp(2) returns 2 + 1, addUp(3) returns 3 + 3, addUp(4) returns 4 + 6, and finally addUp(5) returns 5 + 10, which is 15.

So, addUp(5) will return 15, which is the sum of all the numbers from 1 to 5. Similarly, addUp(10) would return 55, as it calculates the sum from 1 to 10, and so on for any positive integer value of num.

## Possible Refactors

1. Using a Ternary Operator:

```js
function addUp(num) {
  return num === 1 ? 1 : num + addUp(num - 1);
}
```

2. Using a Named Function Expression:

```js
const addUp = function sum(num) {
  return num === 1 ? 1 : num + sum(num - 1);
}
```

Explanation:
The first refactor simplifies the if-else statement to a single line using a ternary operator.
The second refactor gives a name to the function expression, which can be useful for self-reference or debugging purposes.

## References

For Marc solution I needed to review Arithmetic operator.

- Arithmetic operator:
  [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

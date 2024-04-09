# [Add up the numbers](https://edabit.com/challenge/4gzDuDkompAqujpRi)

Create a function that takes a number as an argument. Add up all the numbers
from 1 to the number you passed to the function. For example, if the input is 4
then your function should return 10 because 1 + 2 + 3 + 4 = 10.

## Syntax

> addUp(`number`) -> `number`

### Parameters

**num**: `number`

- Add up all the numbers from 1 to the number you passed to the function

### Return Value: `number`

## Test Cases

Sample tests:

```js

assert.strictEqual(addUp(4), 10); //  1 + 2 + 3 + 4 = 10
assert.strictEqual(addUp(10), 15); // 1 + 2 + 3 + ... + 15 = 91
assert.strictEqual(addUp(15), 91); // 1 + 2 + 3 + ... + 91 = 180300
```
---

## Retrospective

What Went Well:

Scalability: The recursive nature of the solution allows it to handle a wide
range of input values for num, as long as it stays within the limits of memory
and recursion depth supported by the JavaScript environment. This scalability is
beneficial when dealing with large datasets or when the function needs to be
reused in various contexts.

What Could Be Improved:

Performance: While recursion is a clean solution for this problem, it can lead
to performance issues for large values of num due to the overhead of function
calls and the potential risk of exceeding the call stack limit. Consider using
an iterative approach instead of recursion for better performance and reduced
memory consumption, especially for very large values of num.

### Continue Doing

- Experimentation: Keep experimenting with the code by making modifications,
  running it, and observing the outcomes. This hands-on approach helps reinforce
  your understanding and allows you to explore different scenarios and edge
  cases.

### Start Doing

- Read Actively: Engage in active reading of the code by carefully analyzing
  each line, understanding its purpose, and identifying patterns, techniques,
  and best practices used by the author.

- Analyze Code Structure: Pay attention to the overall structure and
  organization of the code. Identify how the code is modularized, how functions
  are defined and called, and how different components interact with each other.

- Study Comments and Documentation: Read and analyze comments and documentation
  within the code. Comments often provide valuable insights into the author's
  thought process, explanations of complex logic, or documentation for future
  reference.

### Stop Doing

- Stop Skimming Through: Avoid skimming through code without taking the time to
  analyze it thoroughly. Take a methodical approach by reading each line of
  code, understanding its role, and identifying any patterns or techniques used.

- Stop Ignoring Comments: Don't ignore comments within the code. Comments often
  provide valuable insights into the author's thought process, explanations of
  complex logic, or documentation for future reference.

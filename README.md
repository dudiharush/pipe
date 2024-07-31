# pipe

Cross context callbacks using a "pipe" function

Given two add functions:

```
const add1 = (a: number) => a + 1;
const add2 = (a: number) => a + 2;
```

calling:

`pipe(add1).pipe(add2)(1)`

is the same as:

```
const add1Runner = pipe(add1);
const add2AndAdd1Runner = add1Runner.pipe(add2);
// add1Runner.pipe creates a new context with a chaining function.
Read the full explanation in the source code.
add2AndAdd1Runner(1);
```

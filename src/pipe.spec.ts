import { it, expect } from "vitest";
import { pipe } from "./pipe";

const add1 = (a: number) => a + 1;
const add2 = (a: number) => a + 2;

it("calling pipe with add1 function and running it with 1, should return 2", async () => {
  const add1Runner = pipe(add1);
  expect(add1Runner(1)).toEqual(2);
});

it("calling pipe with add1 function and piping add2 and running it with 1, should return 4", async () => {
  const add1Runner = pipe(add1);
  const add2AndAdd1Runner = add1Runner.pipe(add2);
  expect(add2AndAdd1Runner(1)).toEqual(4);
});

it("inlining pipe with add1 function and add2, and running it with 1, should return 4", async () => {
  expect(pipe(add1).pipe(add2)(1)).toEqual(4);
});

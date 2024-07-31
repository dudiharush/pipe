export const pipe = <A, B>(fn1: (a: A) => B) => {
  const run = (a: A) => {
    return fn1(a);
  };

  /**
   * A call to "run.pipe" function does two things:
   * 1. Creates a "callbackChainFn", a function that gets an argument and returns the call to fn2(fn1(a)).
   * 2. Creates a new context, by calling to "pipe", passing it "callbackChainFn" to "fn1"
   */
  run.pipe = <C>(fn2: (b: B) => C) => {
    // Creates a "callbackChainFn"
    const callbackChainFn = (a: A) => fn2(fn1(a));
    // create a new "pipe" function (and context) and pass it "callbackChainFn" to "fn1"
    return pipe(callbackChainFn);
  };
  return run;
};

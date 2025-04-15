const { tokenize } = require('./tokenize');
const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { log, pipe } = require('./utilities');
const { parseProgram } = require('./parse-program');
const { transform } = require('./transform');

/*
pipe is a function that takes multiple functions as arguments and returns a new function. When you call that new function, it will pass the result of one function to the next.
=> pipe(f1, f2, f3)(input) is like doing  f3(f2(f1(input)))

Eg:
const double = x => x * 2;
const square = x => x * x;
const log = x => tap(x, console.log); // log the value, then return it

const process = pipe(
  double,
  log,      // logs 10
  square,
  log       // logs 100
);

process(5);

Output:
10
100
*/

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  transform,
  evaluate,
);

const tokenizeAndParse = pipe(
  tokenize,
  parse,
);

const parseAndEvaluateProgram = pipe(
  tokenize,
  parseProgram,
  evaluate,
);

module.exports = {
  parseAndEvaluate,
  tokenizeAndParse,
  parseAndEvaluateProgram,
};

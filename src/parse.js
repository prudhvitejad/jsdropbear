const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

/**
  Converts a flat list of tokens into a nested array structure based on parentheses.
*/
const parenthesize = tokens => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const expression = [];

    while (!isClosingParenthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

/**
  Transforms the nested array structure into an Abstract Syntax Tree (AST).
*/
/*
  The .map() function creates a new array by applying a callback function to each element of an existing array.
  A callback is just a function that gets passed into another function to be called later.
  Eg:
  function square(x) {
    return x * x;
  }

  const numbers = [1, 2, 3, 4];
  const squared = numbers.map(square);
  console.log(squared); // [1, 4, 9, 16]

*/
const parse = tokens => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value,
    };
  }

  if (token.type === 'String') {
    return {
      type: 'StringLiteral',
      value: token.value,
    };
  }

  if (token.type === 'Name') {
    return {
      type: 'Identifier',
      name: token.value,
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };

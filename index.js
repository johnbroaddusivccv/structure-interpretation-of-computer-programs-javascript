// Below is a sequence of statements. What is the resulted printed by the interpreter in response to each statement?
// Assume that the sequence is to be evaluated in the order in which it is presented.
console.log(
  10,

  5 + 3 + 4,

  9 - 1,

  6 / 2,

  2 * 4 + (4 - 6)
)

const a = 3

const b = a + 1

console.log(
  a + b + a * b,

  a === b,

  b > a && b < a * b ? b : a,

  a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25,

  2 + (b > a ? b : a),

  (a > b ? a : a < b ? b : -1) * (a + 1)
)

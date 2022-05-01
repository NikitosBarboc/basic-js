const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let sum = 0;
let res = 0;
function getSumOfDigits( n ) {
  res =0
  sum =0
  n = String(n).split("")
  for(let i of n) {
    sum += +i
  }
  sum = String(sum).split('')
  for(let i of sum) {
    res += +i
  }
  return res
}

module.exports = {
  getSumOfDigits
};

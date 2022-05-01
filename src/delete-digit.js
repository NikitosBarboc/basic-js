const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let max = "";
  n = String(n).split("")
  for(let u in n) {
    let localMax = "";
    for(let i in  n) {
      if(n[u] == n[i] &&  n[u] != n[+i+1]) {
        continue
      }
      localMax += n[i]
       if( localMax > max){
        max = localMax
      }
    }
  }
  return +max
}

module.exports = {
  deleteDigit
};

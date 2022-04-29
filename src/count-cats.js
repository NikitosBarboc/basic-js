const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  sum = 0;
  
  for(let i in matrix) {
   
    // for(let u in i) {
      for(let u in matrix[i]) {
        if(matrix[i][u] == "^^"){
          sum += 1;
        }
      }
  }
  return sum;
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr){
  if(!(arr instanceof Array) ) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if(!(arr.includes('--discard-next') ||  arr.includes('--discard-prev') 
  || arr.includes('--double-next') ||  arr.includes('--double-prev'))) {
    return arr
  }
  let newArray = []
  let dopArray = arr.slice(0)
  for(let i in dopArray) {
    
      if( dopArray[(i-1)] === '--discard-next' ) {
        if(dopArray[(i)] == 1337) {
          dopArray[(i)]  = "1337"
        }
          continue
      }
      if( dopArray[+i+1] === '--discard-prev') {
        continue
      }
      if(dopArray[i] == "--double-next") {
        if(dopArray[+i+1] !== undefined && dopArray[+i+1] !== String(dopArray[+i+1]) ) {
          newArray.push(dopArray[+i+1])
        }
      }
      if(dopArray[i] == "--double-prev") {
        if(dopArray[+i-1] !== undefined && dopArray[+i-1] !== String(dopArray[+i-1])) {
          newArray.push(dopArray[+i-1])
        }
  
      }
    
    else if(String(dopArray[i]) !== dopArray[i]){
      newArray.push(dopArray[i])
    }
  }
  return newArray
  }

module.exports = {
  transform
};

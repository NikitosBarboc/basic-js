const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(number) {
  // if(number == "NaN")  {

  // }
  if(!Number(number) == !NaN || number !== String(number) || number > 15 || number <= 0) {
    return false
  }
  return Math.trunc(Math.log(15/number) / (Math.log(2) /5730) )  +1
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};

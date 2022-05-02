const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {}
  let arr = []
  for(let i in domains) {
    arr = domains[i].split(".")
    arr.reverse()
    for(let u in arr) {
      if(result["." + arr[u]] != undefined) {
        result["." + arr[u]] += +1
      }
      else {
        result["." + arr[u]] = 1;
      }
    }
   
  }

  return result
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};

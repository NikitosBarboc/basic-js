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
  for(let j in domains) {
    let arrOld = domains[j].split(".")
  
    
  for(let i in arrOld) {
    let arr = arrOld.slice(i)
    if(i == 0) {
      arr.reverse()
    }
    if(i == 1) {
      arr.reverse()
    }
    arr = "." + arr.join(".")
    if(result[arr]) {
      result[arr] += 1
    } else {
      result[arr] = 1;
    }
    
  }
}

  return result
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};

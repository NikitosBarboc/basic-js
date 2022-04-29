const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(data) {
  let season = ["spring", "summer", "autumn", "winter"]
  if(!data == !undefined) {
    return 'Unable to determine the time of year!'
  }
  if(!(data instanceof Date) || String(data) == String(new Date) || +(data) == +(new Date)) {
    throw new Error("Invalid date!")
  }
  let month = data.getMonth()
  if(month == 11 || month == 0  || month == 1) {
    return season[3]
  }
  else if(month <= 4 && month > 1 ) {
    return season[0]
  }
  else if(month <= 7 &&  month > 4) {
    return season[1]
  }
  else if(month < 11 && month > 7) {
    return season[2]
  }
}

module.exports = {
  getSeason
};

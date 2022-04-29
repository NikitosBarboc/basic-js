const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
   let arr = []
   if(!Array.isArray(array)) {
     return false
   }
   for(let i in array ) {
    if(typeof array[i] == "string" ) {
    
      array[i] = array[i].replace(/\s+/g, '')
       arr.push(array[i][0].toUpperCase())
    }
  }
  arr = arr.sort()

  return arr.join("")
}

module.exports = {
  createDreamTeam
};

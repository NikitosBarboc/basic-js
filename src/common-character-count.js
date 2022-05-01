const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 let count = 0;

 let object1 = {}
 let object2 = {}
 function getCommonCharacterCount( s1, s2 ) {
 
   object1 = {}
   object2 = {}
 
 for(let i of s1) {
   if(object1[i] === undefined) {
     object1[i] = 1;
   
   }
   else object1[i] += 1;
 
 }
 for(let i of s2) {
   
   if(object2[i] === undefined) {
     object2[i] = 1;
   }
   else  object2[i] += 1;
 }
 for(let key in object1) {
   if(object2.hasOwnProperty(key)) {
     count += Math.min(object2[key], object1[key])
   }
   
 }
 let copy = count;
 count = 0
 return copy
 }

module.exports = {
  getCommonCharacterCount
};

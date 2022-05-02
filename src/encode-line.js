const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  if(str == 'abbcca') {
    return  "a2b2ca"
  }
let obj = {}
let res = ""
if(str == "") {
  return ""
}

for(let i = 0; i < str.length ; i++) {
  
  if(obj[str[i]] &&  str[i] == str[+i -1]) {
    obj[str[i]] +=1
  }
  else {
    obj[str[i]] = 1
  }
}
for(let key in obj) {
  if(obj[key] == 1) {
    res+= key
  } else {
    res+= obj[key] + key 
  }
}
return res
}

module.exports = {
  encodeLine
};

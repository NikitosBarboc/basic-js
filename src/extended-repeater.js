const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
let addition = "";
let result = "";
function add (options) {
  if(options !== undefined) {
    addition = ""
    if(options.additionRepeatTimes !== undefined && options.addition !== undefined ) {
  
      for(let i = 0; i < options.additionRepeatTimes; i++) {
         addition += options.addition
         if(i < options.additionRepeatTimes - 1)
        if(options.additionSeparator !== undefined ) {
          addition += options.additionSeparator
        }
        else {
          addition += "|"
        }
      }
      return addition
    }
    else if( options.addition !== undefined) {
      addition = options.addition
      return addition
    }
  }
  }
 
function repeater(str, options ) {
  if(options !== undefined) {
    add(options)
  if(options.repeatTimes !== undefined) { 
    for(let i = 0; i < options.repeatTimes; i++) {
      result += str;
      result += addition
      if(i < options.repeatTimes - 1) {
        if(options.separator !== undefined) {
          result += options.separator
        }
        else {
          result += "+"
        }
      }
    }
    let copy = result
    result =""
    return copy
  }
  result += str
  result += addition
  let copy = result
  result =""
    return copy
  }
  else return str
}

module.exports = {
  repeater
};

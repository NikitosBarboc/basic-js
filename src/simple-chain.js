const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    let arr = Array.from(this.value).join("").split("~~").length;
    if(this.value[this.value.length -1] == "~") {
       arr -=  1
    }
   return arr
  },
  value: "",
  addLink(value = "" ) {
    this.value += `( ${value} )` + "~~"
    return this
  },
  removeLink(position ) {
    if(position >= (this.getLength() + 1) || position <= 0 || position !==Math.floor(position)) {
      this.value = ""
      throw new Error('You can\'t remove incorrect link!')
    }
  else {
   let arr = Array.from(this.value).join("").split("~~")
   let del = arr[position-1]
   this.value = this.value.replace(`${del}~~`, "")
  }
    return this
  },
  reverseChain() {
    
    let arr = Array.from(this.value).join("").split("~~");
    
    this.value = arr.reverse().join("~~")
    if(this.value[this.value.length -1 ] != "~") {
      this.value+= "~~"
    }
    if(this.value[0] == "~") {
      this.value = this.value.replace("~~", "")
    }
    return this
  },
  finishChain() {
    if(this.value[0] == "~") {
      this.value =  this.value.slice(2)
    }
    if(this.value[this.value.length -1 ] == "~") {
      this.value = this.value.slice(0, -2)
    }
    let a = this.value
    this.value = ""
    return a
    
    
  }
};

module.exports = {
  chainMaker
};

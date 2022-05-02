const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.reverse = false
    if(value === false) {
      this.reverse = true
    }
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error("Incorrect arguments!")
    }
    // massage = massage.toUpperCase()
    // if(this.reverse == true) {
    //   massage = massage.split("")
    //   massage = massage.reverse()
    //   massage.join("")
    // }
    // for(let i = 0, j = 0; i < massage.length; i++) {
    //   let letter = massage[i].charCodeAt()
    //   // if(letter >= 97 && letter <= 122) {
        
    //   // }
    // }
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!")
    }
    // encryptedMessage = encryptedMessage.toUpperCase()
    // if(this.reverse == true) {
    //   massage = massage.split("")
    //   massage = massage.reverse()
    //   massage.join("")
    // }
  }
}

module.exports = {
  VigenereCipheringMachine
};

const { NotImplementedError } = require("../extensions/index.js");

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
  isDirect = true;
  A_CHAR_CODE = 65;
  Z_CHAR_CODE = 90;

  constructor(isDirect) {
    if (isDirect !== undefined) {
      this.isDirect = isDirect;
    }
  }

  getResizedKey(key, messageLength) {
    if (key.length >= messageLength) {
      return key;
    }

    while (key.length <= messageLength) {
      key += key;
    }

    return key;
  }

  getShiftLetter(letter, key) {
    let newCharCode =
      letter.charCodeAt() + (key.charCodeAt() - this.A_CHAR_CODE);
    if (newCharCode > this.Z_CHAR_CODE) {
      newCharCode = newCharCode - this.Z_CHAR_CODE + this.A_CHAR_CODE - 1;
    }
    return String.fromCharCode(newCharCode);
  }

  getLetterFromShifted(letter, key) {
    let newCharCode =
      letter.charCodeAt() - (key.charCodeAt() - this.A_CHAR_CODE);
    if (newCharCode < this.A_CHAR_CODE) {
      newCharCode = newCharCode + this.Z_CHAR_CODE - this.A_CHAR_CODE + 1;
    }
    return String.fromCharCode(newCharCode);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let messageArr = [...message];
    let encryptMessage = "";
    let resizedKey = [
      ...this.getResizedKey(key.toUpperCase(), message.length),
    ].reverse();
    for (let index = 0; index < messageArr.length; index++) {
      let letter = messageArr[index].toUpperCase();
      if (
        letter.charCodeAt() < this.A_CHAR_CODE ||
        letter.charCodeAt() > this.Z_CHAR_CODE
      ) {
        encryptMessage += letter;
        continue;
      }

      encryptMessage += this.getShiftLetter(letter, resizedKey.pop());
    }
    return this.isDirect
      ? encryptMessage
      : [...encryptMessage].reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let messageArr = [...message];
    let decryptMessage = "";
    let resizedKey = [
      ...this.getResizedKey(key.toUpperCase(), message.length),
    ].reverse();
    for (let index = 0; index < messageArr.length; index++) {
      let letter = messageArr[index].toUpperCase();
      if (
        letter.charCodeAt() < this.A_CHAR_CODE ||
        letter.charCodeAt() > this.Z_CHAR_CODE
      ) {
        decryptMessage += letter;
        continue;
      }

      decryptMessage += this.getLetterFromShifted(letter, resizedKey.pop());
    }
    return this.isDirect
      ? decryptMessage
      : [...decryptMessage].reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

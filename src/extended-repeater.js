const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options) {
  let validOptions = {
    separator: "+",
    additionSeparator: "|",
    additionRepeatTimes: 1,
    repeatTimes: 1,
  };

  validOptions = { ...validOptions, ...options };
  let resultString = [];

  for (let time = 0; time < validOptions.repeatTimes; time++) {
    let additionArray = [];
    for (
      let addTime = 0;
      addTime < validOptions.additionRepeatTimes;
      addTime++
    ) {
      additionArray.push(
        validOptions.addition !== null ? validOptions.addition : "null"
      );
    }
    resultString.push(str + additionArray.join(validOptions.additionSeparator));
  }

  return resultString.join(validOptions.separator);
}

module.exports = {
  repeater,
};

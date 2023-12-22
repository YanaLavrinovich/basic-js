const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numString = [...String(n)];
  let result = 0;

  for (let index = 0; index < numString.length; index++) {
    let tempString = [...numString];
    tempString.splice(index, 1);
    let tempNumber = tempString.join("");
    result = Math.max(tempNumber, result);
  }

  return result;
}

module.exports = {
  deleteDigit,
};

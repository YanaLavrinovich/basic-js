const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numArray = getArrayFromNumber(n);
  while (numArray.length !== 1) {
    numArray = getArrayFromNumber(
      numArray.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
    );
  }

  return numArray[0];
}

function getArrayFromNumber(number) {
  return Array.from(String(number), (value) => Number(value));
}

module.exports = {
  getSumOfDigits,
};

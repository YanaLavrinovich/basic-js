const { NotImplementedError } = require("../extensions/index.js");

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
function encodeLine(str) {
  let prevSymbol = "";
  let tempCount = 1;
  let resultString = "";
  [...str].forEach((symbol) => {
    if (symbol === prevSymbol) {
      tempCount++;
    } else if (prevSymbol !== "") {
      resultString += getNewSymbol(prevSymbol, tempCount);
      tempCount = 1;
    }
    prevSymbol = symbol;
  });

  resultString += getNewSymbol(prevSymbol, tempCount);

  return resultString;
}

function getNewSymbol(symbol, count) {
  if (count !== 1) {
    return count + symbol;
  }
  return symbol;
}

module.exports = {
  encodeLine,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArray = [];
  arr.forEach((value, index) => {
    if (value === "--double-next") {
      if (index !== arr.length - 1) {
        newArray.push(arr[index + 1]);
      }
    } else if (value === "--double-prev") {
      if (index !== 0 && newArray[newArray.length - 1] === arr[index - 1]) {
        newArray.push(arr[index - 1]);
      }
    } else if (value === "--discard-prev") {
      if (index !== 0 && newArray[newArray.length - 1] === arr[index - 1]) {
        newArray.pop(arr[index - 1]);
      }
    } else if (value === "--discard-next") {
    } else {
      if (arr[index - 1] !== "--discard-next") {
        newArray.push(value);
      }
    }
  });

  return newArray;
}

module.exports = {
  transform,
};

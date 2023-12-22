const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = swapMatrix(matrix, matrix.length, matrix[0].length);

  let sum = 0;
  for (x = 0; x < newMatrix.length; x++) {
    let sumBeforeZero = 0;
    for (y = 0; y < newMatrix[x].length; y++) {
      if (newMatrix[x][y] === 0) {
        break;
      }
      sumBeforeZero += newMatrix[x][y];
    }
    sum += sumBeforeZero;
  }
  return sum;
}

function swapMatrix(matrix, colSize, rowSize) {
  let newMatrix = [];
  for (x = 0; x < rowSize; x++) {
    let newRow = [];
    for (y = 0; y < colSize; y++) {
      newRow.push(matrix[y][x]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

module.exports = {
  getMatrixElementsSum,
};

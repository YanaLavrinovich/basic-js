const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  for (x = 0; x < matrix.length; x++) {
    let row = [];
    for (y = 0; y < matrix[x].length; y++) {
      row.push(getCellNumber(matrix, x, y));
    }
    newMatrix.push(row);
  }

  return newMatrix;
}

function getCellNumber(matrix, xRow, yCol) {
  let resultNum = 0;
  if (xRow !== 0) {
    if (hasMine(matrix[xRow - 1][yCol])) {
      resultNum++;
    }

    if (yCol < matrix.length - 1) {
      if (hasMine(matrix[xRow - 1][yCol + 1])) {
        resultNum++;
      }
    }
  }

  if (xRow < matrix.length - 1) {
    if (hasMine(matrix[xRow + 1][yCol])) {
      resultNum++;
    }
  }

  if (yCol !== 0) {
    if (hasMine(matrix[xRow][yCol - 1])) {
      resultNum++;
    }
    if (xRow < matrix.length - 1) {
      if (hasMine(matrix[xRow + 1][yCol - 1])) {
        resultNum++;
      }
    }
  }

  if (yCol < matrix.length - 1) {
    if (hasMine(matrix[xRow][yCol + 1])) {
      resultNum++;
    }
  }

  if (xRow !== 0 && yCol !== 0) {
    if (hasMine(matrix[xRow - 1][yCol - 1])) {
      resultNum++;
    }
  }

  if (xRow < matrix.length - 1 && yCol < matrix.length - 1) {
    if (hasMine(matrix[xRow + 1][yCol + 1])) {
      resultNum++;
    }
  }
  return resultNum;
}

function hasMine(value) {
  if (value === undefined) {
    return false;
  }
  return value;
}

module.exports = {
  minesweeper,
};

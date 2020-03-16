// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
var luckyNumbers = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    let minIndex = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      const sel = matrix[i][j];
      if (min > sel) {
        min = sel;
        minIndex = j;
      }
    }
    let max = min;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][minIndex]);
    }
    if (min === max) {
      result.push(min);
    }
  }
  return result;
};

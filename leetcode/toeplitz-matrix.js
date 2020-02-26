// https://leetcode.com/problems/toeplitz-matrix/
var isToeplitzMatrix = function(matrix) {
  let result = true;
  loop: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const current = matrix[i][j];
      if (matrix[i + 1] == null) continue;
      const next = matrix[i + 1][j + 1];
      if (next !== undefined && next !== current) {
        result = false;
        break loop;
      }
    }
  }
  return result;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
  ])
);

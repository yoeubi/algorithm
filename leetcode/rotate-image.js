// https://leetcode.com/problems/rotate-image/
const rotate = (matrix) => {
  for (let n = 0; n < matrix.length; n++) {
    for (let m = 0; m < matrix.length; m++) {
      if (n === m) break;
      [matrix[n][m], matrix[m][n]] = [matrix[m][n], matrix[n][m]];
    }
  }
  for (let n = 0; n < matrix.length; n++) {
    matrix[n] = matrix[n].reverse();
  }
};

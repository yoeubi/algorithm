// https://leetcode.com/problems/transpose-matrix/
var transpose = function(A) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (result[j] == undefined) result[j] = [];
      result[j][i] = A[i][j];
    }
  }
  return result;
};

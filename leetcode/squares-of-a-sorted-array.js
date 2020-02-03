// https://leetcode.com/problems/squares-of-a-sorted-array/description/
var sortedSquares = function(A) {
  return A.sort((a, b) => (a * a > b * b ? 1 : -1)).map(a => a * a);
};

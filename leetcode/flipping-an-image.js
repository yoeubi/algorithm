// https://leetcode.com/problems/flipping-an-image/submissions/
var flipAndInvertImage = function(A) {
  return A.map(a => a.reverse().map(row => (row === 1 ? 0 : 1)));
};

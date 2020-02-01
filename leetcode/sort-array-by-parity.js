// https://leetcode.com/problems/sort-array-by-parity/solution/
var sortArrayByParity = function(A) {
  return A.sort((a, b) => {
    return a % 2 === 0 ? -1 : 1;
  });
};

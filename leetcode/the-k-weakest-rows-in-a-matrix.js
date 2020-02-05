// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
var kWeakestRows = function(mat, k) {
  return mat
    .map((row, index) => ({ index, val: row.filter(col => col === 1).length }))
    .sort((a, b) => {
      if (a.val > b.val) {
        return 1;
      } else if (a.val === b.val) {
        if (a.index > b.index) {
          return 1;
        }
        return -1;
      } else {
        return -1;
      }
    })
    .map(row => row.index)
    .slice(0, k);
};

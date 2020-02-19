// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
var countNegatives = function(grid) {
  return grid.reduce(
    (prev, row) => prev + row.filter(col => col < 0).length,
    0
  );
};

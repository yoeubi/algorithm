// https://leetcode.com/problems/array-partition-i/
var arrayPairSum = function(nums) {
  return nums
    .sort((a, b) => (a > b ? 1 : a === b ? 0 : -1))
    .filter((_, index) => index % 2 === 0)
    .reduce((prev, num) => prev + num, 0);
};

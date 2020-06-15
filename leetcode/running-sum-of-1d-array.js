// https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function (nums) {
  return nums.map((_, idx) =>
    nums.slice(0, idx + 1).reduce((pre, cur) => pre + cur, 0)
  );
};

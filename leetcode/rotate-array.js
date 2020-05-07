// https://leetcode.com/problems/rotate-array/
var rotate = function (nums, k) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
};

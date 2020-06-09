// https://leetcode.com/problems/shuffle-the-array/
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    result.push(nums[i], nums[nums.length / 2 + i]);
  }
  return result;
};

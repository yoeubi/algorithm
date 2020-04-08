// https://leetcode.com/problems/create-target-array-in-the-given-order/
var createTargetArray = function (nums, index) {
  const result = [];
  for (let i = 0; i < index.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
};

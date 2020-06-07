// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
var maxProduct = function (nums) {
  const max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);
  const nextMax = Math.max(...nums);
  return (max - 1) * (nextMax - 1);
};

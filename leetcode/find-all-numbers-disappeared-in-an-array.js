// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
var findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
};

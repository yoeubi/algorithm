// https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {
  const set = {};
  for (let i = 0; i < nums.length; i++) {
    if (set[nums[i]]) {
      return true;
    } else {
      set[nums[i]] = true;
    }
  }
  return false;
};

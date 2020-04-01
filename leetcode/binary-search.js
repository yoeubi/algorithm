// https://leetcode.com/problems/binary-search/
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (end >= start) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
var smallerNumbersThanCurrent = function(nums) {
  return nums.map((num, _, arr) => arr.filter(a => a < num).length);
};

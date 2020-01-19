// https://leetcode.com/problems/decompress-run-length-encoded-list/
var decompressRLElist = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result = result.concat(new Array(nums[i]).fill(nums[i + 1]));
  }
  return result;
};

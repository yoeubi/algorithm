// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
var minSubsequence = function (nums) {
  const sorted = nums.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    const arr = sorted.slice(0, i + 1);
    const sub = arr.reduce((pre, cur) => pre + cur, 0);
    const rest = sorted.slice(i + 1).reduce((pre, cur) => pre + cur, 0);
    if (sub > rest) {
      return arr;
    }
  }
  return [];
};

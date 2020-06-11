// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  return target.every((t, i) => t === arr[i]);
};

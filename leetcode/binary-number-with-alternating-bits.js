// https://leetcode.com/problems/binary-number-with-alternating-bits/
var hasAlternatingBits = function(n) {
  const binary = String(n.toString(2)).split("");
  return binary.every((bit, idx, arr) => arr[idx - 1] !== bit);
};

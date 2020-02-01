// https://leetcode.com/problems/self-dividing-numbers/submissions/
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    const el = String(i);
    const isDividing = el.split("").every(char => i % Number(char) === 0);
    if (isDividing) {
      result.push(i);
    }
  }
  return result;
};

// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
var maxScore = function (s) {
  s = s.split("");
  let max = -Infinity;
  for (let i = 0; i < s.length - 1; i++) {
    const zeros = s
      .slice(0, i + 1)
      .reduce((acc, cur) => acc + (cur === "0" ? 1 : 0), 0);
    const ones = s
      .slice(i + 1)
      .reduce((acc, cur) => acc + (cur === "1" ? 1 : 0), 0);
    const sum = zeros + ones;
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

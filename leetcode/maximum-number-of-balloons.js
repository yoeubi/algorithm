// https://leetcode.com/problems/maximum-number-of-balloons/
var maxNumberOfBalloons = function(text) {
  const map = text.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  let b = map["b"];
  let a = map["a"];
  let l = map["l"];
  let o = map["o"];
  let n = map["n"];
  let count = 0;
  while (b > 0 && a > 0 && l > 1 && o > 1 && n > 0) {
    b -= 1;
    a -= 1;
    l -= 2;
    o -= 2;
    n -= 1;
    count += 1;
  }
  return count;
};

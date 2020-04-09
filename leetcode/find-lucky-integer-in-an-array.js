// https://leetcode.com/problems/find-lucky-integer-in-an-array/
var findLucky = function (arr) {
  const map = arr.reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const keys = Object.keys(map);
  const lucky = keys.filter((k) => map[k] == k);
  return lucky.length > 0 ? lucky.sort((a, b) => b - a)[0] : -1;
};

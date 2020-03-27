// https://leetcode.com/problems/find-the-difference/
var findTheDifference = function(s, t) {
  const map1 = s.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const map2 = t.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const key = Object.keys(map1);
  const remains = key.filter(k => {
    if (map2[k] !== map1[k]) {
      return true;
    } else {
      delete map2[k];
      return false;
    }
  });
  return remains.concat(Object.keys(map2))[0];
};

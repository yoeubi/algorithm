// https://leetcode.com/problems/valid-anagram/
var isAnagram = function (s, t) {
  const map = s.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const map2 = t.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const key = Object.keys(map);
  const key2 = Object.keys(map2);
  if (key.length !== key2.length) return false;
  return key.every((k) => map[k] === map2[k]);
};

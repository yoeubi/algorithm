// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/
var repeatedNTimes = function(A) {
  const map = {};
  A.forEach(a => (map[a] ? map[a]++ : (map[a] = 1)));
  return Object.keys(map).filter(a => map[a] === A.length / 2)[0];
};

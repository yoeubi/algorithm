// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  });
  const keys = map.keys();
  return Array.from(keys)
    .sort((b, a) => map.get(a) - map.get(b))
    .filter((_, index) => k > index);
};

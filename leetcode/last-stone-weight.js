// https://leetcode.com/problems/last-stone-weight/
var lastStoneWeight = function(stones) {
  const sorted = stones.sort((a, b) => b - a);
  while (sorted.length > 1) {
    const heavyFirst = sorted.shift();
    const heavySecond = sorted.shift();
    sorted.push(heavyFirst - heavySecond);
    sorted.sort((a, b) => b - a);
  }
  return sorted;
};

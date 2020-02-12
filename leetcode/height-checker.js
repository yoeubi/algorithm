// https://leetcode.com/problems/height-checker/
var heightChecker = function(heights) {
  let result = 0;
  const newHeights = [...heights];
  heights.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
  return newHeights.filter((height, index) => height !== heights[index]).length;
};

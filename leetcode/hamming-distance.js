// https://leetcode.com/problems/hamming-distance/
var hammingDistance = function(x, y) {
  const newX = String(x.toString(2));
  const newY = String(y.toString(2));
  const xIndex = 31 - newX.length;
  const yIndex = 31 - newY.length;
  if (x > y) {
    return yIndex - xIndex;
  }
  return xIndex - yIndex;
};

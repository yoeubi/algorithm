// https://leetcode.com/problems/peak-index-in-a-mountain-array/
var peakIndexInMountainArray = function(A) {
  let i = 0;
  while (A[i] < A[i + 1]) i++;
  return i;
};

console.log(peakIndexInMountainArray([0, 2, 1, 0]));

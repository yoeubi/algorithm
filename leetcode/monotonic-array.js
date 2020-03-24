// https://leetcode.com/problems/monotonic-array/
var isMonotonic = function(A) {
  return increase(A) || decrease(A);
};

function increase(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) return false;
  }
  return true;
}

function decrease(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < a[i + 1]) return false;
  }
  return true;
}

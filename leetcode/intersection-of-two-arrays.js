// https://leetcode.com/problems/intersection-of-two-arrays/
var intersection = function(nums1, nums2) {
  const num1 = nums1.reduce((pre, cur) => {
    pre[cur] = cur;
    return pre;
  }, {});
  const num2 = nums2.reduce((pre, cur) => {
    pre[cur] = cur;
    return pre;
  }, {});
  const num1Key = Object.keys(num1);
  const num2Key = Object.keys(num2);
  if (num1Key.length > num2Key.length) {
    return num1Key.filter(n => num2[n] != null);
  } else {
    return num2Key.filter(n => num1[n] != null);
  }
};

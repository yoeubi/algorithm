// https://leetcode.com/problems/single-number/
var singleNumber = function(nums) {
  const result = nums.reduce((pre, cur) => {
    if (pre[cur]) {
      delete pre[cur];
    } else {
      pre[cur] = true;
    }
    return pre;
  }, {});
  return Object.keys(result)[0];
};

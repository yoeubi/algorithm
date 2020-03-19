// https://leetcode.com/problems/majority-element/
var majorityElement = function(nums) {
  const map = nums.reduce((pre, cur) => {
    if (pre[cur]) {
      pre[cur] += 1;
    } else {
      pre[cur] = 1;
    }
    return pre;
  }, {});
  return Object.keys(map).filter(key => map[key] > nums.length / 2);
};

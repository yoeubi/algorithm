// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
var numberOfSteps = function(num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      num -= 1;
    } else {
      num = num / 2;
    }
    count++;
  }
  return count;
};

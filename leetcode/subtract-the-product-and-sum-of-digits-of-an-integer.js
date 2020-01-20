// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
var subtractProductAndSum = function(n) {
  return String(n)
    .split("")
    .reduce(
      (prev, num) => {
        prev[0] *= parseInt(num);
        prev[1] += parseInt(num);
        return prev;
      },
      [1, 0]
    )
    .reduce((first, second) => first - second);
};

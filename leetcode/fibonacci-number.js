// https://leetcode.com/problems/fibonacci-number/
var fib = function(N) {
  function fibonacci(num) {
    if (num < 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fibonacci(N);
};

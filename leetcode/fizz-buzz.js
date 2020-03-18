// https://leetcode.com/problems/fizz-buzz/
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let val;
    if (i % 3 === 0 && i % 5 === 0) {
      val = "FizzBuzz";
    } else if (i % 3 === 0) {
      val = "Fizz";
    } else if (i % 5 === 0) {
      val = "Buzz";
    } else {
      val = String(i);
    }
    result.push(val);
  }
  return result;
};

// https://leetcode.com/problems/maximum-69-number/
var maximum69Number = function(num) {
  const splitedNum = String(num).split("");
  const change = num => (num === "6" ? "9" : "6");
  const result = splitedNum.map((digit, index) => {
    const origin = String(num).split("");
    origin[index] = change(digit);
    return Number(origin.join(""));
  });
  return Math.max(...result, num);
};

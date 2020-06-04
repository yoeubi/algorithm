// https://leetcode.com/problems/number-complement/
var findComplement = function (num) {
  const str = String(num.toString(2))
    .split("")
    .reduce((pre, cur) => pre + (cur === "0" ? "1" : "0"), "");
  return parseInt(str, 2);
};

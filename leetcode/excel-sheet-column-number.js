// https://leetcode.com/problems/excel-sheet-column-number/
var titleToNumber = function(s) {
  const A = "A".charCodeAt(0);
  return s.split("").reduce((prev, cur, index, array) => {
    const base = cur.charCodeAt(0) - A + 1;
    let exponent = Math.pow(26, array.length - 1 - index);
    if (exponent === 0) {
      exponent = 1;
    }
    console.log(base, exponent);
    return prev + base * exponent;
  }, 0);
};

// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
var sortByBits = function(arr) {
  return arr.sort((a, b) => {
    const newA = String(a.toString(2))
      .split("")
      .reduce((prev, item) => prev + Number(item), 0);
    const newB = String(b.toString(2))
      .split("")
      .reduce((prev, item) => prev + Number(item), 0);
    if (newA > newB) {
      return 1;
    } else if (newA === newB) {
      return a > b ? 1 : a === b ? 0 : -1;
    } else {
      return -1;
    }
  });
};

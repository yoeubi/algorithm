// https://leetcode.com/problems/sort-array-by-parity-ii/
var sortArrayByParityII = function(A) {
  let even = 0;
  let odd = 1;
  return A.reduce((prev, item) => {
    const isEven = item % 2 === 0;
    if (isEven) {
      prev[even] = item;
      even += 2;
    } else {
      prev[odd] = item;
      odd += 2;
    }
    return prev;
  }, []);
};

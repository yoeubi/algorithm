// https://leetcode.com/problems/minimum-absolute-difference/
var minimumAbsDifference = function(arr) {
  const sortedArr = arr.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
  let result = [];
  let standard = arr[1] - arr[0];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const diff = next - current;
    if (standard > diff) {
      standard = diff;
      result = [[current, next]];
    } else if (standard === diff) {
      result.push([current, next]);
    }
  }
  return result;
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));

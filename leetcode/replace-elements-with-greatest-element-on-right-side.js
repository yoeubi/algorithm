// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
var replaceElements = function(arr) {
  const result = [];
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    if (el >= max) {
      max = Number.MIN_VALUE;
      for (let j = i + 1; j < arr.length; j++) {
        const el = arr[j];
        if (el > max) {
          max = el;
        }
      }
    }
    result.push(max);
  }
  result.push(-1);
  return result;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));

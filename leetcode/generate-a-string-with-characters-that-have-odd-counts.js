// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
var generateTheString = function(n) {
  const code = "a".charCodeAt(0);
  const isEven = n % 2 === 0;
  const indexArr = [];
  if (isEven) {
    indexArr.push(n - 1);
    indexArr.push(1);
  } else {
    if (n > 1) {
      indexArr.push(n - 2);
      indexArr.push(1);
      indexArr.push(1);
    } else {
      indexArr.push(1);
    }
  }
  return indexArr
    .map((i, idx) => {
      console.log(n, i, idx);
      return String.fromCharCode(code + idx).repeat(i);
    })
    .join("");
};

// https://leetcode.com/problems/occurrences-after-bigram/
var findOcurrences = function(text, first, second) {
  const str = text.split(" ");
  const result = [];
  for (let i = 0; i < str.length - 2; i++) {
    const firstChar = str[i];
    const secondChar = str[i + 1];
    const thirdChar = str[i + 2];
    if (first === firstChar && second === secondChar) {
      result.push(thirdChar);
    }
  }
  return result;
};

console.log(
  findOcurrences("alice is a good girl she is a good student", "a", "good")
);

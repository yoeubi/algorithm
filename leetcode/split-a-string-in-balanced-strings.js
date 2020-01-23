// https://leetcode.com/problems/split-a-string-in-balanced-strings/
var balancedStringSplit = function(s) {
  const chars = s.split("");
  let result = 0;
  let index = 0;
  chars.forEach(char => {
    char === "L" ? index++ : index--;
    if (index === 0) {
      result++;
    }
  });
  if (index > 0) {
    result++;
  }
  return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));

// https://leetcode.com/problems/split-a-string-in-balanced-strings/
var balancedStringSplit = function(s) {
  const chars = s.split("");
  let result = 0;
  let LIndex = 0;
  let RIndex = 0;
  chars.forEach(char => {
    char === "L" ? LIndex++ : RIndex++;
    if (LIndex === RIndex) {
      result++;
      LIndex = RIndex = 0;
    }
  });
  if (LIndex > 0 || RIndex > 0) {
    result++;
  }
  return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));

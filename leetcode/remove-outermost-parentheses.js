// https://leetcode.com/problems/remove-outermost-parentheses/
var removeOuterParentheses = function(S) {
  let index = 0;
  let temp = [];
  let result = "";
  S.split("").forEach(char => {
    if (char === "(") {
      index++;
    } else {
      index--;
    }
    temp.push(char);
    if (index === 0) {
      result += temp.slice(1, temp.length - 1).join("");
      temp = [];
    }
  });
  return result;
};

console.log(removeOuterParentheses("(()())(())"));

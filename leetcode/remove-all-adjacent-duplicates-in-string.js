// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
var removeDuplicates = function(S) {
  let result = "";
  while ((S = S.replace(/([a-z]{1})\1{1}/g, ""))) {
    if (result === S) {
      break;
    }
    result = S;
  }
  return result;
};

console.log(removeDuplicates("aaaaaaaa"));

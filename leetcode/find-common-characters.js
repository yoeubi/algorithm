// https://leetcode.com/problems/find-common-characters/
var commonChars = function(A) {
  let ans = A[0].split("");
  for (let i = 1; i < A.length; i++) {
    ans = findCommon(ans, A[i].split(""));
  }
  return ans;
};

var findCommon = function(a, b) {
  return a.filter(v => {
    let i = b.indexOf(v);
    if (i !== -1) {
      b.splice(i, 1);
      return true;
    }
    return false;
  });
};

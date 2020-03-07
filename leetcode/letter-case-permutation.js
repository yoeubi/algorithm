// https://leetcode.com/problems/letter-case-permutation/
var letterCasePermutation = function(S) {
  let res = [S];
  S = S.split("");
  var dfs = idx => {
    for (let i = idx; i < S.length; i++) {
      //if S[i] is Number then continue;
      if (S[i] == +S[i]) continue;
      console.log(i, S[i]);
      dfs(i + 1);
      S[i] =
        S[i] == S[i].toLowerCase() ? S[i].toUpperCase() : S[i].toLowerCase();
      res.push(S.join(""));
    }
  };
  dfs(0);
  return res;
};

console.log(letterCasePermutation("a1b2"));

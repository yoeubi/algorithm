// https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function(J, S) {
  const result = S.match(new RegExp(`(${J.split("").join("|")})`, "g"));
  return result ? result.length : 0;
};

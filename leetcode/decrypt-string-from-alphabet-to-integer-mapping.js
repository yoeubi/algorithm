// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
var freqAlphabets = function(s) {
  let result = "";
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    const sharp = chars[i + 2];
    if (sharp === "#") {
      result += codeToNumber(chars[i] + chars[i + 1]);
      i += 2;
    } else {
      result += codeToNumber(chars[i]);
    }
  }
  return result;
};

function codeToNumber(char) {
  const a = "a".charCodeAt(0);
  return String.fromCharCode(a - 1 + Number(char));
}

console.log(freqAlphabets("10#11#12"));

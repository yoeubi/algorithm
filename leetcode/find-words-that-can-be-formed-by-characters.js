// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
var countCharacters = function(words, chars) {
  const charMap = chars.split("").reduce((prev, char) => {
    if (prev[char]) {
      prev[char] += 1;
    } else {
      prev[char] = 1;
    }
    return prev;
  }, {});
  const wordMap = words.map(word => {
    return word.split("").reduce((prev, char) => {
      if (prev[char]) {
        prev[char] += 1;
      } else {
        prev[char] = 1;
      }
      return prev;
    }, {});
  });
  return wordMap.reduce((prev, item, index) => {
    const flag = Object.entries(item).every(chars => {
      const key = chars[0];
      const val = chars[1];
      return charMap[key] && charMap[key] >= val;
    });
    return flag ? prev + words[index].length : prev;
  }, 0);
};

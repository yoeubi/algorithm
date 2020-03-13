// https://leetcode.com/problems/uncommon-words-from-two-sentences/
var uncommonFromSentences = function(A, B) {
  const map = {};
  A.split(" ").forEach(char => {
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  });
  B.split(" ").forEach(char => {
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  });
  return Object.keys(map).filter(char => map[char] === 1);
};

// https://leetcode.com/problems/unique-morse-code-words/submissions/
var uniqueMorseRepresentations = function(words) {
  const code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  const map = {};
  words.forEach(word => {
    const result = word
      .split("")
      .map(char => code[char.charCodeAt(0) - "a".charCodeAt(0)]);
    map[result.join("")] = word;
  });
  return Object.keys(map).length;
};

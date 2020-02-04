// https://leetcode.com/problems/unique-number-of-occurrences/
var uniqueOccurrences = function(arr) {
  const map = arr.reduce((prev, item) => {
    if (prev[item]) {
      prev[item] += 1;
    } else {
      prev[item] = 1;
    }
    return prev;
  }, {});
  const item = Object.keys(map);
  let flag = true;
  outer: for (let i = 0; i < item.length - 1; i++) {
    flag = true;
    const target = map[item[i]];
    for (let j = i + 1; j < item.length; j++) {
      const next = map[item[j]];
      if (target === next) {
        flag = false;
        break outer;
      }
    }
  }
  return flag;
};

console.log(uniqueOccurrences([1, 2]));

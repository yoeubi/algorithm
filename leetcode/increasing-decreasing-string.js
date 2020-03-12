// https://leetcode.com/problems/increasing-decreasing-string/
var sortString = function(s) {
  const map = s.split("").reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  }, {});
  const char = Object.keys(map).sort(
    (a, b) => String(a).charCodeAt(0) - String(b).charCodeAt(0)
  );
  let result = "";
  let flag = true;
  while (result.length !== s.length) {
    const newChar = char.filter(c => map[c] > 0);
    if (flag) {
      result += newChar.join("");
    } else {
      result += newChar.reverse().join("");
    }
    flag = !flag;
    char.forEach(c => (map[c] -= 1));
  }
  return result;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("ggggggg"));

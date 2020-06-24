// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      const type = parseInt(s[i], 10);
      if (isNaN(type)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

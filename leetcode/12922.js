// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 1 ? "박" : "수";
  }
  return answer;
}

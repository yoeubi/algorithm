// https://programmers.co.kr/learn/courses/30/lessons/12912 두 정수 사이의 합

function solution(a, b) {
  var answer = 0;
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12944 평균 구하기
function solution(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}

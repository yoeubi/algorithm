// https://programmers.co.kr/learn/courses/30/lessons/12910 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const result = arr.filter((el) => el % divisor === 0);
  if (result.length > 0) {
    return result.sort((a, b) => a - b);
  }
  return [-1];
}

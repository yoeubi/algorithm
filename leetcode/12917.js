// https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript 문자열 내림차순으로 배치하기
function solution(s) {
  const small = s.split("").filter((char) => char === char.toLowerCase());
  const big = s.split("").filter((char) => char === char.toUpperCase());
  return (
    small.sort((a, b) => b.localeCompare(a)).join("") +
    big.sort((a, b) => b.localeCompare(a)).join("")
  );
}

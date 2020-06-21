// https://programmers.co.kr/learn/courses/30/lessons/12903 가운데 글자 가져오기
function solution(s) {
  const isOdd = s.length % 2 === 1;
  const centerIndex = Math.floor(s.length / 2);
  return isOdd ? s[centerIndex] : s.substring(centerIndex - 1, centerIndex + 1);
}
//test 3

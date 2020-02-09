// https://leetcode.com/problems/di-string-match/
var diStringMatch = function(S) {
  const chars = S.split("");
  const length = chars.length;
  const initNum = chars[0] === "I" ? 0 : length;
  const result = [initNum];
  let max = initNum === length ? length - 1 : length;
  let min = initNum === 0 ? 1 : 0;

  chars.forEach((char, index, arr) => {
    const current = char;
    const next = arr[index + 1];
    let num;
    if (current === "I") {
      num = next === current ? min++ : max--;
    } else {
      num = next === current ? max-- : min++;
    }
    console.log(max, min, num);
    result.push(num);
  });
  return result;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));

// I로 시작하면 초기값 0 D로 시작하면 길이 최대값 설정
// I인 경우 다음 I가 오면 최소값 증가 하고 아니면 최대값 감소
// D인 경우 다음 D가 오면 최대값 감소 하고 아니면 최소값 증가

// Input: "IDID"
// Output: [0, 4, 1, 3, 2]

// Input: "III"
// Output: [0, 1, 2, 3]

// Input: "DDI"
// Output: [3, 2, 0, 1]

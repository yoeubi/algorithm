// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/submissions/
var sumZero = function(n) {
  const isOdd = n % 2 === 1;
  const half = Math.floor(n / 2);
  const temp = Array.from({ length: half }, (_, index) => [
    Number(`-${half * (index + 1)}`),
    half * (index + 1)
  ]).reduce((prev, item) => {
    return prev.concat(item);
  }, []);
  if (isOdd) {
    return [0].concat(temp);
  }
  return temp;
};

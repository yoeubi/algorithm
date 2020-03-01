// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
var countPrimeSetBits = function(L, R) {
  const bits = [];
  for (let i = L; i <= R; i++) {
    const bit = String(i.toString(2)).replace(/[0]/g, "").length;
    bits.push(bit);
  }
  return bits.filter(bit => {
    if (bit === 1) return false;
    for (let i = 2; i < bit; i++) {
      if (bit % i === 0) {
        return false;
      }
    }
    return true;
  }).length;
};

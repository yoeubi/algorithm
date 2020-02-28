// https://leetcode.com/problems/matrix-cells-in-distance-order/
var allCellsDistOrder = function(R, C, r0, c0) {
  const matrix = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      matrix.push([i, j]);
    }
  }
  return matrix.sort((a, b) => {
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const diffOfRowA = Math.abs(r0 - rowA);
    const diffOfColA = Math.abs(c0 - colA);
    const diffOfRowB = Math.abs(r0 - rowB);
    const diffOfColB = Math.abs(c0 - colB);
    const sumOfA = diffOfRowA + diffOfColA;
    const sumOfB = diffOfRowB + diffOfColB;
    return sumOfA > sumOfB ? 1 : sumOfA === sumOfB ? 0 : -1;
  });
};

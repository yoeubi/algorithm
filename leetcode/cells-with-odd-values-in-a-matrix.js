// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
var oddCells = function(n, m, indices) {
  let matrix = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  indices.forEach(([rowIndex, colIndex]) => {
    matrix.forEach((_, index) => {
      if (index === rowIndex) {
        matrix[rowIndex] = matrix[rowIndex].map(col => (col += 1));
      }
      matrix[index][colIndex] += 1;
    });
  });
  return matrix.reduce((prev, row) => {
    const result = row.filter(col => col % 2 === 1).length;
    return prev + result;
  }, 0);
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1]
  ])
);

console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0]
  ])
);

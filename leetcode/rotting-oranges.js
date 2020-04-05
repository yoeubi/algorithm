// https://leetcode.com/problems/rotting-oranges/
var orangesRotting = function (grid) {
  const queue = [];
  let oranges = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      if (cell === 2) queue.push([i, j]);
      if (cell === 1) oranges += 1;
    }
  }
  let count = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      if (grid[x + 1] && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2;
        queue.push([x + 1, y]);
        oranges--;
      }
      if (grid[x - 1] && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2;
        queue.push([x - 1, y]);
        oranges--;
      }
      if (grid[x] && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        queue.push([x, y + 1]);
        oranges--;
      }
      if (grid[x] && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        queue.push([x, y - 1]);
        oranges--;
      }
    }
    if (queue.length > 0) count += 1;
  }
  return oranges === 0 ? count : -1;
};

// https://leetcode.com/problems/island-perimeter/
var islandPerimeter = function(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let temp = 4;
      const rect = grid[i][j];
      if (rect === 0) continue;
      const left = grid[i][j - 1];
      const right = grid[i][j + 1];
      const up = grid[i - 1] ? grid[i - 1][j] : 0;
      const down = grid[i + 1] ? grid[i + 1][j] : 0;
      if (left) temp -= 1;
      if (right) temp -= 1;
      if (up) temp -= 1;
      if (down) temp -= 1;
      result += temp;
    }
  }
  return result;
};

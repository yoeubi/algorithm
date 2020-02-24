// https://leetcode.com/problems/available-captures-for-rook/
var numRookCaptures = function(board) {
  let x;
  let y;
  loop: for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break loop;
      }
    }
  }
  let count = 0;
  console.log(x, y);
  while (true) {
    let newX = x;
    let newY = y;
    let cell;
    while ((cell = board[newX][++newY])) {
      if (cell === "B") {
        break;
      }
      if (cell === "p") {
        count += 1;
        break;
      }
    }
    newX = x;
    newY = y;
    while ((cell = board[newX][--newY])) {
      if (cell === "B") {
        break;
      }
      if (cell === "p") {
        count += 1;
        break;
      }
    }
    newX = x;
    newY = y;
    while (board[++newX]) {
      cell = board[newX][newY];
      if (cell === "B") {
        break;
      }
      if (cell === "p") {
        count += 1;
        break;
      }
    }
    newX = x;
    newY = y;
    while (board[--newX]) {
      cell = board[newX][newY];
      if (cell === "B") {
        break;
      }
      if (cell === "p") {
        count += 1;
        break;
      }
    }
    break;
  }
  return count;
};

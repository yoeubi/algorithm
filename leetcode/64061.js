// https://programmers.co.kr/learn/courses/30/lessons/64061 크레인 인형뽑기 게임
function solution(board, moves) {
  var answer = 0;
  const row = board.length;
  const stack = [];
  moves.forEach((move) => {
    for (let i = 0; i < row; i++) {
      const current = board[i][move - 1];
      if (current) {
        const before = stack[stack.length - 1];
        if (before === current) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(current);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return answer;
}

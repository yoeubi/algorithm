// https://leetcode.com/problems/baseball-game/
var calPoints = function(ops) {
  const stack = [];
  ops.forEach(op => {
    const parse = Number(op);
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      const val = stack[stack.length - 1];
      stack.push(2 * val);
    } else if (op === "+") {
      const first = stack[stack.length - 2];
      const second = stack[stack.length - 1];
      stack.push(first + second);
    } else {
      stack.push(parse);
    }
  });
  return stack.reduce((prev, cur) => prev + cur, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));

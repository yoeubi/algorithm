// https://leetcode.com/problems/average-of-levels-in-binary-tree/
var averageOfLevels = function(root) {
  const res = [];
  let queue = [root];
  while (queue.length > 0) {
    let sum = 0;
    let count = 0;
    const temp = [];
    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.val;
      count += 1;
      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }
    queue = temp;
    res.push(sum / count);
  }
  return res;
};

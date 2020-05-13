// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
var maxLevelSum = function (root) {
  const queue = [];
  if (root) queue.push(root);
  let max = -Infinity;
  let result = 0;
  let index = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let temp = 0;
    index += 1;
    while (size--) {
      const node = queue.shift();
      temp += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (temp > max) {
      max = temp;
      result = index;
    }
  }
  return result;
};

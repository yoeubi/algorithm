// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
var largestValues = function (root) {
  const queue = [];
  const result = [];
  if (root) queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    let max = queue[0].val;
    while (size--) {
      const node = queue.shift();
      if (node.val > max) max = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(max);
  }
  return result;
};

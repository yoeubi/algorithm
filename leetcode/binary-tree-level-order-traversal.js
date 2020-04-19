// https://leetcode.com/problems/binary-tree-level-order-traversal/
var levelOrder = function (root) {
  if (root == null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];
    while (size--) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(temp);
  }
  return result;
};

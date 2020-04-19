// https://leetcode.com/problems/binary-tree-right-side-view/
var rightSideView = function (root) {
  if (root == null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let size = queue.length;
    result.push(queue[size - 1].val);
    while (size--) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

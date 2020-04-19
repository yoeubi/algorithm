// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  const queue = [root];
  const result = [];
  let flag = false;
  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];
    while (size--) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (flag) temp.reverse();
    flag = !flag;
    result.push(temp);
  }
  return result;
};

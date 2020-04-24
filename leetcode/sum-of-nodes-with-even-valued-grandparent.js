// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
var sumEvenGrandparent = function (root) {
  if (root == null) return 0;
  const queue = [root];
  let result = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val % 2 === 0) {
      if (node.left) {
        if (node.left.left) result += node.left.left.val;
        if (node.left.right) result += node.left.right.val;
      }
      if (node.right) {
        if (node.right.left) result += node.right.left.val;
        if (node.right.right) result += node.right.right.val;
      }
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

// https://leetcode.com/problems/symmetric-tree/
var isSymmetric = function(root) {
  const queue = [root, root];
  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();
    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val !== node2.val) return false;
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
};

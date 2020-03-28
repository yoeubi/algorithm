// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
var levelOrderBottom = function(root) {
  const result = [];
  function traverse(node, dep) {
    if (node == null) return;
    if (result[dep]) {
      result[dep].push(node.val);
    } else {
      result[dep] = [node.val];
    }
    if (node.left) traverse(node.left, dep + 1);
    if (node.right) traverse(node.right, dep + 1);
  }
  traverse(root, 0);
  return result.reverse();
};

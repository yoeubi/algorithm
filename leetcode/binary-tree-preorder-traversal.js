// https://leetcode.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function (root) {
  const result = [];
  function traverse(node) {
    if (node == null) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
};

// https://leetcode.com/problems/binary-tree-inorder-traversal/
var inorderTraversal = function (root) {
  const result = [];
  function traverse(node) {
    if (node == null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
};

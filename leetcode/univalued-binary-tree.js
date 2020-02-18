// https://leetcode.com/problems/univalued-binary-tree/
var isUnivalTree = function(root) {
  let flag = true;
  function traverse(node, val) {
    if (node == null || !flag) return;
    if (node.val !== val) {
      flag = false;
      return;
    }
    if (node.left) traverse(node.left, val);
    if (node.right) traverse(node.right, val);
  }
  traverse(root, root.val);
  return flag;
};

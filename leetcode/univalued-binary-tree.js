// https://leetcode.com/problems/univalued-binary-tree/
var isUnivalTree = function (root) {
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

var isUnivalTree = function (root) {
  let left =
    root.left === null ||
    (root.val === root.left.val && isUnivalTree(root.left));
  let right =
    root.right === null ||
    (root.val === root.right.val && isUnivalTree(root.right));
  return left && right;
};

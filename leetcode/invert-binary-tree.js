// https://leetcode.com/problems/invert-binary-tree/
var invertTree = function (root) {
  function traverse(node) {
    if (node == null) return;
    if (node.left && node.right) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      traverse(node.left);
      traverse(node.right);
    } else if (node.left) {
      node.right = node.left;
      node.left = null;
      traverse(node.right);
    } else {
      node.left = node.right;
      node.right = null;
      traverse(node.left);
    }
  }
  traverse(root);
  return root;
};

var invertTree = function (root) {
  if (root == null) return null;
  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};

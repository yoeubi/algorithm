// https://leetcode.com/problems/binary-tree-paths/
var binaryTreePaths = function(root) {
  const result = [];
  function traverse(node, dep) {
    if (node == null) return;
    dep += node.val;
    if (node.left) traverse(node.left, dep + "->");
    if (node.right) traverse(node.right, dep + "->");
    if (!node.left && !node.right) result.push(dep);
  }
  traverse(root, "");
  return result;
};

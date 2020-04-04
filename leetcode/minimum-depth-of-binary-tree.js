// https://leetcode.com/problems/minimum-depth-of-binary-tree/
var minDepth = function (root) {
  const result = [];
  function traverse(node, dep) {
    if (node == null) return;
    if (!node.left && !node.right) result.push(dep);
    traverse(node.left, dep + 1);
    traverse(node.right, dep + 1);
  }
  traverse(root, 1);
  if (result.length === 0) return 0;
  return Math.min(...result);
};

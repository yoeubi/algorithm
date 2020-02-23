// https://leetcode.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
  let max = 0;
  function traverse(node, dep) {
    if (node == null) return;
    const newDep = dep + 1;
    if (newDep > max) max = newDep;
    if (node.left) traverse(node.left, newDep);
    if (node.right) traverse(node.right, newDep);
  }
  traverse(root, 0);
  return max;
};

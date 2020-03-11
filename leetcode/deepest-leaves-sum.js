// https://leetcode.com/problems/deepest-leaves-sum/
var deepestLeavesSum = function(root) {
  const result = [];
  function traverse(node, level) {
    if (node == null) return;
    if (result[level]) {
      result[level] += node.val;
    } else {
      result[level] = node.val;
    }
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return result[result.length - 1];
};

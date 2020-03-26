// https://leetcode.com/problems/sum-of-left-leaves/
var sumOfLeftLeaves = function(root) {
  let result = 0;
  function traverse(node, flag) {
    if (node == null) return;
    if (flag && !node.left && !node.right) result += node.val;
    if (node.left) traverse(node.left, true);
    if (node.right) traverse(node.right, false);
  }
  traverse(root, false);
  return result;
};

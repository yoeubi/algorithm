// https://leetcode.com/problems/binary-tree-pruning/
var pruneTree = function(root) {
  function containsOne(node) {
    if (node == null) return false;
    const a1 = containsOne(node.left);
    const a2 = containsOne(node.right);
    if (!a1) node.left = null;
    if (!a2) node.right = null;
    return node.val == 1 || a1 || a2;
  }
  return containsOne(root) ? root : null;
};

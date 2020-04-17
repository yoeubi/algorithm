// https://leetcode.com/problems/find-bottom-left-tree-value/
var findBottomLeftValue = function (root) {
  let val = root.val;
  let height = 0;
  function traverse(node, dep) {
    if (!node) return;
    traverse(node.left, dep + 1);
    if (dep > height) {
      val = node.val;
      height = dep;
    }
    traverse(node.right, dep + 1);
  }
  traverse(root, 1);
  return val;
};

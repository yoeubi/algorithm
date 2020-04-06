// https://leetcode.com/problems/path-sum/
var hasPathSum = function (root, sum) {
  let flag = false;
  function traverse(node, vals) {
    if (node == null) return;
    vals += node.val;
    if (!node.left && !node.right) {
      if (vals === sum) flag = true;
    }
    traverse(node.left, vals);
    traverse(node.right, vals);
  }
  traverse(root, 0);
  return flag;
};

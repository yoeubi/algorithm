// https://leetcode.com/problems/range-sum-of-bst/
var rangeSumBST = function(root, L, R) {
  let result = 0;
  function dfs(node, L, R) {
    if (node) {
      if (L <= node.val && node.val <= R) {
        result += node.val;
      }
      if (L < node.val) {
        dfs(node.left, L, R);
      }
      if (node.val < R) {
        dfs(node.right, L, R);
      }
    }
  }
  dfs(root, L, R);
  return result;
};

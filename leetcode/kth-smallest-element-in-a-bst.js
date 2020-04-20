// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
var kthSmallest = function (root, k) {
  const values = [];
  function traverse(node) {
    if (node == null) return;
    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return values[k - 1];
};

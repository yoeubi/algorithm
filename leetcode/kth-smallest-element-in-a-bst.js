// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
var kthSmallest = function (root, k) {
  const values = [];
  function traverse(node) {
    if (node == null) return;
    values.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  values.sort((a, b) => a - b);
  return values[k - 1];
};

// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
var getAllElements = function (root1, root2) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root1);
  traverse(root2);
  return result.sort((a, b) => a - b);
};

// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
var postorder = function(root) {
  const result = [];
  function traverse(node) {
    if (node == null) return;
    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
    result.push(node.val);
  }
  traverse(root);
  return result;
};

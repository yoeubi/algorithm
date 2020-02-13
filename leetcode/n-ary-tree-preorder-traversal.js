// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
var preorder = function(root) {
  let stack = [root];
  const result = [];
  let node;
  while ((node = stack.pop())) {
    result.push(node.val);
    if (node.children) {
      stack = stack.concat(node.children.reverse());
    }
  }
  return result;
};

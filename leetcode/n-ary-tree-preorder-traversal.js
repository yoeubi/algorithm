// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
var preorder = function(root) {
  let queue = [];
  const result = [];
  let node;
  queue.push(root);
  while ((node = queue.pop())) {
    result.push(node.val);
    if (node.children) {
      queue = queue.concat(node.children.reverse());
    }
  }
  return result;
};

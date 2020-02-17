// https://leetcode.com/problems/increasing-order-search-tree/
var increasingBST = function(root) {
  const values = [];
  function traverse(node) {
    if (node == null) return;
    if (node.left) {
      traverse(node.left);
    }
    values.push(node.val);
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  function Tree(val) {
    this.val = val;
    this.left = this.right = null;
  }
  const newRoot = new Tree(0);
  let current = newRoot;
  for (const val of values) {
    current.right = new Tree(val);
    current = current.right;
  }
  return newRoot.right;
};

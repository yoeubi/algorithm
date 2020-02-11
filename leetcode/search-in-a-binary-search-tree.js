// https://leetcode.com/problems/search-in-a-binary-search-tree/
var searchBST = function(root, val) {
  let node = root;
  while (node) {
    if (node.val === val) {
      return node;
    }
    if (node.val < val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return null;
};

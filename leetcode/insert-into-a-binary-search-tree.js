// https://leetcode.com/problems/insert-into-a-binary-search-tree/
var insertIntoBST = function (root, val) {
  let node = root;
  while (node) {
    if (val > node.val) {
      if (node.right) node = node.right;
      else {
        node.right = new TreeNode(val);
        break;
      }
    } else {
      if (node.left) node = node.left;
      else {
        node.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};

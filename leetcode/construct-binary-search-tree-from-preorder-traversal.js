// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null;

  const [root, ...rest] = preorder;
  const rootNode = new TreeNode(root);
  rootNode.left = bstFromPreorder(rest.filter((n) => root > n));
  rootNode.right = bstFromPreorder(rest.filter((n) => root < n));
  return rootNode;
};

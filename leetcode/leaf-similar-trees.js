// https://leetcode.com/problems/leaf-similar-trees/
var leafSimilar = function(root1, root2) {
  const leaf1 = [];
  const leaf2 = [];
  function traverse(node, arr) {
    if (node == null) return;
    if (!node.left && !node.right) {
      arr.push(node.val);
    }
    if (node.left) traverse(node.left, arr);
    if (node.right) traverse(node.right, arr);
  }
  traverse(root1, leaf1);
  traverse(root2, leaf2);
  return leaf1.every((val, index) => val === leaf2[index]);
};

// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
var sumRootToLeaf = function(root) {
  let result = 0;
  const vals = [];
  function traverse(node, arr) {
    arr.push(node.val);
    if (!node.left && !node.right) result += parseInt(arr.join(""), 2);
    if (node.left) traverse(node.left, arr);
    if (node.right) traverse(node.right, arr);
    arr.pop();
  }
  traverse(root, vals);
  return result;
};

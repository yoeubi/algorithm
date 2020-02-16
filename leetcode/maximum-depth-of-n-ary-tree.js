// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
var maxDepth = function(root) {
  let max = 0;
  function travese(node, depths) {
    if (node == null) return;
    const newDepth = depths + 1;
    if (max < newDepth) {
      max = newDepth;
    }
    if (node.children) {
      node.children.forEach(child => travese(child, newDepth));
    }
  }
  travese(root, 0);
  return max;
};

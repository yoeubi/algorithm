// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
var levelOrder = function (root) {
  const queue = [];
  let result = [];
  root && queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    const temp = [];
    while (size--) {
      const node = queue.shift();
      temp.push(node.val);
      node.children.forEach((c) => c && queue.push(c));
    }
    result.push(temp);
  }
  return result;
};

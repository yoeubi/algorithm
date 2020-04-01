// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
var findTarget = function(root, k) {
  const queue = [root];
  const val = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (val.some(v => v + node.val === k)) return true;
    val.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};

var findTarget = function(root, k) {
  const queue = [root];
  const val = {};
  while (queue.length > 0) {
    const node = queue.shift();
    if (val[k - node.val]) return true;
    val[node.val] = true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};

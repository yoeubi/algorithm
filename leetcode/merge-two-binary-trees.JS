// https://leetcode.com/problems/merge-two-binary-trees/
var mergeTrees = function(t1, t2) {
  function traverse(t1, t2) {
    if (t1 == null) {
      return t2;
    }
    if (t2 == null) {
      return t1;
    }
    t1.val += t2.val;
    t1.left = traverse(t1.left, t2.left);
    t1.right = traverse(t1.right, t2.right);
    return t1;
  }
  return traverse(t1, t2);
};

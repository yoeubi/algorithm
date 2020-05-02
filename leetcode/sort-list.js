// https://leetcode.com/problems/sort-list/
var sortList = function (head) {
  let node = head;
  const vals = [];
  while (node) {
    vals.push(node.val);
    node = node.next;
  }
  vals.sort((a, b) => a - b);
  node = head;
  let index = 0;
  while (node) {
    node.val = vals[index++];
    node = node.next;
  }
  return head;
};

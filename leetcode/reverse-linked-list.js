// https://leetcode.com/problems/reverse-linked-list/
var reverseList = function (head) {
  let node = head;
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  arr.reverse();
  node = head;
  let index = 0;
  while (node) {
    node.val = arr[index++];
    node = node.next;
  }
  return head;
};

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

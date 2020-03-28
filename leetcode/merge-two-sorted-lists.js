// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function(l1, l2) {
  let arr1 = [];
  let arr2 = [];
  let node = l1;
  while (node) {
    arr1.push(node.val);
    node = node.next;
  }
  node = l2;
  while (node) {
    arr2.push(node.val);
    node = node.next;
  }
  const newArr = arr1.concat(arr2).sort((a, b) => a - b);
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  let list = l1;
  if (newArr.length > 0) {
    list = new ListNode(newArr[0]);
  }
  for (let i = 1; i < newArr.length; i++) {
    let node = list;
    let prev;
    while (node) {
      prev = node;
      node = node.next;
    }
    prev.next = new ListNode(newArr[i]);
  }
  return list;
};

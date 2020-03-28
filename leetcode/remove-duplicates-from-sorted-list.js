// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function(head) {
  if (head == null) return head;
  let node = head.next;
  let prev = head;
  while (node) {
    if (node.val == prev.val) {
      prev.next = node.next;
      node = node.next;
    } else {
      prev = node;
      node = node.next;
    }
  }
  return head;
};

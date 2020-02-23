// https://leetcode.com/problems/middle-of-the-linked-list/
var middleNode = function(head) {
  let total = 0;
  let newHead = head;
  while (newHead) {
    total += 1;
    newHead = newHead.next;
  }
  const middle = total % 2 === 0 ? total / 2 : Math.floor(total / 2);
  let count = 0;
  let result = head;
  while (count++ < middle) {
    result = result.next;
  }
  return result;
};

// https://leetcode.com/problems/next-greater-node-in-linked-list/
var nextLargerNodes = function (head) {
  let list = head;
  const result = [];
  while (list) {
    let sub = list.next;
    let max = list.val;
    while (sub) {
      if (max < sub.val) {
        max = sub.val;
        break;
      }
      sub = sub.next;
    }

    list.val = list.val === max ? 0 : max;
    result.push(list.val);
    list = list.next;
  }
  return result;
};

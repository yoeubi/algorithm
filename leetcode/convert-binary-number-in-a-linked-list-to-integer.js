// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
var getDecimalValue = function(head) {
  let node = head;
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result.reduce((prev, node, index, arr) => {
    console.log(prev, node, Math.pow(2, arr.length - index - 1), arr);
    return prev + node * Math.pow(2, arr.length - index - 1);
  }, 0);
};

// 2nd
var getDecimalValue = function(head) {
  let node = head;
  let result = "";
  while (node) {
    result += node.val;
    node = node.next;
  }
  return parseInt(result, 2);
};

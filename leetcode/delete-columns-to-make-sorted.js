// https://leetcode.com/problems/delete-columns-to-make-sorted/
var minDeletionSize = function(A) {
  const strArray = [];
  for (let i = 0; i < A.length; i++) {
    const str = A[i];
    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      if (strArray[j]) {
        strArray[j].push(char);
      } else {
        strArray[j] = [char];
      }
    }
  }
  const array = strArray.filter(str => {
    for (let i = 0; i < str.length - 1; i++) {
      const current = str[i];
      const next = str[i + 1];
      if (current > next) {
        return true;
      }
    }
    return false;
  });
  return array.length;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));

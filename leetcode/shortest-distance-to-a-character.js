// https://leetcode.com/problems/shortest-distance-to-a-character/
var shortestToChar = function(S, C) {
  return S.split("").map((char, index) => {
    if (char !== C) {
      const forward = S.indexOf(C, index) - index;
      const backward = S.lastIndexOf(C, index);
      const absForward = Math.abs(forward);
      const absBackword = Math.abs(backward - index);
      if (backward === -1) {
        return forward;
      } else {
        if (absForward > absBackword) {
          return absBackword;
        }
        return absForward;
      }
    } else {
      return 0;
    }
  });
};

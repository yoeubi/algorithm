// https://leetcode.com/problems/daily-temperatures/
var dailyTemperatures = function (T) {
  return T.map((t, index) => {
    for (let i = index + 1; i < T.length; i++) {
      if (T[i] > t) return i - index;
    }
    return 0;
  });
};

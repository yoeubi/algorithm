// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
var busyStudent = function (startTime, endTime, queryTime) {
  let result = 0;
  for (let i = 0; i < startTime.length; i++) {
    const start = startTime[i];
    const end = endTime[i];
    if (start <= queryTime && queryTime <= end) result++;
  }
  return result;
};

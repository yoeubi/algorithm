// https://leetcode.com/problems/minimum-time-visiting-all-points/submissions/
var minTimeToVisitAllPoints = function(points) {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const dist = points[i + 1];
    const start = points[i];
    const x = Math.abs(dist[0] - start[0]);
    const y = Math.abs(dist[1] - start[1]);
    result += x > y ? x : y;
  }
  return result;
};

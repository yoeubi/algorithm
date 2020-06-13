// https://leetcode.com/problems/destination-city/
var destCity = function (paths) {
  const map = new Map();
  paths.forEach((path) => map.set(path[0], path[1]));
  let target = map.get(paths[0][0]);
  while (target) {
    const result = map.get(target);
    if (result) target = result;
    else break;
  }
  return target;
};

// https://leetcode.com/problems/relative-sort-array/
var relativeSortArray = function(arr1, arr2) {
  const map = {};
  arr1.forEach(item => (map[item] ? (map[item] += 1) : (map[item] = 1)));

  const result = arr2.reduce((prev, item) => {
    const result = Array.from({ length: map[item] }, () => item);
    delete map[item];
    prev.push(...result);
    return prev;
  }, []);
  const restKeys = Object.keys(map).sort((a, b) =>
    Number(a) > Number(b) ? 1 : a === b ? 0 : -1
  );
  const rest = restKeys.reduce((prev, item) => {
    const result = Array.from({ length: map[item] }, () => item);
    prev.push(...result);
    return prev;
  }, []);
  result.push(...rest);
  return result;
};

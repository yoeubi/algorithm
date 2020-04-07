// https://leetcode.com/problems/employee-importance/
var GetImportance = function (employees, id) {
  if (employees.length === 0) return 0;
  const queue = [];
  queue.push(employees.find((e) => e.id === id));
  let result = 0;
  while (queue.length > 0) {
    const { id, importance, subordinates } = queue.shift();
    result += importance;
    subordinates.forEach((s) => queue.push(employees.find((e) => e.id === s)));
  }
  return result;
};

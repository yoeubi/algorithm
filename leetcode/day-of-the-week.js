// https://leetcode.com/problems/day-of-the-week/
var dayOfTheWeek = function(day, month, year) {
  const past = new Date(year, month - 1, day);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[past.getDay()];
};

// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    const sum = candies[i] + extraCandies;
    const temp = candies
      .filter((_, index) => i !== index)
      .every((candy) => sum >= candy);
    result.push(temp);
  }
  return result;
};

var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies);
  var res = candies.map((candy) => {
    return candy + extraCandies >= max;
  });
  return res;
};

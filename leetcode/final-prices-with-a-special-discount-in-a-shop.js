// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
var finalPrices = function (prices) {
  return prices.map((i, index) => {
    const next = prices.slice(index + 1).find((j) => j <= i);
    return next ? i - next : i;
  });
};

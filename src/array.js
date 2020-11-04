// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

//find the greatest difference in value where j > i.
export function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  prices.forEach(function (x) {
    if (x < minPrice) minPrice = x;
    else if (x - minPrice > maxProfit) maxProfit = x - minPrice;
  });
  return maxProfit;
}

//The two pointers pattern requires the array to be sorted, so we do that first.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let trips = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    findThree(nums, -nums[i], i + 1, trips);
  }
  return trips;
}

function findThree(arr, target, left, trip) {
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) {
      trip.push([-target, arr[left], arr[right]]);
      left += 1;
      right -= 1;

      while (left < right && arr[left] === arr[left - 1]) left += 1;
      while (left < right && arr[right] === arr[right + 1]) right -= 1;
    } else if (arr[left] + arr[right] < target) left += 1;
    else right -= 1;
  }
}

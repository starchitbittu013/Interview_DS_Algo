// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
};

// TC: O(n)
// SC: O(1)



// var maxProfit = function(prices) {
//     let n = prices.length;
//     let i = 0, j = 1; // i = left, j = right
//     let maxProfit = 0

//     while(j < n) {
//         if(prices[j] < prices[i]) {
//             i = j;            
//         } else {
//             let profit = 0;
//             profit = prices[j] - prices[i];
//             maxProfit = Math.max(profit, maxProfit);            
//         }
//         j++; 
//     }
//     return maxProfit;       
// };

// // TC: O(n)
// // SC: O(1)
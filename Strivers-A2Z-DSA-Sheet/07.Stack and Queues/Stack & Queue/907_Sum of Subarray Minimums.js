// 907. Sum of Subarray Minimums

// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.
// Example 2:

// Input: arr = [11,81,94,43,3]
// Output: 444


/**
 * @param {number[]} arr
 * @return {number}
 */

// Brute force  
var sumSubarrayMins = function(arr) {
    let n = arr.length;
    let mod = 1e9 + 7;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        let min = arr[i];
        for(let j = i; j < n; j++) {
            min = Math.min(min, arr[j]);
            sum = (sum + min) % mod;
        }
    }
    return sum;
};
// Kadane's Algorithm : Maximum Subarray Sum in an Array

// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.


/**
 * @param {number[]} nums
 * @return {number}
 */

// Naive Solution
// TC: O(n^2)
// var maxSubArray = function(nums) {
//     let maxSum = -Infinity;    
    
//     for(let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for(j = i; j < nums.length; j++) {
//             sum += nums[j];
//             maxSum = Math.max(maxSum, sum);
//         }
//     }
//     return maxSum;
// };



// Kadane's Algorithm : Maximum Subarray Sum in an Array

var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);

        if(sum < 0) {
            sum = 0;
        }
        
    }
    return maxSum;
};



// 9007199254740991
//-9007199254740991



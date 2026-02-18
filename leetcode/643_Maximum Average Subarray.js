// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // We'll use Sliding Window Concept here,
    // where subarray needs to be identified of window size 4
    let max = -Infinity;
    let i = 0
    let j = 0;
    let avg = 0;
    let sum = 0;

    
    while(j < nums.length) {
        sum = sum + nums[j];
        avg = (sum / k).toFixed(5);
        if (j - i + 1 < k) {
            j++;
        } else {
            max = Math.max(max, avg);
            console.log(`max: ${max}`);
            sum = sum - nums[i];
            avg = (sum / k).toFixed(5);
            i++;
            j++;
        }
    }
    return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));

// TC: O(n) : , where n is the length of the nums array. 
// This is because the function uses a sliding window approach to iterate over the array once, 
// performing constant-time operations for each element.

// SC: O(1) : because the function uses a constant amount of additional space to store variables (max, i, j, avg, sum). 
// The space usage does not depend on the input size.
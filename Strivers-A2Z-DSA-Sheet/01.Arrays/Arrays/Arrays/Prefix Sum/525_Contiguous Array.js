// 525. Contiguous Array

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLength = 0;
    let map = new Map();
    map.set(0, -1);
    let i = 0;
    let sum = 0;

    while(i < nums.length) {
        if(nums[i] === 1) {
            sum++;
        } else {
            sum--;
        }

        if(map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
        i++;
    }
    return maxLength;
};
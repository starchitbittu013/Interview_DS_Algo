// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

// Approach:  We maintain a variable count that keeps a track of the number of consecutive 1’s while traversing
//  the array. The other variable max_count maintains the maximum number of 1’s, in other words, it maintains
//  the answer.

// We start traversing from the beginning of the array. Since we can encounter either a 1 or 0 
// there can be two situations:-

// If  the value at the current index is equal to 1 we increase the value of count by one. 
// After updating  the count variable if it becomes more than the max_count  update the max_count.
// If the value at the current index is equal to zero we make the variable count as 0 
// since there are no more consecutive ones.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            max = Math.max(max, count);
        }
        if(nums[i] === 0) {
            count = 0;
        }
    }
    return max;
};
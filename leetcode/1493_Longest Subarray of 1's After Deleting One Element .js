// 1493. Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 
// if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value 
// of 1's is [1,1,1,1,1].

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let i = 0;
    let j = 0;
    let max = 0;
    let deletedCount = 0;

    while (j < nums.length) {       
        if (nums[j] === 0) {
            deletedCount++;        
        }
        if (deletedCount > 1) {
            if (nums[i] === 0) {
                deletedCount--;
            }
            i++;
        }
        max = Math.max(max, j - i - deletedCount + 1);    
        j++;
        if (j === nums.length && deletedCount === 0) {
            max--;
        }
    }
    return max;
}


console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,1]));
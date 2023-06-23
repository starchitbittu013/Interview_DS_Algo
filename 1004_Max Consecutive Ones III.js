// # 1004. Max Consecutive Ones III

// # Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// # Example 1:

// # Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// # Output: 6
// # Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// # Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// # Example 2:

// # Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// # Output: 10
// # Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// # Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let flipCount = 0;
    let max = 0;
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] === 0) {                
            flipCount++;            
        }
        if (flipCount > k) {
            if (nums[i] === 0) {
                flipCount--;                
            }
            i++;
        }
        max = Math.max(max, j - i + 1);
        j++;
        console.log(`i: ${i}, j: ${j}`);
    }
    return max; 
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

TC: O(n)
SC: O(1)



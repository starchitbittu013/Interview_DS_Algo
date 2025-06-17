// 713. Subarray Product Less Than K

// Given an array of integers nums and an integer k, 
// return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0;
    let j = 0;
    let n = nums.length;
    let count = 0;
    let product = 1;

    if(k <= 1) return 0;

    while(j < n) {
        product *= nums[j];

        while(product >= k) {
            product /= nums[i];
            i++;
        }

        count += j - i + 1;  // Number of subarrays ending at j
        j++;
    }
    return count;
};

/* 
var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length;
    let product = 1;
    let i = 0;
    let j = 0;
    let count = 0;

    while(i < n) {
        if(product * nums[j] < k) {
            product *= nums[j]; 
            count++;
            j++;
        } else {
            i++;
            j = i;
            product = 1;
        }
        if(j === n) {
            i++;
            j = i;
            product = 1;
        }       
    }
    return count;
};
*/

/*
i    = 0   1  2  3
nums = 10, 5, 2, 6

i = 0, j=0, 10 -> prod = 10, count = 1
i = 0, j=1,  5 -> prod = 50, count = 2
i = 0, j=2,  2 -> prod = 100, count = 2
i = 1, j=1, 5 -> prod = 5, count = 3
i = 1, j=2, 2 -> prod = 10, count = 4
i = 1, j=3, 6 -> prod = 60, count = 5
i = 2, j=2, 2 -> prod = 2, count = 6
i = 2, j=3, 6 -> prod = 12, count = 7
i = 3, j=3, 6 -> prod = 6, count = 8

*/
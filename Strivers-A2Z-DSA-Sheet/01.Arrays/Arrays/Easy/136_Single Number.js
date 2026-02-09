// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


// Optimal Approach(Using XOR): 
// Intuition:
// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. 
// Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the 
// XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

// So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

// Approach:
// We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.


/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let xor = 0;
    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};

/*
// Using extra space O(n) 
var singleNumber = function(nums) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for(let [num, count] of map) {
        if(count === 1) return num;
    }
};
*/
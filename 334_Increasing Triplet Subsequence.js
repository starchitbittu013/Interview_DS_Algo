// 334. Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// For ith element, Iterate over the array and find if nums[i]

const increasingTriplet = function(nums){
    console.log(`nums: ${nums}`);
    const n = nums.length;
    let num1 = Infinity;
    let num2 = Infinity;

    if (num1 > 1) {
        console.log('k')
    } else {
        console.log('kj')
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] <= num1) {
            num1 = nums[i];
        } else if (nums[i] <= num2) {
            num2 = nums[i];
        } else {
            return true;
        }
    }
    return false;
};

// nums[1,2,3,5] ==> i = 0,  -> num1 = 1, num2 = Infinity
// nums[1,2,3,5] ==> i = 1,  -> num1 = 1, num2 = 2
// nums[20,100,10,12,5,13] ==> i = 0,  -> num1 = 20, num2 = 1
// nums[20,100,10,12,5,13] ==> i = 1,  -> num1 = 20, num2 = 100
// nums[20,100,10,12,5,13] ==> i = 2,  -> num1 = 10, num2 = 100
// nums[20,100,10,12,5,13] ==> i = 3,  -> num1 = 10, num2 = 12
// nums[20,100,10,12,5,13] ==> i = 4,  -> num1 = 5, num2 = 12
// nums[20,100,10,12,5,13] ==> i = 5,  -> num1 = 5, num2 = 12

// console.log(increasingTriplet([1,2,3,4,5]));
// console.log(increasingTriplet([5,4,3,2,1]));
// console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([20,100,10,12,5,13]));
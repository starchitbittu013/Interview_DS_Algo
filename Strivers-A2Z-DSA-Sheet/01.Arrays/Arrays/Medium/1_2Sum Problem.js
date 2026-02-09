// Two Sum : Check if a pair with given sum exists in Array

// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (map.has(target - num)) {
            return [map.get(target - num), i];
        }
        
        map.set(num, i);
    }
    
    return [];
};
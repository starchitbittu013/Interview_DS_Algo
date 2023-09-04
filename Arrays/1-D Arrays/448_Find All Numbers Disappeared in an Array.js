// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let result = [];

    for(let i = 0; i < n; i++) {        
        const index = Math.abs(nums[i]) - 1;            
        nums[index] = Math.abs(nums[index]) * -1; 
    }    

    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
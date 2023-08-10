// 81. Search in Rotated Sorted Array II

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

 

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let n = nums.length;

    let pivot = findPivot(nums, 0, n - 1);

    console.log(pivot);
  
    if(binarySearch(nums, 0, pivot - 1, target)) return true;

    if(binarySearch(nums, pivot, n - 1, target)) return true;
    
    return false;
};

function findPivot(nums, left, right) {
    while(left < right) {    
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] <= nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}

function binarySearch(nums, left , right, target) {
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return true;

        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

console.log(search([2,5,6,0,0,1,2], 0));
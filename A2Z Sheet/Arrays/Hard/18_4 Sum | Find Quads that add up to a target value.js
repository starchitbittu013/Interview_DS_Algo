// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length;
    let result = [];

    nums.sort((a, b) => a - b); // Sorting helps skip duplicates

    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i

        for(let j = i + 1; j < n; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for j

            let k = j + 1, l = n - 1;

            while(k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if(sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);

                    // skip the duplicates for k and l
                    while (k < l && nums[k] === nums[k + 1]) k++;
                    while (k < l && nums[l] === nums[l - 1]) l--;
                    
                    k++;
                    l--;
                } else if (sum < target) {
                    k++; // Increase sum
                } else {
                    l--; // Decrease sum
                }
            }
        }
    }
    return result; 
};

// TC: O(n^3)
// SC: O(n) // For result
// Subset Sum : Sum of all Subsets

// Problem Statement: Given an array print all the sum of the subset generated from it, in the increasing order.

// Examples:

// Example 1:

// Input: N = 3, arr[] = {5,2,1}

// Output: 0,1,2,3,5,6,7,8

// Explanation: We have to find all the subset’s sum and print them.in this case the generated subsets are [ [], [1], [2], [2,1], [5], [5,1], [5,2]. [5,2,1],so the sums we get will be  0,1,2,3,5,6,7,8


// Input: N=3,arr[]= {3,1,2}

// Output: 0,1,2,3,3,4,5,6

// Explanation: We have to find all the subset’s sum and print them.in this case the generated subsets are [ [], [1], [2], [2,1], [3], [3,1], [3,2]. [3,2,1],so the sums we get will be  0,1,2,3,3,4,5,6


/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    subsetSums(arr) {
        // code here
        let result = [];
        
        this.solve(0, 0, arr, result);
        return result;
    }
    
    solve(index, currentSum, arr, result) {
        let length = arr.length;
        
        if(index === length) {
            result.push(currentSum);
            return;
        }
        
        // pick current
        this.solve(index + 1, currentSum + arr[index], arr, result);
        
        // don't pick current
        this.solve(index + 1, currentSum, arr, result);
    }
}

// 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);  // Sort to bring duplicates together

    function backtrack(index, currentSubset) {
        if (index === nums.length) {
            result.push([...currentSubset]);
            return;
        }

        // Include the current element
        currentSubset.push(nums[index]);
        backtrack(index + 1, currentSubset);
        currentSubset.pop();

        // Skip duplicates when not including
        let nextIndex = index + 1;
        while (nextIndex < nums.length && nums[nextIndex] === nums[index]) {
            nextIndex++;
        }

        // Exclude the current element and all duplicates
        backtrack(nextIndex, currentSubset);
    }

    backtrack(0, []);
    return result;
};

// Time Complexity: O(2^n) for generating every subset and O(k)  to insert every subset in another data structure if the average length of every subset is k. Overall O(k * 2^n).

// Space Complexity: O(2^n * k) to store every subset of average length k. Auxiliary space is O(n)  if n is the depth of the recursion tree.


// ✅ Why include duplicates when picking?
// Because valid subsets like [2,2] or [1,2,2] do require us to pick the same number more than once.

// So, when picking elements, we never skip.
// This ensures we don’t miss valid combinations.

// ❌ Why skip duplicates when not picking?
// When we choose to skip a number, we want to skip all of its duplicates in a row.
// Otherwise, we’ll generate the same subset multiple times.

// Example:
// Input: [1, 2, 2]

// Recursive path if we don't skip duplicates when excluding:

// scss
// Copy
// Edit
// []         ← skip 1st 2
// []         ← skip 2nd 2 (duplicate subset!)
// So, to avoid that:

// js
// Copy
// Edit
// let nextIndex = index + 1;
// while (nextIndex < nums.length && nums[nextIndex] === nums[index]) {
//     nextIndex++;
// }
// backtrack(nextIndex, currentSubset);
// This skips all identical values so that we don't end up with the same subset (e.g. multiple [], [1], or [2]).


// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [4,5,2,1], queries = [3,10,21]
// Output: [2,3,4]
// Explanation: We answer the queries as follows:
// - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
// - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
// - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.


/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

 // Brute Force
// var answerQueries = function(nums, queries) {
//     nums.sort((a, b) => (a - b));
//     let ans = [];


//     for(let i = 0; i < queries.length; i++) {
//         let sum = 0;
//         let size = 0;
//         for(let j = 0; j < nums.length; j++) {
//             if(sum + nums[j] <= queries[i]) {
//                 sum += nums[j];
//                 size++;
//             }
//         }
//         ans[i] = size;
//     }
//     return ans;
// };

// TC: O(n log n) + O(m * n)
// SC: O(1)

var answerQueries = function(nums, queries) {
    nums.sort((a, b) => (a - b));
    let ans = [];
    let prefixSum = [];
    prefixSum[0] = nums[0];

    for(let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]; 
    }

    for(let i = 0 ; i < queries.length; i++) {
        ans[i] = binarySearch(queries[i]);
    }

    function binarySearch(target) {
        let result = -1;
        let left = 0, right = prefixSum.length - 1;

        while(left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            if(prefixSum[mid] <= target) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result + 1;
    }
    return ans;
};

// TC: O(n log n) + O(m * logn)
// SC: O(n)
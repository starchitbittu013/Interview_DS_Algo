// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalSum = 0;

    for(let i = 1; i <= nums.length; i++) {
        totalSum += i;
    }

    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return totalSum - sum;
};

// var missingNumber = function(nums) {
//     let n = nums.length;
//     let totalSum = (n * (n + 1)) / 2;

//     let sum = 0;

//     for(let i = 0; i < n; i++) {
//         sum += nums[i];
//     }

//     return totalSum - sum;
// };

function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i]; // XOR of array elements
      xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }
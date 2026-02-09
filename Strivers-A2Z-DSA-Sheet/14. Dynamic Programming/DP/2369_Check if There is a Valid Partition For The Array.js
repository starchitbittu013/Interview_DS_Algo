// 2369. Check if There is a Valid Partition For The Array

// You are given a 0-indexed integer array nums. You have to partition the array into one or more contiguous subarrays.

// We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

// The subarray consists of exactly 2 equal elements. For example, the subarray [2,2] is good.
// The subarray consists of exactly 3 equal elements. For example, the subarray [4,4,4] is good.
// The subarray consists of exactly 3 consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray [3,4,5] is good, but the subarray [1,3,5] is not.
// Return true if the array has at least one valid partition. Otherwise, return false.

 

// Example 1:

// Input: nums = [4,4,4,5,6]
// Output: true
// Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
// This partition is valid, so we return true.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    return solve(nums, 0);    
};

function solve(nums, index) {
    let n = nums.length;
    let result = false;
    if(index >= n) return true;

    // Rule 1: Exactly 2 Equal Elements
    if(nums[index] === nums[index + 1] && index + 1 < n) {
        result = solve(nums, index + 2);
        if(result === true) return true;
    }

        // Rule 2: Exactly 3 Equal Elements
    if(nums[index] === nums[index + 1] 
        && nums[index + 1] === nums[index + 2]
        && index + 2 < n) {
        result = solve(nums, index + 3);
        if(result === true) return true;
    }

        // Rule 3: Exactly 3 consecutive increasing elements
    if(nums[index + 1] - nums[index] === 1 
        && nums[index + 2] - nums[index + 1] === 1
        && index + 2 < n) {
        result = solve(nums, index + 3);
        if(result === true) return true;
    } 

    return result;
}

console.log(validPartition([4,4,4,5,6]));


// Via DP...
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartitionDP = function(nums) {
    let dp = Array(nums.length).fill(-1);
    function helper(nums, i) {
        if (i === nums.length) return true;
        if (dp[i] !== -1) {
            return dp[i];
        }
        if (i + 1 < nums.length && nums[i] == nums[i + 1]) {
            if (helper(nums, i + 2)) {
                dp[i] = true;
                return true;
            }
        }
        if (i + 2 < nums.length && nums[i + 2] == nums[i] && nums[i+1]==nums[i]) {
            if (helper(nums, i + 3)) {
                dp[i] = true;
                return true;
            }
        }

        if (nums[i + 1] == nums[i] + 1 && nums[i + 2] == nums[i] + 2) {
            if (helper(nums, i + 3)) {
                dp[i] = true;
                return true;
            }
        }
        return dp[i] = false;
    }
    return helper(nums, 0)
};

console.log(validPartitionDP([4,4,4,5,6]));


const validPartitionDP1 = (a) => {
    let n = a.length, dp = Array(n + 1).fill(false); // dp[i]: till i, if the array can be partition
    dp[0] = true;
    for (let i = 2; i <= n; i++) {
	    // check dp[i-2] = true dp[i-3] = true for previous array can be partion
        if (dp[i - 2] && a[i - 2] == a[i - 1]) dp[i] = true; // condition 1
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] == a[i - 2] && a[i - 2] == a[i - 3]) dp[i] = true; // condition 2
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] - a[i - 2] == 1 && a[i - 2] - a[i - 3] == 1) dp[i] = true; // condition 3
    }
    return dp[n];
};
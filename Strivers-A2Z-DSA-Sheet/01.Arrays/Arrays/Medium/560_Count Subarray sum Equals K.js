// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Brute force
var subarraySum = function(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];

            if(sum === k) {
                count++;
            }
        }
    }
    return count;
};



// Using a Prefix Sum Map maintaining the count of subarrays

const subarraySum = function(nums, k) {
    let count = 0;
    let prefixSumMap = new Map();
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if(sum === k) {
            count++;
        }

        // If there exists a subarray with sum k ending at current index,
        // then sum - k would exists in Map

        let rem = sum - k;

        count += (prefixSumMap.get(rem) || 0);
        
        prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
        
    }
    return count;
};


// Example 1
// nums = [1, 2, 3], k = 3
// Step-by-step Execution
// Index	nums[i]	Running Sum (sum)	sum - k	prefixSumMap (Before)	Count Updates	prefixSumMap (After)
// 0	        1	    1	            -2	        {}	                    0	            {1: 1}
// 1	        2	    3	            0	        {1: 1}	            +1 (sum == k)	    {1: 1, 3: 1}
// 2	        3	    6	            3	        {1: 1, 3: 1}	    +1 (sum - k = 3)	{1: 1, 3: 1, 6: 1}
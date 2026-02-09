// 1283. Find the Smallest Divisor Given a Threshold

// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// The test cases are generated so that there will be an answer.

 

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44

// If n > threshold: If the minimum summation i.e. n > threshold value, the answer does not exist. In this case, we will return -1.
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let min = 1;
    let max = -Infinity;
    let n = nums.length;
    if(n > threshold) return -1; // In case there is no divisor

    for(let i = 0; i < n; i++) {        
        max = Math.max(max, nums[i]);
    }
    
    function divisorSum(div) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Math.ceil(nums[i]/ div);
        }
        return sum;
    }

    while(min <= max) {
        let mid = Math.floor((min + max) / 2);

        if(divisorSum(mid) <= threshold) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
};
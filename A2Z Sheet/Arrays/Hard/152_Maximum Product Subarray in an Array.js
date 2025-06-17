// Maximum Product Subarray in an Array


// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.


// Algorithm: 
// We will first declare 2 variables i.e. ‘pre’(stores the product of the prefix subarray) and ‘suff’(stores the product of the suffix subarray). They both will be initialized with 1(as we want to store the product).
// Now, we will use a loop(say i) that will run from 0 to n-1.
// We have to check 2 cases to handle the presence of 0:
// If pre = 0: This means the previous element was 0. So, we will consider the current element as a part of the new subarray. So, we will set ‘pre’ to 1.
// If suff = 0: This means the previous element was 0 in the suffix. So, we will consider the current element as a part of the new suffix subarray. So, we will set ‘suff’ to 1.
// Next, we will multiply the elements from the starting index with ‘pre’ and the elements from the end with ‘suff’. To incorporate both cases inside a single loop, we will do the following:
// We will multiply arr[i] with ‘pre’ i.e. pre *= arr[i].
// We will multiply arr[n-i-1] with ‘suff’ i.e. suff *= arr[n-i-1].
// After each iteration, we will consider the maximum among the previous answer, ‘pre’ and ‘suff’ i.e. max(previous_answer, pre, suff).
// Finally, we will return the maximum product.


function maxProductSubArray(arr) {
    let n = arr.length; // size of array.

    let pre = 1, suff = 1;
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (pre === 0) pre = 1;
        if (suff === 0) suff = 1;
        pre *= arr[i];
        suff *= arr[n - i - 1];
        ans = Math.max(ans, Math.max(pre, suff));
    }
    return ans;
}


function maxProductSubArray(nums) {
    let prod1 = nums[0], prod2 = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod1 = temp;

        result = Math.max(result, prod1);
    }

    return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));
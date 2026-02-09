/*
QUESTION:
Given an integer array nums, find a subarray that has the largest product, and return the product.

Example:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/

function maxProduct(nums) {
    let ans = -Infinity;
    let prdct = 1;

    // Iterate from left to right
    for (let i = 0; i < nums.length; i++) {
        prdct = prdct * nums[i];
        ans = Math.max(ans, prdct);
        if (prdct === 0)
            prdct = 1;
    }

    prdct = 1;

    // Iterate from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
        prdct = prdct * nums[i];
        ans = Math.max(ans, prdct);
        if (prdct === 0)
            prdct = 1;
    }

    return ans;
}

/*
TIME COMPLEXITY: O(N), where N is the size of the input array.
SPACE COMPLEXITY: O(1).
*/

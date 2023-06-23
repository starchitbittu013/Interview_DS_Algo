// Given an integer array nums, return an array answer such that answer[i] is equal to the product 
// of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = function(nums) {
    const n = nums.length;
    let leftProduct = [];
    let rightProduct = [];
    let ans = [];

    leftProduct[0] = 1;
    rightProduct[n-1] = 1;

    // Find Left Product from the ith position 
    // Input: [1,2,3,4], LeftProduct = [1, 1, 2, 6]

    for(i = 1; i < n; i++) {
        leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
    }
    console.log(`leftProduct: ${leftProduct}`);

    // Find right Product from the ith position 
    // Input: [1,2,3,4], LeftProduct = [24, 12, 4, 1]

    for(i = n - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
    }
    console.log(`rightProduct: ${rightProduct}`);

    // Finally, multiply these product to get the ans[]

    for(i = 0; i < n; i++){
        ans[i] = leftProduct[i] * rightProduct[i];
    }

    return ans;
}

console.log(productExceptSelf([1,2,3,4]));


// Time Complexity = O(n)
// Space Complexity = O(n)

/*
const productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n); // Reusing the ans array

    ans[0] = 1;

    // Calculate the left product and store it in the ans array
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;

    // Calculate the right product, multiply it with the left product from the ans array, 
    // and store the final result in the ans array
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return ans;
};
// Space Complexity O(1)
*/

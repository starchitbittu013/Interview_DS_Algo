/*
QUESTION:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

/*
APPROACH:
To find all triplets that sum up to zero, we can follow these steps:
1. Sort the input array in non-decreasing order.
2. Iterate through the array and fix the first element as nums[k] (where k = 0 to n-1).
3. Use two pointers (i and j) to find the other two elements such that nums[i] + nums[j] = -nums[k].
4. Move the pointers accordingly to find all possible triplets.
5. Skip duplicate elements to avoid duplicate triplets.
6. Return the resulting triplets.
*/

function threeSum(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);

    for (let k = 0; k < nums.length; k++) {
        let i = k + 1;
        let j = nums.length - 1;
        const target = -nums[k];

        while (i < j) {
            const sum = nums[i] + nums[j];

            if (sum === target) {
                ans.push([nums[k], nums[i], nums[j]]);
                i++;
                j--;

                // Skip duplicate elements
                while (i < j && nums[i] === nums[i - 1]) i++;
                while (i < j && nums[j] === nums[j + 1]) j--;
            }
            else if (sum < target) {
                i++;
            }
            else {
                j--;
            }
        }

        // Skip duplicate elements
        while (k + 1 < nums.length && nums[k + 1] === nums[k]) k++;
    }

    return ans;
}

/*
TIME COMPLEXITY: O(n^2), where n is the size of the input array.
SPACE COMPLEXITY: O(1), as we are using a constant amount of extra space for storing the output and variables.
*/

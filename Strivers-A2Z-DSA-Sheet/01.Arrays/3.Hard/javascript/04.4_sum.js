/*
QUESTION:
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target

Example:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

function fourSum(nums, target) {
    const ans = [];
    nums.sort((a, b) => a - b);

    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            let c = b + 1;
            let d = nums.length - 1;
            const tar = target - (nums[a] + nums[b]);

            while (c < d) {
                const sum = nums[c] + nums[d];

                if (sum === tar) {
                    ans.push([nums[a], nums[b], nums[c], nums[d]]);
                    c++;
                    d--;

                    // Skip duplicate elements
                    while (c < d && nums[c] === nums[c - 1]) c++;
                    while (c < d && nums[d] === nums[d + 1]) d--;
                }
                else if (sum > tar) {
                    d--;
                }
                else {
                    c++;
                }
            }

            // Skip duplicate elements
            while (b + 1 < nums.length && nums[b + 1] === nums[b]) b++;
        }

        // Skip duplicate elements
        while (a + 1 < nums.length && nums[a + 1] === nums[a]) a++;
    }

    return ans;
}

/*
TIME COMPLEXITY: O(n^3), where n is the size of the input array nums.
SPACE COMPLEXITY: O(1), as we are using a constant amount of extra space.
*/

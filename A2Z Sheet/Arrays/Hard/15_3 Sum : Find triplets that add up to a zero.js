// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


// Brute Force Approach

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let set = new Set();
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]];
                    triplet.sort((a, b) => (a - b));
                    
                    let key = JSON.stringify(triplet);
                    if(!set.has(key)) {
                        set.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }
    return result;
};

// Better Approach

function triplet(n, arr) {
    let ans = [];
    let set = new Set();

    for (let i = 0; i < n; i++) {
        let hashset = new Set();
        for (let j = i + 1; j < n; j++) {
            let third = -(arr[i] + arr[j]);

            if (hashset.has(third)) {
                let triplet = [arr[i], arr[j], third].sort((a, b) => a - b);
                let key = JSON.stringify(triplet);
                
                if (!set.has(key)) {
                    set.add(key);
                    ans.push(triplet);
                }
            }
            hashset.add(arr[j]);
        }
    }
    return ans;
}

// Two Pointer Approach 
var threeSum = function(nums) {
    let n = nums.length;
    let result = [];

    nums.sort((a, b) => a - b); // Sorting helps skip duplicates

    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i

        let j = i + 1, k = n - 1;

        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                // skip the duplicates for j and k
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++; // Increase sum
            } else {
                k--; // Decrease sum
            }
        }
    }
    return result;
};

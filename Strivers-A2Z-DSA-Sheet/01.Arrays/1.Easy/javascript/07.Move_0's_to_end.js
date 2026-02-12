/*
QUESTION:-
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

/*
APPROACH:-
-> The idea is while traversing the array if we found any zero then we have to swap it with next non-zero
*/

// CODE:-

class Solution {
    // Function to move zeroes to the end
    moveZeroes(nums) {
        // Pointer to the first zero
        let j = -1;

        // Find the first zero
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                j = i;
                break;
            }
        }

        // If no zero found, return
        if (j === -1) return;

        // Start from the next index of first zero
        for (let i = j + 1; i < nums.length; i++) {
            // If current element is non-zero
            if (nums[i] !== 0) {
                // Swap with nums[j]
                [nums[i], nums[j]] = [nums[j], nums[i]];
                // Move j to next zero
                j++;
            }
        }
    }
}

// Driver code
const sol = new Solution();
let nums = [0, 1, 0, 3, 12];
sol.moveZeroes(nums);

// Print the result
console.log(nums.join(" "));


// TIME COMPLEXITY = O(N) (as we moving j throught the array only once)
// SPACE COMPLEXITY = O(1)


/*

🧠 Move Zeroes to End — Approaches Explained
✅ 1. Brute Force Approach (Using Extra Array)
💡 Idea

Traverse array

Store all non-zero elements in a temporary array

Copy them back

Fill remaining positions with zeros

⚙️ Steps

Create temp list

Push all non-zeros

Rewrite original array

Add zeros at end

⏱ Complexity

Time → O(N)

Space → O(N) (extra memory)

👍 Pros

Very easy to understand

Good for beginners

👎 Cons

Not in-place

Uses extra space (interviewers usually don’t like this)

✅ 2. Better Approach (Two Pass In-Place with Zero Position)
💡 Idea

First find index of first zero

Then swap next non-zero with zero position

Move zero pointer forward

⚙️ Logic

Find first zero index j

Loop i = j+1 → n

If nums[i] !== 0

swap(nums[i], nums[j])

increment j

⏱ Complexity

Time → O(N)

Space → O(1)

👍 Pros

In-place

Simple swapping logic

Easy interview explanation

✅ 3. Optimal Approach (Two Pointer Compression Method)

👉 This is the most preferred interview solution

💡 Idea

Maintain k = position to place next non-zero

Move all non-zeros to front

Fill rest with zeros

⚙️ Steps

Traverse array

If non-zero → place at nums[k++]

After loop → fill zeros from k to end

⏱ Complexity

Time → O(N)

Space → O(1)

👍 Pros

No unnecessary swaps

Minimal operations

Cleanest logic

Industry preferred


var moveZeroes = function(nums) {
    let writeIndex = 0;

    // Step 1: move all non-zero values forward
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== 0) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    // Step 2: fill remaining positions with zeros
    while (writeIndex < nums.length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }
};
// This optimal approach minimizes unnecessary swaps and is the most efficient way to move zeroes to the end while maintaining the order of non-zero elements.
*/
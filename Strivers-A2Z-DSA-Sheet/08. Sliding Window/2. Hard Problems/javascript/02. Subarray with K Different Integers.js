/*
QUESTION:
Given an integer array 'nums' and an integer 'k', find the number of good subarrays of 'nums'.

A good array is an array where the number of different integers in that array is exactly 'k'.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

EXAMPLE:
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

APPROACH:
We can solve this problem using a sliding window approach.

1. Create a function, kDistinctIntegers, that takes 'k' and the input array 's' as parameters.
   - Initialize a Map, mp, to store the frequency of elements.
   - Initialize 'start' to 0 and 'ans' to 0.
   - Iterate over the array from left to right:
     - Increment the frequency of the current element in the map.
     - If the number of distinct elements in the map exceeds 'k', move the 'start' pointer to the right and remove elements from the map until the number of distinct elements becomes equal to 'k'.
     - Update 'ans' by adding the number of subarrays that can be formed with exactly 'k' distinct integers, which is equal to (i - start + 1).
   - Return 'ans', which represents the total number of good subarrays.

2. Create a function, subarraysWithKDistinct, that takes 'nums' and 'k' as parameters.
   - Return the difference between the number of good subarrays with 'k' distinct integers and the number of good subarrays with 'k-1' distinct integers, which can be calculated using the kDistinctIntegers function.

COMPLEXITY ANALYSIS:
- Time complexity: O(n), where n is the length of the input array 'nums'. We iterate over the array once using the sliding window approach.
- Space complexity: O(k), as the space used by the Map is proportional to the number of distinct elements, which can be at most 'k'.
*/

/**
 * @param {number} k
 * @param {number[]} s
 * @return {number}
 */
var kDistinctIntegers = function(k, s) {
    const mp = new Map();
    let start = 0, ans = 0;

    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);

        while (mp.size > k) {
            mp.set(s[start], mp.get(s[start]) - 1);

            if (mp.get(s[start]) === 0)
                mp.delete(s[start]);

            start++;
        }

        ans += i - start + 1;
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return kDistinctIntegers(k, nums) - kDistinctIntegers(k - 1, nums);
};


/*
===================================================================================
QUESTION: Subarrays with K Different Integers (LeetCode 992)
===================================================================================

Given an integer array nums and an integer k, return the number of good subarrays of nums.
A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays with exactly 2 different integers:
[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

Example 2:
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays with exactly 3 different integers:
[1,2,1,3], [2,1,3], [1,3,4]

Constraints:
- 1 <= nums.length <= 2 * 10^4
- 1 <= nums[i], k <= nums.length


*/

/*
===================================================================================
BRUTE FORCE APPROACH
===================================================================================

APPROACH EXPLANATION:
- We generate all possible subarrays using two nested loops.
- For each subarray, we count the number of distinct integers using a hash map.
- For every starting index i, we iterate through all ending indices j.
- At each step, we add the current element to our hash map.
- If the number of distinct integers (hash map size) equals exactly k, we
  increment our count.
- If it exceeds k, we can break since extending further won't give us exactly k.
- This approach checks every possible subarray, making it inefficient for large inputs.

TIME COMPLEXITY: O(n^2) - Two nested loops to generate all subarrays.
SPACE COMPLEXITY: O(n) - Hash map can store up to n distinct elements.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysWithKDistinctBrute(nums, k) {
    const n = nums.length;
    let count = 0;

    // Iterate over all possible starting indices
    for (let i = 0; i < n; i++) {
        // Hash map to track distinct integers in current subarray
        const freq = new Map();

        // Iterate over all possible ending indices
        for (let j = i; j < n; j++) {
            // Add current element to map
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);

            // If exactly k distinct integers, count this subarray
            if (freq.size === k) {
                count++;
            } else if (freq.size > k) {
                // More than k distinct, no point extending further
                break;
            }
        }
    }

    return count;
}

/*
===================================================================================
OPTIMAL APPROACH (Using the formula: exactly(k) = atMost(k) - atMost(k-1))
===================================================================================

APPROACH EXPLANATION:
- Directly counting subarrays with exactly k distinct integers is tricky with
  sliding window because when we have more than k, we don't know how many
  subarrays to count.
- Key Insight: We use the formula:
  count(exactly k) = count(at most k) - count(at most k-1)

- Why this works:
  - count(at most k) includes subarrays with 1, 2, 3, ..., k distinct integers.
  - count(at most k-1) includes subarrays with 1, 2, 3, ..., k-1 distinct integers.
  - Subtracting gives us only subarrays with exactly k distinct integers.

- Helper function countAtMostK(nums, k):
  - Uses sliding window with two pointers: left (l) and right (r).
  - Maintains a hash map to track frequency of elements in current window.
  - When distinct count exceeds k, shrink window from left.
  - For each valid window ending at r, all subarrays starting from l to r
    and ending at r are valid. Count = (r - l + 1).
  - Sum up counts for all positions of r.

- Main function:
  - Return countAtMostK(nums, k) - countAtMostK(nums, k-1)

TIME COMPLEXITY: O(n) - Each element is visited at most twice by each pointer.
SPACE COMPLEXITY: O(n) - Hash map can store up to n distinct elements.
*/

/**
 * Helper function to count subarrays with at most k distinct integers
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countAtMostK(nums, k) {
    const n = nums.length;

    // Edge case: if k is 0, no valid subarrays
    if (k === 0) return 0;

    let count = 0;
    let l = 0;
    const freq = new Map();

    for (let r = 0; r < n; r++) {
        // Add current element to the window
        freq.set(nums[r], (freq.get(nums[r]) || 0) + 1);

        // Shrink window while we have more than k distinct elements
        while (freq.size > k) {
            // Decrement frequency of leftmost element
            freq.set(nums[l], freq.get(nums[l]) - 1);

            // If frequency becomes 0, remove from map
            if (freq.get(nums[l]) === 0) {
                freq.delete(nums[l]);
            }

            // Move left pointer
            l++;
        }

        // All subarrays ending at r with starting index from l to r are valid
        // Number of such subarrays = (r - l + 1)
        count += (r - l + 1);
    }

    return count;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysWithKDistinct(nums, k) {
    // exactly(k) = atMost(k) - atMost(k-1)
    return countAtMostK(nums, k) - countAtMostK(nums, k - 1);
}

/*
===================================================================================
EXAMPLE WALKTHROUGH:

For nums = [1, 2, 1, 2, 3], k = 2:

Step 1: Calculate countAtMostK(nums, 2)
-----------------------------------------
l=0, count=0, freq={}

r=0: freq={1:1}, size=1<=2, count += 1, count=1
     Subarrays: [1]

r=1: freq={1:1, 2:1}, size=2<=2, count += 2, count=3
     Subarrays: [1,2], [2]

r=2: freq={1:2, 2:1}, size=2<=2, count += 3, count=6
     Subarrays: [1,2,1], [2,1], [1]

r=3: freq={1:2, 2:2}, size=2<=2, count += 4, count=10
     Subarrays: [1,2,1,2], [2,1,2], [1,2], [2]

r=4: freq={1:2, 2:2, 3:1}, size=3>2
     Shrink: remove nums[0]=1, freq={1:1, 2:2, 3:1}, l=1, size=3>2
     Shrink: remove nums[1]=2, freq={1:1, 2:1, 3:1}, l=2, size=3>2
     Shrink: remove nums[2]=1, freq={2:1, 3:1}, l=3, size=2<=2
     count += 2, count=12
     Subarrays: [2,3], [3]

countAtMostK(nums, 2) = 12

Step 2: Calculate countAtMostK(nums, 1)
-----------------------------------------
l=0, count=0, freq={}

r=0: freq={1:1}, size=1<=1, count += 1, count=1
r=1: freq={1:1, 2:1}, size=2>1
     Shrink: remove 1, freq={2:1}, l=1
     count += 1, count=2
r=2: freq={2:1, 1:1}, size=2>1
     Shrink: remove 2, freq={1:1}, l=2
     count += 1, count=3
r=3: freq={1:1, 2:1}, size=2>1
     Shrink: remove 1, freq={2:1}, l=3
     count += 1, count=4
r=4: freq={2:1, 3:1}, size=2>1
     Shrink: remove 2, freq={3:1}, l=4
     count += 1, count=5

countAtMostK(nums, 1) = 5

Step 3: Result = 12 - 5 = 7

The 7 subarrays with exactly 2 distinct integers are:
[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
===================================================================================
*/



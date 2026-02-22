/*
QUESTION:
Given an array of integers nums and a positive integer k, check whether it is possible to
divide this array into sets of k consecutive numbers.

Return true if it is possible. Otherwise, return false.

Example:
Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

APPROACH:
1. First, we check if the array size is divisible by k. If not, it is not possible to
   divide the array into sets of k consecutive numbers.
2. We use a frequency map mp to count the occurrences of each element in the array.
3. We sort the array nums in ascending order.
4. For each number num in nums, we check if it is still available (mp[num] > 0).
5. If num is available, we iterate from num + 1 to num + k - 1 and check if each number
   is available in mp as well. If any number is not available, we return false.
6. If all numbers are available, we decrement the counts in mp accordingly.
7. If we reach the end of the loop, it means it is possible to divide the array into
   sets of k consecutive numbers, and we return true.

COMPLEXITY ANALYSIS:
- Time complexity: O(n log n), where n is the size of the input array nums.
  The complexity is dominated by the sorting step.
- Space complexity: O(n), to store the frequency map.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function isPossibleDivide(nums, k) {
    if (nums.length % k !== 0) {
        return false;
    }

    const mp = new Map();

    // Count frequency of each number
    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    // Sort the array
    nums.sort((a, b) => a - b);

    for (const num of nums) {
        if (mp.get(num) > 0) {
            // Try to form a group starting from num
            for (let i = num + 1; i < num + k; i++) {
                if (!mp.has(i) || mp.get(i) === 0) {
                    return false;
                }
                mp.set(i, mp.get(i) - 1);
            }
            mp.set(num, mp.get(num) - 1);
        }
    }

    return true;
}

// Example usage:
// console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4)); // Output: true
// console.log(isPossibleDivide([3,2,1,2,3,4,3,4,5,9,10,11], 3)); // Output: true
// console.log(isPossibleDivide([1,2,3,4], 3)); // Output: false


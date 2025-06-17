// 216. Combination Sum III

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 

// Constraints:

// 2 <= k <= 9
// 1 <= n <= 60


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    function backtrack(start, currentSum, currentCombo) {
        if(currentCombo.length === k && currentSum === n) {
            result.push([...currentCombo]);
            return;
        }

        if(currentSum > n || currentCombo.length > k) return;

        if (start > 9) return;

        currentCombo.push(start);
        backtrack(start + 1, currentSum + start, currentCombo);
        currentCombo.pop();

        backtrack(start + 1, currentSum, currentCombo);
    }

    backtrack(1, 0, []);

    return result;
};


// ✅ Approach
// We need to generate all combinations of size k from numbers 1 to 9 such that their sum is n.

// Key Points:

// Use backtracking to explore combinations.

// Only consider numbers from 1 to 9.

// Each number can be used at most once.

// Prune the recursion if the current sum exceeds n or the combination exceeds k elements.


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    function backtrack(start, path, sum) {
        if (path.length === k && sum === n) {
            result.push([...path]);
            return;
        }

        if (path.length > k || sum > n) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, sum + i);
            path.pop();  // backtrack
        }
    }

    backtrack(1, [], 0);
    return result;
};


// | Complexity Type  | Big-O Notation         |
// | ---------------- | ---------------------- |
// | Time Complexity  | **O(2ⁿ × k)**          |
// | Space Complexity | **O(2ⁿ × k)** (output) |

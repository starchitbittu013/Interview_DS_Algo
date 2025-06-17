// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];

    function findCombinations(index, currentSum, currentCombination) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }

        if (currentSum > target || index >= candidates.length) return;

        // Include current candidate
        currentCombination.push(candidates[index]);
        findCombinations(index + 1, currentSum + candidates[index], currentCombination);
        currentCombination.pop();

        // Skip all duplicates of current candidate
        let nextIndex = index + 1;
        while (nextIndex < candidates.length && candidates[nextIndex] === candidates[index]) {
            nextIndex++;
        }

        // Exclude current candidate (and its duplicates)
        findCombinations(nextIndex, currentSum, currentCombination);
    }

    findCombinations(0, 0, []);
    return result;
};



var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // Step 1: Sort for duplicate handling
    let result = [];

    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Step 2: Skip duplicates at the same tree level
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (candidates[i] > remaining) break; // Early pruning

            path.push(candidates[i]);
            backtrack(i + 1, remaining - candidates[i], path); // Step 3: move to i + 1
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};


// Time Complexity:O(2^n*k)

// Reason: Assume if all the elements in the array are unique then the no. of subsequence you will get will be O(2^n). we also add the ds to our ans when we reach the base case that will take “k”//average space for the ds.

// Space Complexity:O(k*x)

// Reason: if we have x combinations then space will be x*k where k is the average length of the combination.
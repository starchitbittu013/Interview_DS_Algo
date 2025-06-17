// Perfect Sum Problem

// Given an array arr of non-negative integers and an integer target, the task is to count all subsets of the array whose sum is equal to the given target.

// Examples:

// Input: arr[] = [5, 2, 3, 10, 6, 8], target = 10
// Output: 3
// Explanation: The subsets {5, 2, 3}, {2, 8}, and {10} sum up to the target 10.
// Input: arr[] = [2, 5, 1, 4, 3], target = 10
// Output: 3
// Explanation: The subsets {2, 1, 4, 3}, {5, 1, 4}, and {2, 5, 3} sum up to the target 10.
// Input: arr[] = [5, 7, 8], target = 3
// Output: 0
// Explanation: There are no subsets of the array that sum up to the target 3.
// Input: arr[] = [35, 2, 8, 22], target = 0
// Output: 1
// Explanation: The empty subset is the only subset with a sum of 0.
// Constraints:
// 1 ≤ arr.size() ≤ 103
// 0 ≤ arr[i] ≤ 103
// 0 ≤ target ≤ 103

// https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
// https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x-using-recursion/


// Brute Force Approach:

// We can identify a recursive pattern in this problem. There are two state variables:

// The current index i in the array arr[].
// The cumulative sum currentSum of the subsets being considered.
// We consider two cases for recursion:

// Exclude the current element: The current element is not included in the subset, and the  sum remains unchanged. 
// This corresponds to:

// countSubsets(i + 1, currentSum, target).
// Include the current element: The current element is included in the subset, 
// and the sum is updated as currentSum + arr[i]. This corresponds to:

// countSubsets(i + 1, currentSum + arr[i], target)
// Recurrence relation:

// countSubsets(i, currentSum, target) = countSubsets(i+1, currentSum, target) + countSubsets(i+1, currentSum + arr[i], target)​
// Base Case: If i == n (all elements have been processed), return 1 if the currentSum equal to target else 0.

// A Javascript program to count the number of subsets with a
// sum equal to a target using recursion

function countSubsets(i, currentSum, target, arr) {
    const n = arr.length;

    // Base case: If we've processed all elements in the array
    if (i === n) {
    
        // Return 1 if the current subset's sum 
        // equals the target, else return 0
        return currentSum === target ? 1 : 0;
    }

    // Case 1: Exclude the current element
    const exclude = countSubsets(i + 1, currentSum, target, arr);

    // Case 2: Include the current element
    let include = 0;

    // Only include the current element if adding it 
    // does not exceed the target sum
    
    if (arr[i] + currentSum <= target) {
        include = countSubsets(i + 1, currentSum + arr[i], target, arr);
    }

    // Return the total count of subsets
    return include + exclude;
}

function perfectSum(arr, target) {

    // Start the recursion with the first element
    // and a current sum of 0
    return countSubsets(0, 0, target, arr);
}

const arr = [1, 2, 3, 3];
const target = 6;
console.log(perfectSum(arr, target));

// Time Complexity: O(2^n), where n is the size of array.
// Auxiliary Space: O(n)


// Using Top - Down Dp (memoization) - O(n*target) Time and O(n*target) Space

// If we notice carefully, we can observe that the above recursive solution holds the following two properties of Dynamic Programming:

// 1. Optimal Substructure: Maximum subsequence length for a given i, j and currentSum , i.e. countSubsets(i, currentSum, target)​, depends on the optimal solutions of the subproblems countSubsets(i+1, currentSum, target) and countSubsets(i+1, currentSum + arr[i], target)​. By choosing the total of these optimal substructures, we can efficiently calculate answer.

// 2. Overlapping Subproblems: While applying a recursive approach in this problem, we notice that certain subproblems are computed multiple times. For example while considering arr = [1, 1, 2, 3] and target = 10, countSubsets(3, 4, 10, arr) computed multiple times from countSubsets(2, 0, 10, arr) and countSubsets(2, 2, 10, arr).

// There are two parameter that change in the recursive solution: i going from 0 to n-1, currentSum going from 0 to target. So we create a 2D array of size (n+1)*(target+1) for memoization.
// We initialize array as -1 to indicate nothing is computed initially.
// Now we modify our recursive solution to first check if the value is -1, then only make recursive calls. This way, we avoid re-computations of the same subproblems.



// A Javascript program to count the number of subsets with
// a sum equal to a target using recursion and memoization
function countSubsets(i, currentSum, target, arr, memo) {
    const n = arr.length;
    
    // Base case: If we've processed all elements
    if (i === n) {
        return currentSum === target ? 1 : 0;
    }

    // Check if result is already computed
    if (memo[i][currentSum] !== -1) {
        return memo[i][currentSum];
    }

    // Case 1: Exclude the current element
    const exclude = countSubsets(i + 1, currentSum, target,
                                 arr, memo);

    // Case 2: Include the current element
    let include = 0;
    if (currentSum + arr[i] <= target) {
        include = countSubsets(i + 1, currentSum + arr[i],
                               target, arr, memo);
    }

    // Store result in memoization table and return it
    memo[i][currentSum] = include + exclude;
    return memo[i][currentSum];
}

function perfectSum(arr, target) {
    const n = arr.length;​
    // Initialize a 2D memoization table with -1
    const memo = Array.from(
        {length : n + 1}, () => Array(target + 1).fill(-1));

    // Start recursion
    return countSubsets(0, 0, target, arr, memo);
}​
// const arr = [ 1, 2, 3, 3 ];
// const target = 6;
// console.log(perfectSum(arr, target));


// A Javascript program to count the number of subsets with
// a sum equal to a target using space-optimized tabular DP
function perfectSum(arr, target) {

    let n = arr.length;

    // Create two 1D DP arrays: `prev` for the previous
    // state and `curr` for the current state
    let prev = new Array(target + 1).fill(0);
    let curr = new Array(target + 1).fill(0);

    // Base case: There's one way to achieve a sum
    // of 0 (by selecting no elements)
    prev[0] = 1;

    // Iterate through the elements of the array
    for (let i = 1; i <= n; i++) {

        // Start by copying the previous state
        // to the current state
        curr = [...prev ];

        // Update the current DP array for sums up to the
        // target
        for (let j = 0; j <= target; j++) {

            // If the current element can be included in the
            // subset
            if (j >= arr[i - 1]) {
                curr[j] += prev[j - arr[i - 1]];
            }
        }

        // Move to the next state by updating `prev` to
        // `curr`
        prev = [...curr ];
    }

    // Return the number of ways to achieve
    // the target sum
    return curr[target];
}

// const arr = [ 1, 2, 3, 3 ];
// const target = 6;
// console.log(perfectSum(arr, target));
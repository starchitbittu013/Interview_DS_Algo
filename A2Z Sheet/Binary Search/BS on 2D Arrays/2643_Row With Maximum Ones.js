// 2643. Row With Maximum Ones
// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

// Example 1:

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 
// Example 2:

// Input: mat = [[0,0,0],[0,1,1]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
// Example 3:

// Input: mat = [[0,0],[1,1],[0,0]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].


// Brute Force

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let max = -Infinity;
    let index = 0;
    
    for(let i = 0; i < m; i++) {
        let count = 0;
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 1) count++;
        }
        
        if(count > max) {
            max = count;
            index = i;
        }
    }
    return [index, max];
};

// TC: O(m * n)
// SC: O(1)


// Find the row with maximum number of 1's

// Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
// Your task is to find the index of the row with the maximum number of ones.
// Note: If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1.


// Example 1:
// Input Format: n = 3, m = 3, 
// mat[] = 
// 1 1 1
// 0 0 1
// 0 0 0
// Result: 0
// Explanation: The row with the maximum number of ones is 0 (0 - indexed).

// Example 2:
// Input Format: n = 2, m = 2 , 
// mat[] = 
// 0 0
// 0 0
// Result: -1
// Explanation:  The matrix does not contain any 1. So, -1 is the answer.


var rowWithMax1s = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let max = -1;
    let index = -1;

    for(let i = 0; i < m; i++) {
        let low = 0, high = n - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (mat[i][mid] === 1) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        let onesCount = n - low;
        if (onesCount > max) {
            max = onesCount;
            index = i;
        }
        
    }
    return index;
};
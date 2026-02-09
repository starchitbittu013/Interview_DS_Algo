// 2643. Row With Maximum Ones

// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

 

// Example 1:

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 


/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let row = 0, count = 0;

    for(let i = 0; i < m; i++) {
        let rowCount = 0;
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 1) {
                rowCount++;
            }

            if(rowCount > count) {
                count = rowCount;
                row = i;
            }
        }
    }
    return [row, count];
};

console.log(rowAndMaximumOnes([[0,1],[1,0]]));

// TC: O(m * n)
// SC: O(1)
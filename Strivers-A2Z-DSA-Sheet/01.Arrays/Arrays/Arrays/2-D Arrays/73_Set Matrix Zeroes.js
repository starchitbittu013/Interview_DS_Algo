// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let row = [];
    let col = [];

    for(let i = 0; i < m; i++) {
        row[i] = 1;
    }
    for(let j = 0; j < n; j++) {
        col[j] = 1;
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                row[i] = 0;
                col[j] = 0;
            }
        }
    }
    console.log(row)
    console.log(col)

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(row[i] === 0 || col[j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;    
};

// TC: O(m*n)
// SC: O(m + n)

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

// Solve in SC: O(1)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes1 = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Check if the first row and first column need to be zeroed
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Traverse the matrix (except the first row and first column) to mark rows and columns
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out rows and columns based on markers in the first row and first column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out the first row and first column if necessary
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

// TC: O(m*n)
// SC: O(m + n)

console.log(setZeroes1([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));



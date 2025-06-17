// 240. Search a 2D Matrix II
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let i = 0, j = n - 1;

    while(i < m && j >= 0) {
        if(matrix[i][j] === target) return true;

        if(matrix[i][j] > target) {
            j--;
        } else i++;
        
    }
    return false;
};

//TC : O(m+n) ~= O(n)
// SC: O(1)


// Binary Search

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let i = 0, j = n - 1;

    while(i < m && j >= 0) {
        if(matrix[i][j] === target) return true;

        if(matrix[i][j] > target) {
            j--;
        } else i++;
        
    }
    return false;
};

//TC : O(m+n) ~= O(n)
// SC: O(1)
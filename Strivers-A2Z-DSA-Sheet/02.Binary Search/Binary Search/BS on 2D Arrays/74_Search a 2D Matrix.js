// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let low = 0, high = m - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(matrix[mid][0] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if(high < 0) return false;
    let row = high;

    let left = 0, right = n;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(matrix[row][mid] === target) {
            return true;
        } else if(matrix[high][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

// TC: O(m + n)
// SC: O(1)
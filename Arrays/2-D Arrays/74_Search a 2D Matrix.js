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

    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let midValue = matrix[Math.floor(mid / n)][mid % n]; // find the value in matrix

        if(midValue === target) return true;

        if(midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));

// TC: O(m + n)
// SC: O(1)
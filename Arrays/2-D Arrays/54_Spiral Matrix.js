// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let result = [];

    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        
        for(i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;   
        }
        if (left <= right) {
            for(i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }    
    }
    return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// 1901. Find a Peak Element II

// A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

// Input: mat = [[1,4],[3,2]]
// Output: [0,1]
// Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.

// Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
// Output: [1,1]
// Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let low = 0, high = m - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let max = -1;
        let colIndex = -1;

        for(let i = 0; i < n; i++) {         
            if(max < mat[mid][i]) {
                max = mat[mid][i];
                colIndex = i;
            }
        }
        
        let left = colIndex - 1 >= 0 ? mat[mid][colIndex - 1] : -1;
        let right = colIndex + 1 <= n - 1 ? mat[mid][colIndex + 1] : -1;
        let up = mid - 1 >= 0 ? mat[mid - 1][colIndex] : -1;
        let down = mid + 1 <= m - 1 ? mat[mid + 1][colIndex] : -1;
        

        if(max > left && max > right && max > up && max > down) {
            return [mid, colIndex];
        } else if(max < up) {
            high = mid - 1;
        } else if(max < down) {
            low = mid + 1;
        }
    }
};
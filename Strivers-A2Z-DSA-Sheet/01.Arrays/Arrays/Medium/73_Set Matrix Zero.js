// Set Matrix Zero

// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

// Brute Force Approach
// Approach:
// The steps are the following:

// First, we will use two loops(nested loops) to traverse all the cells of the matrix.
// If any cell (i,j) contains the value 0, we will mark all cells in row i and column j with -1 except those which contain 0.
// We will perform step 2 for every cell containing 0.
// Finally, we will mark all the cells containing -1 with 0.
// Thus the given matrix will be modified according to the question.


  function zeroMatrix(matrix, n, m) {
    // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) {
          markRow(matrix, n, m, i);
          markCol(matrix, n, m, j);
        }
      }
    }
    // Finally, mark all -1 as 0:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }

  function markRow(matrix, n, m, i) {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function markCol(matrix, n, m, j) {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  
//   const matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];
  
//   const n = matrix.length;
//   const m = matrix[0].length;
  
//   const ans = zeroMatrix(matrix, n, m);
  
//   console.log("The Final matrix is: ");
//   for (let i = 0; i < n; i++) {
//     console.log(ans[i].join(" "));
//   }


// Better Approach

// Approach (Using two extra arrays):

// The steps are as follows:

// First, we will declare two arrays: a row array of size N and a col array of size M and both are initialized with 0.
// Then, we will use two loops(nested loops) to traverse all the cells of the matrix.
// If any cell (i,j) contains the value 0, we will mark ith index of row array i.e. row[i] and jth index of col array col[j] as 1. It signifies that all the elements in the ith row and jth column will be 0 in the final matrix.
// We will perform step 3 for every cell containing 0.
// Finally, we will again traverse the entire matrix and we will put 0 into all the cells (i, j) for which either row[i] or col[j] is marked as 1.
// Thus we will get our final matrix.


  function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0); // row array
    const col = new Array(m).fill(0); // col array

    // Traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // mark ith index of row with 1:
                row[i] = 1;

                // mark jth index of col with 1:
                col[j] = 1;
            }
        }
    }

    // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

// const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// const ans = zeroMatrix(matrix);

// console.log("The Final matrix is:");
// for (const row of ans) {
//     console.log(row.join(" "));
// }    

// Optimal Approach

function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    
 


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
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

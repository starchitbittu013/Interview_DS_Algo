// Sudoku Solver


// Given a 9x9 incomplete sudoku, solve it such that it becomes valid sudoku. Valid sudoku has the following properties.

//          1. All the rows should be filled with numbers(1 - 9) exactly once.

//          2. All the columns should be filled with numbers(1 - 9) exactly once.

//          3. Each 3x3 submatrix should be filled with numbers(1 - 9) exactly once.

// Note: Character '.' indicates empty cell.

// Example:

// Input:                               Output:


// Explanation:
//  The empty cells are filled with the possible numbers. There can exist many such arrangements of numbers. The above solution is one of them. Let’s see how we can fill the cells below.


//  Since we have to fill the empty cells with available possible numbers and we can also have multiple solutions, the main intuition is to try every possible way of filling the empty cells. And the more correct way to try all possible solutions is to use recursion. In each call to the recursive function, we just try all the possible numbers for a particular cell and transfer the updated board to the next recursive call.

// Approach:

// Let’s see the step by step approach. Our main recursive function(solve()) is going to just do a plain matrix traversal of the sudoku board. When we find an empty cell, we pause and try to put all available numbers(1 - 9) in that particular empty cell.
//  We need another loop to do that. But wait, we forgot one thing - the board has to satisfy all the conditions, right? So, for that we have another function(isValid()) which will check whether the number we have inserted into that empty cell will not violate any conditions.
//  If it is violating, we try with the next number. If it is not, we call the same function recursively, but this time with the updated state of the board. Now, as usual it tries to fill the remaining cells in the board in the same way.
// Now we'll come to the returning values. If at any point we cannot insert any numbers from 1 - 9 in a particular cell, it means the current state of the board is wrong and we need to backtrack. An important point to follow is, we need to return false to let the parent function(which is called this function) know that we cannot fill this way. This will serve as a hint to that function, that it needs to try with the next possible number. Refer to the picture below.


//  If a recursive call returns true, we can assume that we found one possible way of filling and we simply do an early return.
// Validating Board

//  Now, let's see how we are validating the sudoku board. After determining a number for a cell(at i'th row, j'th col), we try to check the validity. As we know, a valid sudoku needs to satisfy 3 conditions, we can use three loops. But we can do within a single loop itself. Let's try to understand that.
// We loop from 0 to 8 and check the values - board[i][col](1st condition) and board[row][i](2nd condition), whether the number is already included. For the 3rd condition - the expression (3 * (row / 3) + i / 3) evaluates to the row numbers of that 3x3 submatrix and the expression (3 * (col / 3) + i % 3) evaluates to the column numbers.
// For eg, if row= 5 and col= 3, the cells visited are


// #include <iostream>

// #include <vector>

// using namespace std;

// bool isValid(vector < vector < char >> & board, int row, int col, char c) {
//   for (int i = 0; i < 9; i++) {
//     if (board[i][col] == c)
//       return false;

//     if (board[row][i] == c)
//       return false;

//     if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c)
//       return false;
//   }
//   return true;
// }

// bool solveSudoku(vector < vector < char >> & board) {
//   for (int i = 0; i < board.size(); i++) {
//     for (int j = 0; j < board[0].size(); j++) {
//       if (board[i][j] == '.') {
//         for (char c = '1'; c <= '9'; c++) {
//           if (isValid(board, i, j, c)) {
//             board[i][j] = c;

//             if (solveSudoku(board))
//               return true;
//             else
//               board[i][j] = '.';
//           }
//         }

//         return false;
//       }
//     }
//   }
//   return true;
// }
// int main() {
//     vector<vector<char>>board{
//         {'9', '5', '7', '.', '1', '3', '.', '8', '4'},
//         {'4', '8', '3', '.', '5', '7', '1', '.', '6'},
//         {'.', '1', '2', '.', '4', '9', '5', '3', '7'},
//         {'1', '7', '.', '3', '.', '4', '9', '.', '2'},
//         {'5', '.', '4', '9', '7', '.', '3', '6', '.'},
//         {'3', '.', '9', '5', '.', '8', '7', '.', '1'},
//         {'8', '4', '5', '7', '9', '.', '6', '1', '3'},
//         {'.', '9', '1', '.', '3', '6', '.', '7', '5'},
//         {'7', '.', '6', '1', '8', '5', '4', '.', '9'}
//     };
   
//     solveSudoku(board);
        	
//     for(int i= 0; i< 9; i++){
//         for(int j= 0; j< 9; j++)
//             cout<<board[i][j]<<" ";
//             cout<<"\n";
//     }
//     return 0;
// }
// Output:

// 9 5 7 6 1 3 2 8 4
// 4 8 3 2 5 7 1 9 6
// 6 1 2 8 4 9 5 3 7
// 1 7 8 3 6 4 9 5 2
// 5 2 4 9 7 1 3 6 8
// 3 6 9 5 2 8 7 4 1
// 8 4 5 7 9 2 6 1 3
// 2 9 1 4 3 6 8 7 5
// 7 3 6 1 8 5 4 2 9

// Time Complexity: O(9(n ^ 2)), in the worst case, for each cell in the n2 board, we have 9 possible numbers.

// Space Complexity: O(1), since we are refilling the given board itself, there is no extra space required, so constant space complexity.
// O(n^2) due to recursive stack usage in backtracking.


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    function isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
        }

        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let i = 1; i <= 9; i++) {
                        let num = i.toString();
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false; // No valid number found, backtrack
                }
            }
        }
        return true;
    }

    solve();
}

function solveSudoku(board) {
    function isValid(board, row, col, char) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === char || board[i][col] === char) return false;
        }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === char) return false;
            }
        }

        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    // Use characters directly from '1' to '9'
                    for (let code = '1'.charCodeAt(0); code <= '9'.charCodeAt(0); code++) {
                        const char = String.fromCharCode(code);
                        if (isValid(board, row, col, char)) {
                            board[row][col] = char;
                            if (solve()) return true;
                            board[row][col] = '.'; // backtrack
                        }
                    }
                    return false; // no valid char found
                }
            }
        }
        return true;
    }

    solve();
}

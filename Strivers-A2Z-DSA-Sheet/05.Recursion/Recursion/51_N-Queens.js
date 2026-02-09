// 51. N-Queens

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]
 

// Constraints:

// 1 <= n <= 9


// ✅ Approach: Backtracking
// We place one queen per row and try all valid columns, making sure that:

// No other queen is in the same column

// No queen is on the same diagonal

// We use:

// cols set to track columns already occupied

// diag1 set to track row - col (top-left to bottom-right diagonal)

// diag2 set to track row + col (top-right to bottom-left diagonal)

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    
    const cols = new Set();     // Tracks occupied columns
    const diag1 = new Set();    // Tracks occupied top-left to bottom-right diagonals (row - col)
    const diag2 = new Set();    // Tracks occupied top-right to bottom-left diagonals (row + col)

    function backtrack(row, boardState) {
        if (row === n) {
            result.push([...boardState]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }

            const newRow = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            boardState.push(newRow);

            backtrack(row + 1, boardState);

            // Backtrack
            boardState.pop();
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0, []);
    return result;
};

// console.log(solveNQueens(4));

// [
//   [".Q..","...Q","Q...","..Q."],
//   ["..Q.","Q...","...Q",".Q.."]
// ]

// ✅ Time and Space Complexity
// Time Complexity: O(N!)
// At most N choices at first row, N-1 at second, ..., so roughly factorial time.

// Space Complexity: O(N^2) for result storage, and O(N) for sets and recursion stack.


// Let’s walk through the N-Queens problem and the provided solution in complete detail, including:

// 🔢 Problem Recap
// You’re asked to place n queens on an n x n chessboard such that no two queens attack each other.

// Queens can attack:

// Vertically (same column)

// Horizontally (same row)

// Diagonally (top-left to bottom-right and top-right to bottom-left)

// ✅ Objective
// Return all distinct board configurations where the queens are safely placed.

// Each solution is a list of strings like:


// [".Q..",  // queen in column 1
//  "...Q",  // queen in column 3
//  "Q...",  // queen in column 0
//  "..Q."]  // queen in column 2
// ✅ Strategy: Backtracking
// We place one queen per row, and for each row, we try all columns.

// At each position:

// If it’s safe, place a queen.

// Recursively move to the next row.

// After trying, backtrack by removing the queen.

// 💡 How Do We Check if a Position is Safe?
// For a given cell (row, col):

// ❌ Already occupied col? Then skip.

// ❌ Already occupied diagonal row - col (↘)? Skip.

// ❌ Already occupied diagonal row + col (↙)? Skip.

// We use 3 sets for this:

// cols: Columns already having queens

// diag1: Diagonal ↘ identified by row - col

// diag2: Diagonal ↙ identified by row + col

// ✅ JavaScript Code Explanation

// var solveNQueens = function(n) {
//     const result = [];
// We’ll store the final list of all valid solutions in result.


//     const board = Array.from({ length: n }, () => '.'.repeat(n));
// This creates a template row like '....' (for n = 4), just to reuse later.


//     const cols = new Set();   // Track columns used
//     const diag1 = new Set();  // ↘ diagonal (row - col)
//     const diag2 = new Set();  // ↙ diagonal (row + col)
// We use these sets to remember which paths are blocked.

// js
// Copy
// Edit
//     function backtrack(row, boardState) {
//         if (row === n) {
//             result.push([...boardState]);
//             return;
//         }
// When we’ve placed n queens (1 per row), we reached a solution.

// 🚶 Placing Queen in Each Column

//         for (let col = 0; col < n; col++) {
//             if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
//                 continue; // skip if unsafe
//             }
// We try all columns, and skip if the column or diagonals are blocked.

// 👑 Safe Cell - Place the Queen

//             const newRow = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
//             cols.add(col);
//             diag1.add(row - col);
//             diag2.add(row + col);
//             boardState.push(newRow);
// Add queen in current row at col

// Mark col, diag1, diag2 as occupied

// Push this row to the current board state

// 🔁 Recurse to Next Row

//             backtrack(row + 1, boardState);
// Try placing the next queen in the next row.

// 🔁 Backtrack

//             boardState.pop();         // remove current queen
//             cols.delete(col);         // free column
//             diag1.delete(row - col);  // free diagonals
//             diag2.delete(row + col);
//         }
//     }
// We undo the queen placement and try the next position (classic backtracking).

// 🔁 Start the Recursion

//     backtrack(0, []);
//     return result;
// };
// Start from the top row (row = 0) with an empty board.

// 🔢 Example Walkthrough: n = 4
// The 2 solutions look like this:


// . Q . .       . . Q .
// . . . Q       Q . . .
// Q . . .       . . . Q
// . . Q .       . Q . .
// The code finds both configurations by trying all possible combinations and backtracking when a configuration is invalid.

// 🧠 Why Is It Called Backtracking?
// Because at each step:

// You make a choice (place a queen)

// If it leads to a dead end, you go back and try a different choice

// This technique of:

// Exploring → Validating → Backing out → Trying alternate path
// is the essence of backtracking.

// 📊 Time and Space Complexity
// Time Complexity: O(N!)

// For each row, you try at most N columns, reducing by 1 each time due to constraints (similar to permutations).

// Space Complexity: O(N^2) total for:

// storing all board strings

// recursion stack depth O(N)

// sets of size O(N) each (cols, diag1, diag2)



// class Solution:
//     def isSafe1(self, row, col, board, n):
//         # check upper element
//         duprow = row
//         dupcol = col


//         while row >= 0 and col >= 0:
//             if board[row][col] == 'Q':
//                 return False
//             row -= 1
//             col -= 1


//         col = dupcol
//         row = duprow
//         while col >= 0:
//             if board[row][col] == 'Q':
//                 return False
//             col -= 1


//         row = duprow
//         col = dupcol
//         while row < n and col >= 0:
//             if board[row][col] == 'Q':
//                 return False
//             row += 1
//             col -= 1


//         return True


//     def solve(self, col, board, ans, n):
//         if col == n:
//             ans.append(list(board))
//             return


//         for row in range(n):
//             if self.isSafe1(row, col, board, n):
//                 board[row] = board[row][:col] + 'Q' + board[row][col+1:]
//                 self.solve(col+1, board, ans, n)
//                 board[row] = board[row][:col] + '.' + board[row][col+1:]


//     def solveNQueens(self, n):
//         ans = []
//         board = ['.'*n for _ in range(n)]
//         self.solve(0, board, ans, n)
//         return ans


// n = 4
// obj = Solution()
// ans = obj.solveNQueens(n)
// for i in range(len(ans)):
//     print(f"Arrangement {i+1}")
//     for j in range(len(ans[0])):
//         print(ans[i][j])
//     print()
// Output:

// Arrangement 1
// ..Q.
// Q…
// …Q
// .Q..

// Arrangement 2
// .Q..
// …Q
// Q…
// ..Q.

// Time Complexity: Exponential in nature since we are trying out all ways, to be precise its O(N! * N).

// Space Complexity: O( N2 )
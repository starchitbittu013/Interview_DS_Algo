// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        // If all characters are matched
        if (index === word.length) return true;

        // Out of bounds or mismatch
        if (
            row < 0 || col < 0 || 
            row >= rows || col >= cols || 
            board[row][col] !== word[index]
        ) {
            return false;
        }

        const temp = board[row][col];
        board[row][col] = '#';  // mark as visited

        // Explore neighbors: up, down, left, right
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);

        board[row][col] = temp; // backtrack

        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
};



// exist(
//   [["A","B","C","E"],
//    ["S","F","C","S"],
//    ["A","D","E","E"]],
//   "ABCCED"
// ); // Output: true

// 🧠 Time & Space Complexity:
// Time: O(M × N × 4^L)

// M×N is the number of cells

// L is the length of the word

// 4 recursive paths (up/down/left/right) from each cell

// Space: O(L) recursion stack depth (where L is the length of the word)


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let x = board.length;
    let y = board[0].length
    let z = word.length;
    
    for(let i = 0; i < x; i++)
    {
        for(let j = 0; j < y; j++)
        {
            if(dfs(i,j,0)) return true;//word found
        }
    }
    
    function dfs(i,j,k)
    {
         if(i >= 0 && i < x && j >= 0 && j < y && k < z && board[i][j] == word[k])
         {
            if(k == z - 1) return true;//complete word found
            
            k = k + 1; //next word
             
            let temp = board[i][j];//storing for backtraking
            board[i][j] = "";//this character should not be matched again in the currect word
             
            let found = dfs(i + 1,j,k) || dfs(i,j + 1,k) || dfs(i - 1,j,k) || dfs(i,j - 1,k);
            
            board[i][j] = temp;//backtracking
             
            return found;
         }
         return false;  
    }
    
    return false;//if match not found
    
};
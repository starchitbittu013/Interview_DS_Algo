// 62. Unique Paths
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    const memo = new Array(m + 1).fill(0);
    for(let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    return helper(m, n, 1, 1, memo);
};

const helper = (m, n, row, col, memo) => {
    if(row === m && col === n) return 1;
    if(row > m || col > n) return 0;
    
    if(memo[row][col] === -1) {
    
        const pathsRight = helper(m, n, row, col + 1, memo);
        const pathsDown = helper(m, n, row + 1, col, memo);

        memo[row][col] = pathsRight + pathsDown;
    }
    
    return memo[row][col];
};


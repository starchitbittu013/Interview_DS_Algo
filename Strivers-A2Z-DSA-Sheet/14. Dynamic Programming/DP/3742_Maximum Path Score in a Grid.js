// 3742. Maximum Path Score in a Grid

// You are given an m x n grid where each cell contains one of the values 0, 1, or 2. You are also given an integer k.

// You start from the top-left corner (0, 0) and want to reach the bottom-right corner (m - 1, n - 1) by moving only right or down.

// Each cell contributes a specific score and incurs an associated cost, according to their cell values:

// 0: adds 0 to your score and costs 0.
// 1: adds 1 to your score and costs 1.
// 2: adds 2 to your score and costs 1. ​​​​​​​
// Return the maximum score achievable without exceeding a total cost of k, or -1 if no valid path exists.

// Note: If you reach the last cell but the total cost exceeds k, the path is invalid.

 

// Example 1:

// Input: grid = [[0, 1],[2, 0]], k = 1

// Output: 2

// Explanation:​​​​​​​

// The optimal path is:

// Cell	grid[i][j]	Score	Total
// Score	Cost	Total
// Cost
// (0, 0)	0	0	0	0	0
// (1, 0)	2	2	2	1	1
// (1, 1)	0	0	2	0	1
// Thus, the maximum possible score is 2.

// Example 2:

// Input: grid = [[0, 1],[1, 2]], k = 1

// Output: -1

// Explanation:

// There is no path that reaches cell (1, 1)​​​​​​​ without exceeding cost k. Thus, the answer is -1.

 

// Constraints:

// 1 <= m, n <= 200
// 0 <= k <= 103​​​​​​​
// ​​​​​​​grid[0][0] == 0
// 0 <= grid[i][j] <= 2

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;

    function solve(i, j, cost, score) {
        if (i >= m || j >= n || cost > k) return 0;

        // Compute this cell’s score & cost
        const cell = grid[i][j];
        const addScore = cell === 1 ? 1 : cell === 2 ? 2 : 0;
        const addCost = cell === 0 ? 0 : 1;

        const newCost = cost + addCost;
        const newScore = score + addScore;

        // Exceeded allowed cost
        if (newCost > k) return -1;

        // Reached bottom-right cell
        if (i === m - 1 && j === n - 1) {
            return newScore; // valid path (within cost)
        }

        // Explore both directions: right and down
        const right = solve(i, j + 1, newCost, newScore);
        const down = solve(i + 1, j, newCost, newScore);

        // Return max valid score
        return Math.max(right, down);
    }
    const ans = solve(0, 0, 0, 0);
    return ans === -1 ? -1 : ans;
};

console.log(maxPathScore([[0, 1],[2, 0]], 1));

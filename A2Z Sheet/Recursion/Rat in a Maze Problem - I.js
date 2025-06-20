// Rat in a Maze Problem - I

// Consider a rat placed at position (0, 0) in an n x n square matrix mat[][]. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:

// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Your task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.
// If no path exists, return an empty list.

// Note: Return the final result vector in lexicographically smallest order.

// Examples:

// Input: mat[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: mat[][] = [[1, 0], [1, 0]]
// Output: []
// Explanation: No path exists as the destination cell is blocked.
// Input: mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: ["DDRR", "RRDD"]
// Explanation: The rat has two possible paths to reach the destination: 1. "DDRR" 2. "RRDD", These are returned in lexicographically sorted order.
// Constraints:
// 2 ≤ mat.size() ≤ 5
// 0 ≤ mat[i][j] ≤ 1


/**
 * @param number[][] mat
 * @returns string[]
 */
class Solution {
    // Function to find all possible paths
    ratInMaze(maze) {
        // code here
        let result = [];
        
        this.findPath(0, 0, '', maze, result);
        return result.sort();
    }
    
    findPath(i, j, path, maze, result) {
        let n = maze.length;
        if(i === n - 1 && j === n - 1) {
            result.push(path);
            return;
        }
        
        if(i < 0 || i >= n || j < 0 || j >= n || maze[i][j] === 0 || maze[i][j] === '#') return;
        
        // path Up
        let temp = maze[i][j];
        maze[i][j] = '#';
        this.findPath(i - 1, j, path + 'U', maze, result);
        maze[i][j] = temp;
        
        // path down
        temp = maze[i][j];
        maze[i][j] = '#';
        this.findPath(i + 1, j, path + 'D', maze, result);

        maze[i][j] = temp;
        
        // path Left
        temp = maze[i][j];
        maze[i][j] = '#';
        this.findPath(i, j - 1, path + 'L', maze, result);
        maze[i][j] = temp;
        
        // path Right
        temp = maze[i][j];
        maze[i][j] = '#';
        this.findPath(i, j + 1, path + 'R', maze, result);
        maze[i][j] = temp;
    }
}


class Solution {
    // Main function to be called
    ratInMaze(maze) {
        let result = [];
        let n = maze.length;

        if (maze[0][0] === 0 || maze[n - 1][n - 1] === 0) return result;

        this.findPath(0, 0, '', maze, result);
        return result.sort(); // Optional: sort to keep results in lexicographic order
    }

    findPath(i, j, path, maze, result) {
        let n = maze.length;

        // ✅ Base case: if we reach destination
        if (i === n - 1 && j === n - 1) {
            result.push(path);
            return;
        }

        // ✅ Boundary and blockage check
        if (i < 0 || j < 0 || i >= n || j >= n || maze[i][j] !== 1) return;

        // ✅ Mark current cell as visited
        maze[i][j] = -1;

        // 🔼 Up
        this.findPath(i - 1, j, path + 'U', maze, result);
        // 🔽 Down
        this.findPath(i + 1, j, path + 'D', maze, result);
        // ◀️ Left
        this.findPath(i, j - 1, path + 'L', maze, result);
        // ▶️ Right
        this.findPath(i, j + 1, path + 'R', maze, result);

        // ✅ Unmark current cell (Backtrack)
        maze[i][j] = 1;
    }
}

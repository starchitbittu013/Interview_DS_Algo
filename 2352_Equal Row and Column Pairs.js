// 2352. Equal Row and Column Pairs

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let rowFrequency = new Map();

    for (let i = 0; i < grid.length; i++) {
        const rowString = grid[i].join('#');
        
        if (!rowFrequency.has(rowString)) {
            rowFrequency.set(rowString, 1);
        } else {
            rowFrequency.set(rowString, (rowFrequency.get(rowString) || 0) + 1);
        }
    }
    console.log(rowFrequency);

    for (let j = 0; j < grid.length; j++) {
        let columnArray = [];
        let columnString = '';
        for (let i = 0; i < grid.length; i++) {            
            columnArray.push(grid[i][j]);                        
        }        
        columnString = columnArray.join('#');        

        if (rowFrequency.has(columnString)) {
            count += rowFrequency.get(columnString);
        }
    }
    return count;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));

// TC: O(n^2)
// SC: O(n)

// 3 2 1
// 1 7 6
// 2 7 7


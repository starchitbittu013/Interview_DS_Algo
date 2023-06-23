/**
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [];
    for (i = 1; i <= numRows; i++) {
        output.push(solve(i, output));
    }
    return output;
};

function solve(numRows, memo) {
    if (numRows === 1) return [numRows];
    if (memo[n] !== 0) return memo;

}

console.log(generate(1));
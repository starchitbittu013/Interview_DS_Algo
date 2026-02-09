"""
QUESTION:
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

APPROACH:
To solve this problem in-place, we can follow these steps:
1. Use two boolean variables, firstRowZero and firstColZero, to check if the first row and first column contain zeros initially.
2. Iterate through the matrix and if an element is zero, set the corresponding element in the first row and first column to zero.
3. Iterate through the matrix again, excluding the first row and first column. If an element in the first row or first column is zero, set the current element to zero.
4. Finally, based on the values in firstRowZero and firstColZero, set the first row and first column to zero if needed.

TIME COMPLEXITY: O(m * n), where m and n are the dimensions of the matrix.
SPACE COMPLEXITY: O(1), as we are using constant extra space.

"""

# CODE:
from typing import List

def setZeroes(matrix: List[List[int]]) -> None:
    m = len(matrix)
    n = len(matrix[0])
    firstRowZero = False
    firstColZero = False

    # Check if the first row contains zero
    for j in range(n):
        if matrix[0][j] == 0:
            firstRowZero = True
            break

    # Check if the first column contains zero
    for i in range(m):
        if matrix[i][0] == 0:
            firstColZero = True
            break

    # Mark zeros in the first row and column
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    # Set rows to zero
    for i in range(1, m):
        if matrix[i][0] == 0:
            for j in range(1, n):
                matrix[i][j] = 0

    # Set columns to zero
    for j in range(1, n):
        if matrix[0][j] == 0:
            for i in range(1, m):
                matrix[i][j] = 0

    # Set first row to zero
    if firstRowZero:
        for j in range(n):
            matrix[0][j] = 0

    # Set first column to zero
    if firstColZero:
        for i in range(m):
            matrix[i][0] = 0

# TIME COMPLEXITY: O(m * n), where m and n are the dimensions of the matrix.
# SPACE COMPLEXITY: O(1), as we are using constant extra space.

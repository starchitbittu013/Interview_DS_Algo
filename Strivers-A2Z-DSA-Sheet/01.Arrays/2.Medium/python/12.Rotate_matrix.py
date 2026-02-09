"""
QUESTION:-

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

"""

"""
APPROACH:-

To rotate the image by 90 degrees clockwise in-place, we can follow these steps:

1. Transpose the matrix: Iterate over the matrix and swap each element (i, j) with its corresponding element (j, i). This step transforms rows into columns.

2. Reverse each row: Iterate over each row in the transposed matrix and reverse the elements. This step ensures the rotation in a clockwise direction.

"""

# CODE: 
from typing import List

def rotate(matrix: List[List[int]]) -> None:
    # Transpose the matrix
    n = len(matrix)
    for i in range(n):
        # note here we move 
        for j in range(i):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Reverse each row
    for i in range(n):
        matrix[i].reverse()

# TIME COMPLEXITY = O(N^2), where N is the size of the matrix.
# SPACE COMPLEXITY = O(1)

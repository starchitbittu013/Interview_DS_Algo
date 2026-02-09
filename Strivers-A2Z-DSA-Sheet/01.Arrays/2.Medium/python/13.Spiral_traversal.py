"""
QUESTION:-

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

"""

"""
APPROACH:-

To traverse the matrix in a spiral order, we can use the following steps:

1. Initialize four variables: top, bottom, left, and right to keep track of the boundaries of the current spiral.
2. Create an empty list called 'ans' to store the elements in spiral order.
3. While the top boundary is less than or equal to the bottom boundary and the left boundary is less than or equal to the right boundary:
   - Traverse the top row from left to right and add each element to 'ans'.
   - Increment the top boundary.
   - Traverse the right column from top to bottom and add each element to 'ans'.
   - Decrement the right boundary.
   - Check if the top boundary is still less than or equal to the bottom boundary:
     - Traverse the bottom row from right to left and add each element to 'ans'.
     - Decrement the bottom boundary.
   - Check if the left boundary is still less than or equal to the right boundary:
     - Traverse the left column from bottom to top and add each element to 'ans'.
     - Increment the left boundary.
4. Return the 'ans' list containing all the elements in spiral order.

"""

# CODE:
from typing import List

def spiralOrder(matrix: List[List[int]]) -> List[int]:
    n = len(matrix)
    m = len(matrix[0])
    top, bottom = 0, n - 1
    left, right = 0, m - 1
    ans = []

    while top <= bottom and left <= right:
        # Traverse top row
        for i in range(left, right + 1):
            ans.append(matrix[top][i])
        top += 1

        # Traverse right column
        for i in range(top, bottom + 1):
            ans.append(matrix[i][right])
        right -= 1

        # Traverse bottom row
        if top <= bottom:
            for i in range(right, left - 1, -1):
                ans.append(matrix[bottom][i])
            bottom -= 1

        # Traverse left column
        if left <= right:
            for i in range(bottom, top - 1, -1):
                ans.append(matrix[i][left])
            left += 1

    return ans

# TIME COMPLEXITY: O(N), where N is the total number of elements in the matrix.
# SPACE COMPLEXITY: O(1)

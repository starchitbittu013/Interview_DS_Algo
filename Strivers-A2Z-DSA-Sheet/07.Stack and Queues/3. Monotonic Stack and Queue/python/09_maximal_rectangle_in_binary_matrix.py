"""
QUESTION:
Given a binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

APPROACH:
To solve this problem, we can use a variation of the Largest Rectangle in Histogram problem.
1. First, we will calculate the heights of the histogram for each row in the matrix.
   - If the current element is '1', we increment the height of the histogram at that column by 1.
   - If the current element is '0', we reset the height of the histogram at that column to 0.
2. For each row, we calculate the largest rectangle area using the heights calculated in step 1.
   - We use the largest_rectangle_area function, which calculates the largest rectangle area in a histogram.
   - The histogram heights are the heights of the current row up to that column.
3. Finally, we return the maximum area obtained from step 2.

Example:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

CODE:
"""

from typing import List


# Helper function to calculate the previous smaller element index for each element in an array
def prev_smaller(arr: List[int]) -> List[int]:
    st = []
    ans = [-1] * len(arr)
    for i in range(len(arr)):
        while st and arr[st[-1]] > arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


# Helper function to calculate the next smaller element index for each element in an array
def next_smaller(arr: List[int]) -> List[int]:
    st = []
    ans = [len(arr)] * len(arr)
    for i in range(len(arr) - 1, -1, -1):
        while st and arr[st[-1]] >= arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


# Function to calculate the largest rectangle area in a histogram represented by heights
def largest_rectangle_area(heights: List[int]) -> int:
    prev = prev_smaller(heights)
    next_s = next_smaller(heights)

    ans = float('-inf')
    for i in range(len(heights)):
        ans = max(ans, (next_s[i] - prev[i] - 1) * heights[i])
    return ans


# Function to find the largest rectangle area in a binary matrix
def maximal_rectangle(matrix: List[List[str]]) -> int:
    if not matrix or not matrix[0]:
        return 0

    rows = len(matrix)
    cols = len(matrix[0])
    prev = [0] * cols
    max_area = 0

    for i in range(rows):
        curr = [0] * cols
        for j in range(cols):
            if matrix[i][j] == '1':
                curr[j] = prev[j] + 1

        row_area = largest_rectangle_area(curr)
        max_area = max(max_area, row_area)

        prev = curr

    return max_area


"""
COMPLEXITY ANALYSIS:
- Let n be the total number of elements in the matrix, and m be the number of columns.
- The time complexity of the solution is O(n*m) because we iterate through each element of the matrix once.
- The space complexity is O(m) since we use additional arrays to store the heights and indices during the calculation.
  However, the space complexity can be considered O(1) if we modify the input matrix directly.
"""

if __name__ == "__main__":
    # Test example
    matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
    print(f"Input: matrix = {matrix}")
    print(f"Output: {maximal_rectangle(matrix)}")

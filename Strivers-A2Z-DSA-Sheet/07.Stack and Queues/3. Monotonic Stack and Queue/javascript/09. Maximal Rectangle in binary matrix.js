/*
QUESTION:
Given a binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

APPROACH:
To solve this problem, we can use a variation of the Largest Rectangle in Histogram problem.
1. First, we will calculate the heights of the histogram for each row in the matrix.
   - If the current element is '1', we increment the height of the histogram at that column by 1.
   - If the current element is '0', we reset the height of the histogram at that column to 0.
2. For each row, we calculate the largest rectangle area using the heights calculated in step 1.
   - We use the largestRectangleArea function, which calculates the largest rectangle area in a histogram.
   - The histogram heights are the heights of the current row up to that column.
3. Finally, we return the maximum area obtained from step 2.

Example:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

CODE:
*/

// Helper function to calculate the previous smaller element index for each element in an array
function prevSmaller(arr) {
    const st = [];
    const ans = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }
        if (st.length > 0) {
            ans[i] = st[st.length - 1];
        }
        st.push(i);
    }
    return ans;
}

// Helper function to calculate the next smaller element index for each element in an array
function nextSmaller(arr) {
    const st = [];
    const ans = new Array(arr.length).fill(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }
        if (st.length > 0) {
            ans[i] = st[st.length - 1];
        }
        st.push(i);
    }
    return ans;
}

// Function to calculate the largest rectangle area in a histogram represented by heights
function largestRectangleArea(heights) {
    const prev = prevSmaller(heights);
    const next = nextSmaller(heights);

    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < heights.length; i++) {
        ans = Math.max(ans, (next[i] - prev[i] - 1) * heights[i]);
    }
    return ans;
}

// Function to find the largest rectangle area in a binary matrix
function maximalRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let prev = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        const curr = new Array(cols).fill(0);
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                curr[j] = prev[j] + 1;
            }
        }

        const rowArea = largestRectangleArea(curr);
        maxArea = Math.max(maxArea, rowArea);

        prev = curr;
    }

    return maxArea;
}

/*
COMPLEXITY ANALYSIS:
- Let n be the total number of elements in the matrix, and m be the number of columns.
- The time complexity of the solution is O(n*m) because we iterate through each element of the matrix once.
- The space complexity is O(m) since we use additional arrays to store the heights and indices during the calculation.
  However, the space complexity can be considered O(1) if we modify the input matrix directly.
*/

// Export for module usage
module.exports = { prevSmaller, nextSmaller, largestRectangleArea, maximalRectangle };

"""
QUESTION:
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.

Example:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where the width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
"""

"""
APPROACH:
To find the largest rectangle area, we can use the concept of a stack.
The idea is to maintain a stack of indices of the heights in non-decreasing order.
For each height, we compare it with the top of the stack.
If the current height is greater than the top of the stack, we push its index onto the stack.
Otherwise, we keep popping elements from the stack and calculate the area using the popped index as the right boundary.
The left boundary can be obtained from the new top of the stack.
By doing this, we ensure that the heights in the stack are always in non-decreasing order.
Finally, we calculate the area for each popped element and update the maximum area found so far.

CODE:
"""

from typing import List


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


def largest_rectangle_area(heights: List[int]) -> int:
    prev = prev_smaller(heights)
    next_s = next_smaller(heights)

    ans = float('-inf')
    for i in range(len(heights)):
        ans = max(ans, (next_s[i] - prev[i] - 1) * heights[i])
    return ans


"""
COMPLEXITY ANALYSIS:
- The time complexity of the solution is O(n), where n is the number of elements in the heights array.
  This is because we iterate through the array once to calculate the previous and next smaller elements.
- The space complexity is O(n) as well since we use two additional arrays to store the previous and next smaller elements.
"""

if __name__ == "__main__":
    # Test example
    heights = [2, 1, 5, 6, 2, 3]
    print(f"Input: heights = {heights}")
    print(f"Output: {largest_rectangle_area(heights)}")

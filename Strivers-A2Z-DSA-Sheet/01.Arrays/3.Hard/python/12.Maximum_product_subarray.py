"""
QUESTION:
Given an integer array nums, find a subarray that has the largest product, and return the product.

Example:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
"""
from typing import List

def maxProduct(nums: List[int]) -> int:
    ans = float('-inf')
    prdct = 1

    # Iterate from left to right
    for i in range(len(nums)):
        prdct = prdct * nums[i]
        ans = max(ans, prdct)
        if prdct == 0:
            prdct = 1

    prdct = 1

    # Iterate from right to left
    for i in range(len(nums) - 1, -1, -1):
        prdct = prdct * nums[i]
        ans = max(ans, prdct)
        if prdct == 0:
            prdct = 1

    return ans

"""
TIME COMPLEXITY: O(N), where N is the size of the input array.
SPACE COMPLEXITY: O(1).
"""

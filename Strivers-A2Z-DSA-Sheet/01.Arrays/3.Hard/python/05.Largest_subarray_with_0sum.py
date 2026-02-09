"""
QUESTION:
Given an array with both positive and negative integers, we need to compute the length of the largest subarray with a sum of 0.

Example:
Input:
N = 8
A[] = {15, -2, 2, -8, 1, 7, 10, 23}
Output: 5
Explanation: The largest subarray with a sum of 0 will be -2, 2, -8, 1, 7.
"""
from typing import List

def maxLen(A: List[int], n: int) -> int:
    mp = {0: -1}
    pref_sum = 0
    ans = 0

    for i in range(n):
        pref_sum += A[i]
        if pref_sum in mp:
            ans = max(ans, i - mp[pref_sum])
        else:
            mp[pref_sum] = i

    return ans

"""
TIME COMPLEXITY: O(n), where n is the size of the input array A.
SPACE COMPLEXITY: O(n), as we are using a map to store the prefix sums and their corresponding indices.
"""

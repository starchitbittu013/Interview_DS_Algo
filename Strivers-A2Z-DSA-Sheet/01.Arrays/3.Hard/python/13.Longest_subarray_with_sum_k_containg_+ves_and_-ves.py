"""
Question:
Given an array containing N integers and an integer K, find the length of the longest subarray with the sum of the elements equal to K.

Example:
Input:
A[] = {10, 5, 2, 7, 1, 9}
K = 15
Output:
4
Explanation:
The sub-array is {5, 2, 7, 1}.
"""
from typing import List

def lenOfLongSubarr(A: List[int], N: int, K: int) -> int:
    pref_sum = 0
    ans = 0
    mp = {}

    for i in range(N):
        pref_sum += A[i]
        if pref_sum == K:
            ans = max(ans, i + 1)
        if pref_sum - K in mp:
            ans = max(ans, i - mp[pref_sum - K])
        if pref_sum not in mp:
            mp[pref_sum] = i
    return ans

"""
Time Complexity: O(N), where N is the size of the array.
Space Complexity: O(N) to store the prefix sums in the map.
"""

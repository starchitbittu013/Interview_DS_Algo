"""
QUESTION:-
You are given an array 'A' of size 'N' and an integer 'K'. You need to print the length of the longest subarray of array 'A' whose sum = 'K'.
Example:
Input: 'N' = 7 'K' = 3
'A' = [1, 2, 3, 1, 1, 1, 1]
Output: 3
Explanation: Subarrays whose sum = '3' are:
[1, 2], [3], [1, 1, 1], [1, 1, 1]
Here, the length of the longest subarray is 3, which is our final answer.
"""

"""
APPROACH:-
-> Use sliding window approach using two pointers start and end
-> Run a loop to traverse the entire array add from end and subtract from start when sum>k
-> If sum==k then, update the ans now, window size = end-start+1
"""

# CODE:-
from typing import List

def longestSubarrayWithSumK(a: List[int], k: int) -> int:
    start = 0
    ans = 0
    total = 0
    n = len(a)

    for end in range(n):
        total += a[end]
        while total > k:
            total -= a[start]
            start += 1
        if total == k:
            ans = max(ans, end - start + 1)
    return ans

# TIME COMPLEXITY = O(N)
# SPACE COMPLEXITY = O(1)

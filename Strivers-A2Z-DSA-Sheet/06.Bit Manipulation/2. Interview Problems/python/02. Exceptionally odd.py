"""QUESTION:
Given an array where every number appears an even number of times except one, find that exceptional number.

Approach:
XOR all elements. Pairs cancel out, leaving the number with odd frequency.

Time Complexity: O(n)
Space Complexity: O(1)
"""
from typing import List

def getOddOccurrence(arr: List[int]) -> int:
    xr = 0
    for num in arr:
        xr ^= num
    return xr

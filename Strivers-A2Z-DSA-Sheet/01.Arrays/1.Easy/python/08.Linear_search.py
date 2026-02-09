"""
I don't think anyone needs it's solution. The idea is to traverse the array using loop and when the element
is equal to k return the same
"""

# CODE:-
from typing import List

def linearSearch(arr: List[int], n: int, k: int) -> int:
    for i in range(n):
        if arr[i] == k:
            return i
    return -1

# TIME COMPLEXITY = O(N)
# SPACE COMPLEXITY = O(1)

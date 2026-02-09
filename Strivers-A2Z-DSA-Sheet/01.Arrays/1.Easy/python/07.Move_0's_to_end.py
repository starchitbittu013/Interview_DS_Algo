"""
QUESTION:-
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
"""

"""
APPROACH:-
-> The idea is while traversing the array if we found any zero then we have to swap it with next non-zero
"""

# CODE:-
from typing import List

# function to find the next non-zero element
def next_nonzero(a: List[int], j: List[int]) -> int:
    while j[0] < len(a):
        if a[j[0]] != 0:
            return j[0]
        j[0] += 1
    return -1

def moveZeroes(nums: List[int]) -> None:
    j = [-1]  # is to find the next non zero element
    # i signifies that upto here all elements are non-zero
    for i in range(len(nums)):
        if nums[i] != 0:
            continue
        if j[0] == -1:
            j[0] = i + 1
        nxt_non0 = next_nonzero(nums, j)
        if nxt_non0 == -1:
            return
        nums[i], nums[nxt_non0] = nums[nxt_non0], nums[i]

# TIME COMPLEXITY = O(N) (as we moving j throught the array only once)
# SPACE COMPLEXITY = O(1)

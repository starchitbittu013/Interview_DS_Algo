"""
QUESTION:
Given an integer array nums, return the number of reverse pairs in the array.
A reverse pair is a pair (i, j) where:
0 <= i < j < nums.length and
nums[i] > 2 * nums[j].

Example:
Input: nums = [1,3,2,3,1]
Output: 2
"""
from typing import List

rev_pair = [0]

def merge(start: int, mid: int, end: int, nums: List[int]) -> None:
    left_size = mid - start + 1
    right_size = end - mid
    left = nums[start:start + left_size]
    right = nums[mid + 1:mid + 1 + right_size]

    # main logic resides here
    m = 0
    for i in range(left_size):
        while m < right_size and left[i] > 2 * right[m]:
            m += 1
        rev_pair[0] += m

    i, j, k = 0, 0, start
    while i < left_size and j < right_size:
        if left[i] > right[j]:
            nums[k] = right[j]
            k += 1
            j += 1
        else:
            nums[k] = left[i]
            k += 1
            i += 1
    while i < left_size:
        nums[k] = left[i]
        k += 1
        i += 1
    while j < right_size:
        nums[k] = right[j]
        k += 1
        j += 1

def mergesort(start: int, end: int, nums: List[int]) -> None:
    if start >= end:
        return
    mid = start + (end - start) // 2
    mergesort(start, mid, nums)
    mergesort(mid + 1, end, nums)
    merge(start, mid, end, nums)

def reversePairs(nums: List[int]) -> int:
    rev_pair[0] = 0
    mergesort(0, len(nums) - 1, nums)
    return rev_pair[0]

"""
TIME COMPLEXITY: O(n log n), where n is the size of the array.
SPACE COMPLEXITY: O(n), where n is the size of the array.
"""

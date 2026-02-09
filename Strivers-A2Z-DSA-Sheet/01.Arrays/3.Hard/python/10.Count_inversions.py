"""
QUESTION:
Given an array of integers. Find the Inversion Count in the array.

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

Example 1:
Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
"""
from typing import List

inv_cnt = [0]

def merge(start: int, mid: int, end: int, arr: List[int]) -> None:
    leftsize = mid - start + 1
    rightsize = end - mid
    left = arr[start:start + leftsize]
    right = arr[mid + 1:mid + 1 + rightsize]
    
    i, j, k = 0, 0, start
    while i < leftsize and j < rightsize:
        if left[i] > right[j]:
            inv_cnt[0] += leftsize - i
            arr[k] = right[j]
            k += 1
            j += 1
        else:
            arr[k] = left[i]
            k += 1
            i += 1
    while i < leftsize:
        arr[k] = left[i]
        k += 1
        i += 1
    while j < rightsize:
        arr[k] = right[j]
        k += 1
        j += 1

def mergesort(start: int, end: int, arr: List[int]) -> None:
    if start >= end:
        return
    mid = start + (end - start) // 2
    mergesort(start, mid, arr)
    mergesort(mid + 1, end, arr)
    merge(start, mid, end, arr)

def inversionCount(arr: List[int], N: int) -> int:
    inv_cnt[0] = 0
    mergesort(0, N - 1, arr)
    return inv_cnt[0]

"""
TIME COMPLEXITY: O(N log N), where N is the size of the array.
SPACE COMPLEXITY: O(N).
"""

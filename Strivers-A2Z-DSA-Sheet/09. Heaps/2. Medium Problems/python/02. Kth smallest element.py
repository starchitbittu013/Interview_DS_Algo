"""
QUESTION:
Given an array arr[] and an integer K, where K is smaller than the size of the array,
the task is to find the Kth smallest element in the given array. It is given that all
array elements are distinct.

APPROACH:
To find the Kth smallest element in the array, we can use a max-heap of size K.
1. Initialize a max-heap (priority queue) of size K.
2. Insert the first K elements of the array into the max-heap.
3. For the remaining elements in the array, if an element is smaller than the top element
   of the max-heap, replace the top element with the current element and heapify to
   maintain the max-heap property.
4. After processing all the elements, the top element of the max-heap will be the Kth
   smallest element in the array.

TIME COMPLEXITY:
The time complexity is O(N log K), where N is the size of the array. Inserting elements
into the max-heap and heapifying take O(log K) time.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K elements in the max-heap.
"""

import heapq
from typing import List


def find_kth_smallest(arr: List[int], k: int) -> int:
    """
    Find the kth smallest element using max-heap of size k
    Note: Python's heapq is a min-heap, so we negate values for max-heap behavior
    """
    # Create max-heap with first k elements (using negation)
    pq = [-x for x in arr[:k]]
    heapq.heapify(pq)

    # For remaining elements, if smaller than top (largest), replace
    for i in range(k, len(arr)):
        if arr[i] < -pq[0]:
            heapq.heapreplace(pq, -arr[i])

    return -pq[0]


def find_kth_smallest_alternative(arr: List[int], k: int) -> int:
    """
    Alternative approach using nsmallest
    """
    return heapq.nsmallest(k, arr)[-1]


# Example usage:
# print(find_kth_smallest([7, 10, 4, 3, 20, 15], 3))  # Output: 7
# print(find_kth_smallest([7, 10, 4, 20, 15], 4))  # Output: 15


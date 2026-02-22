"""
QUESTION:
Given an integer array nums and an integer k, return the kth largest element in the array.

APPROACH:
To find the kth largest element in the array, we can use a min-heap of size k.
1. Initialize a min-heap (priority queue) of size k.
2. Insert the first k elements of the array into the min-heap.
3. For the remaining elements in the array, if an element is larger than the top element
   of the min-heap, replace the top element with the current element and heapify to
   maintain the min-heap property.
4. After processing all the elements, the top element of the min-heap will be the kth
   largest element in the array.

TIME COMPLEXITY:
The time complexity is O(N log k), where N is the size of the array. Inserting elements
into the min-heap and heapifying take O(log k) time, and we do this for N-k elements.

SPACE COMPLEXITY:
The space complexity is O(k) as we need to store k elements in the min-heap.
"""

import heapq
from typing import List


def find_kth_largest(nums: List[int], k: int) -> int:
    """
    Find the kth largest element using min-heap of size k
    """
    # Create min-heap with first k elements
    pq = nums[:k]
    heapq.heapify(pq)

    # For remaining elements, if larger than top, replace
    for i in range(k, len(nums)):
        if nums[i] > pq[0]:
            heapq.heapreplace(pq, nums[i])

    return pq[0]


def find_kth_largest_alternative(nums: List[int], k: int) -> int:
    """
    Alternative approach using nlargest
    """
    return heapq.nlargest(k, nums)[-1]


# Example usage:
# print(find_kth_largest([3,2,1,5,6,4], 2))  # Output: 5
# print(find_kth_largest([3,2,3,1,2,4,5,5,6], 4))  # Output: 4


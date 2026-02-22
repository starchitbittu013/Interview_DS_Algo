"""
QUESTION:
Given K sorted arrays arranged in the form of a matrix of size K*K, the task is to
merge them into one sorted array.

APPROACH:
To merge K sorted arrays, we can use a min-heap (priority queue) to store the smallest
elements from each array.
1. Create a min-heap of size K to store the current smallest elements from each array.
2. Initialize the min-heap with the first element from each array.
3. While the min-heap is not empty, extract the smallest element from the min-heap,
   add it to the merged array, and replace it with the next element from the same array.
4. Repeat step 3 until all elements from all arrays are processed.

TIME COMPLEXITY:
The time complexity is O(K^2 log K), where K is the size of each array. Inserting elements
into the min-heap and extracting the minimum element take O(log K) time, and we do this
for K^2 elements.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K elements in the min-heap.
"""

import heapq
from typing import List


def merge_k_arrays(arr: List[List[int]], k: int) -> List[int]:
    """
    Merge K sorted arrays using min-heap

    Args:
        arr: K sorted arrays arranged as a matrix
        k: Number of arrays

    Returns:
        Merged sorted array
    """
    pq = []

    # Initialize heap with first element from each array
    # Each entry: (value, row_index, column_index)
    for i in range(k):
        heapq.heappush(pq, (arr[i][0], i, 0))

    merged_array = []

    while pq:
        val, row, col = heapq.heappop(pq)
        merged_array.append(val)

        # If there's a next element in the same row, add it to heap
        if col + 1 < k:
            heapq.heappush(pq, (arr[row][col + 1], row, col + 1))

    return merged_array


# Example usage:
# arr = [
#     [1, 5, 9],
#     [2, 6, 10],
#     [3, 7, 11]
# ]
# print(merge_k_arrays(arr, 3))  # Output: [1, 2, 3, 5, 6, 7, 9, 10, 11]


"""
QUESTION:
Given an array of integers arr, replace each element with its rank.

APPROACH:
To assign ranks to the elements in the array, we can use a min-heap (priority queue) to
sort the elements in ascending order along with their indices.
1. Create a min-heap to store pairs of (element, index) in ascending order.
2. Push each element along with its index into the min-heap.
3. Initialize the rank as 0 and the previous element as a value that never matches.
4. While the min-heap is not empty, extract the minimum element from the min-heap.
5. If the current element is different from the previous element, increment the rank.
6. Assign the rank to the element at its corresponding index in the result array.
7. Repeat steps 4-6 until all elements are processed.

TIME COMPLEXITY:
The time complexity is O(N log N), where N is the size of the array. Inserting elements
into the min-heap and extracting the minimum element take O(log N) time.

SPACE COMPLEXITY:
The space complexity is O(N) as we need to store N elements in the min-heap and the result array.
"""

import heapq
from typing import List


def array_rank_transform(arr: List[int]) -> List[int]:
    """
    Replace each element with its rank using min-heap

    Args:
        arr: Input array of integers

    Returns:
        Array with elements replaced by their ranks
    """
    pq = []

    # Push each element with its index
    for i, val in enumerate(arr):
        heapq.heappush(pq, (val, i))

    ans = [0] * len(arr)
    rank = 0
    prev = float('-inf')  # an arbitrary value which never matches

    while pq:
        val, idx = heapq.heappop(pq)
        if val != prev:
            rank += 1
        ans[idx] = rank
        prev = val

    return ans


def array_rank_transform_alternative(arr: List[int]) -> List[int]:
    """
    Alternative approach using sorting and dictionary
    """
    sorted_unique = sorted(set(arr))
    rank_map = {val: i + 1 for i, val in enumerate(sorted_unique)}
    return [rank_map[val] for val in arr]


# Example usage:
# print(array_rank_transform([40, 10, 20, 30]))  # Output: [4, 1, 2, 3]
# print(array_rank_transform([100, 100, 100]))  # Output: [1, 1, 1]
# print(array_rank_transform([37, 12, 28, 9, 100, 56, 80, 5, 12]))  # Output: [5, 3, 4, 2, 8, 6, 7, 1, 3]


"""
QUESTION:
Given two integer arrays A and B of size N each. A sum combination is made by adding one element
from array A and another element from array B. Return the maximum K valid distinct sum combinations
from all the possible sum combinations. Output array must be sorted in non-increasing order.

Example:
Input:
N = 2, K = 2
A[] = {3, 2}
B[] = {1, 4}
Output: {7, 6}
Explanation:
7 -> (A: 3) + (B: 4)
6 -> (A: 2) + (B: 4)

APPROACH:
1. Sort arrays A and B in non-decreasing order.
2. Use a max-heap to store sum combinations starting with largest possible sums.
3. Start with pairing each element of A with the largest element of B.
4. Extract max sum, add to result, and push next possible combination from same A element.
5. Continue until we have K sums.

COMPLEXITY ANALYSIS:
- Time complexity: O(N log N + K log N)
- Space complexity: O(N) for the heap
"""

import heapq
from typing import List


def max_combinations(N: int, K: int, A: List[int], B: List[int]) -> List[int]:
    """
    Find K maximum sum combinations from two arrays.

    Args:
        N: Size of arrays
        K: Number of maximum sums to find
        A: First array
        B: Second array

    Returns:
        List of K maximum sum combinations in non-increasing order
    """
    # Sort both arrays
    A.sort()
    B.sort()

    # Max heap (use negative values for max heap behavior)
    # Each entry: (-sum, a_index, b_index)
    pq = []

    # Initialize heap with each element of A paired with largest element of B
    for i in range(N):
        heapq.heappush(pq, (-(A[i] + B[N - 1]), i, N - 1))

    ans = []

    while pq and K > 0:
        neg_sum, a_idx, b_idx = heapq.heappop(pq)
        ans.append(-neg_sum)
        K -= 1

        # Push next combination with same A element and previous B element
        if b_idx > 0:
            heapq.heappush(pq, (-(A[a_idx] + B[b_idx - 1]), a_idx, b_idx - 1))

    return ans


# Example usage:
# print(max_combinations(2, 2, [3, 2], [1, 4]))  # Output: [7, 6]
# print(max_combinations(3, 3, [1, 4, 2], [2, 5, 3]))  # Output: [9, 8, 8]


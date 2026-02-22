"""
QUESTION:
There are given N ropes of different lengths, we need to connect these ropes into one rope.
The cost to connect two ropes is equal to the sum of their lengths. The task is to connect
the ropes with the minimum cost.

Example:
Input: arr[] = {4, 3, 2, 6}
Output: 29
Explanation: The minimum cost is obtained by connecting ropes in the following order:
1. Connect ropes of length 2 and 3, cost = 2 + 3 = 5, resulting array = {4, 5, 6}
2. Connect ropes of length 4 and 5, cost = 4 + 5 = 9, resulting array = {9, 6}
3. Connect ropes of length 6 and 9, cost = 6 + 9 = 15, resulting array = {15}
Total cost = 5 + 9 + 15 = 29

APPROACH:
1. Use a priority queue (min heap) to store the lengths of the ropes.
2. Push all the rope lengths into the priority queue.
3. While the priority queue has more than one element:
   - Extract the two smallest ropes from the priority queue.
   - Add their lengths together to get the cost.
   - Push the sum back into the priority queue.
   - Update the total cost.
4. Return the total cost as the minimum cost of connecting the ropes.

COMPLEXITY ANALYSIS:
- Time complexity: O(n log n), where n is the number of ropes.
- Space complexity: O(n) to store the rope lengths in the priority queue.
"""

import heapq
from typing import List


def connect_ropes(arr: List[int], n: int) -> int:
    """
    Calculate minimum cost to connect all ropes.

    Args:
        arr: List of rope lengths
        n: Number of ropes

    Returns:
        Minimum cost to connect all ropes
    """
    ans = 0

    # Create min heap from array
    heapq.heapify(arr)

    # Connect ropes until only one rope remains
    while len(arr) > 1:
        a = heapq.heappop(arr)
        b = heapq.heappop(arr)
        total = a + b
        ans += total

        # Push the sum back into the priority queue
        heapq.heappush(arr, total)

    return ans


# Example usage:
# print(connect_ropes([4, 3, 2, 6], 4))  # Output: 29
# print(connect_ropes([1, 2, 3, 4, 5], 5))  # Output: 33


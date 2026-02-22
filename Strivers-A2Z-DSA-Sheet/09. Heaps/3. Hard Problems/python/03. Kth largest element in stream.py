"""
QUESTION:
Design a class to find the kth largest element in a stream. Note that it is the kth largest
element in the sorted order, not the kth distinct element.

Implement KthLargest class:
- KthLargest(int k, int[] nums): Initializes the object with the integer k and the stream of integers nums.
- int add(int val): Appends the integer val to the stream and returns the element representing
  the kth largest element in the stream.

Example:
Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output:
[null, 4, 5, 5, 8, 8]

APPROACH:
- Use a min heap (priority queue) to store the k largest elements.
- Initialize the min heap with the first k elements from the stream (nums) in the constructor.
- For each subsequent element in the stream, add it to the min heap.
- If the size of the min heap exceeds k, remove the smallest element.
- The top element of the min heap represents the kth largest element.

COMPLEXITY ANALYSIS:
- The time complexity of adding an element is O(log k).
- The space complexity is O(k) to store the k largest elements.
"""

import heapq
from typing import List


class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        """
        Initialize with k and initial stream of numbers.

        Args:
            k: The k value for kth largest
            nums: Initial list of numbers
        """
        self.k = k
        self.pq = []

        for num in nums:
            heapq.heappush(self.pq, num)
            if len(self.pq) > k:
                heapq.heappop(self.pq)

    def add(self, val: int) -> int:
        """
        Add a value to the stream and return kth largest.

        Args:
            val: Value to add

        Returns:
            The kth largest element
        """
        heapq.heappush(self.pq, val)
        if len(self.pq) > self.k:
            heapq.heappop(self.pq)
        return self.pq[0]


# Example usage:
# kth_largest = KthLargest(3, [4, 5, 8, 2])
# print(kth_largest.add(3))   # return 4
# print(kth_largest.add(5))   # return 5
# print(kth_largest.add(10))  # return 5
# print(kth_largest.add(9))   # return 8
# print(kth_largest.add(4))   # return 8


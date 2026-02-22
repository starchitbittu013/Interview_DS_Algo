"""
QUESTION:
The median is the middle value in an ordered integer list. If the size of the list is even,
there is no middle value, and the median is the mean of the two middle values.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far.

APPROACH:
1. Use two heaps: a max heap to store the smaller half and a min heap to store the larger half.
2. When adding a new number:
   - If max heap is empty or number is smaller than max heap's top, push to max heap.
   - Otherwise, push to min heap.
   - Balance the heaps so their sizes differ by at most 1.
3. When finding the median:
   - If sizes are equal, return average of both tops.
   - Otherwise, return top of the larger heap.

COMPLEXITY ANALYSIS:
- addNum: O(log N) for heap operations
- findMedian: O(1)
- Space: O(N)
"""

import heapq


class MedianFinder:
    def __init__(self):
        """Initialize MedianFinder with two heaps."""
        # Max heap for smaller half (use negative values)
        self.max_heap = []
        # Min heap for larger half
        self.min_heap = []

    def add_num(self, num: int) -> None:
        """
        Add a number to the data structure.

        Args:
            num: Number to add
        """
        # Add to appropriate heap
        if not self.max_heap or num < -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        # Balance the heaps
        a = len(self.max_heap)
        b = len(self.min_heap)

        if abs(a - b) > 1:
            if a > b:
                val = -heapq.heappop(self.max_heap)
                heapq.heappush(self.min_heap, val)
            else:
                val = heapq.heappop(self.min_heap)
                heapq.heappush(self.max_heap, -val)

    def find_median(self) -> float:
        """
        Find the median of all numbers added so far.

        Returns:
            The median value
        """
        a = len(self.max_heap)
        b = len(self.min_heap)

        if a == b:
            return (-self.max_heap[0] + self.min_heap[0]) / 2

        if a > b:
            return -self.max_heap[0]

        return self.min_heap[0]


# Example usage:
# median_finder = MedianFinder()
# median_finder.add_num(1)
# median_finder.add_num(2)
# print(median_finder.find_median())  # 1.5
# median_finder.add_num(3)
# print(median_finder.find_median())  # 2


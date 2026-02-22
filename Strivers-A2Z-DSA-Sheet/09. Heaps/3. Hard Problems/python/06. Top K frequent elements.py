"""
QUESTION:
Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

APPROACH:
1. Create a frequency map to count the occurrences of each element in the array.
2. Use a min heap to store the k most frequent elements based on their frequencies.
3. Iterate through the frequency map and push elements into the min heap.
4. If the size of the min heap exceeds k, remove the element with the lowest frequency.
5. Finally, extract the elements from the min heap and return them.

COMPLEXITY ANALYSIS:
- Time complexity: O(N log K), where N is the size of the input array nums.
- Space complexity: O(N + K) for the frequency map and heap.
"""

import heapq
from typing import List
from collections import Counter


def top_k_frequent(nums: List[int], k: int) -> List[int]:
    """
    Find the k most frequent elements in the array.

    Args:
        nums: Input array of integers
        k: Number of most frequent elements to return

    Returns:
        List of k most frequent elements
    """
    # Build frequency map
    freq = Counter(nums)

    # Use min heap to keep k most frequent elements
    # Each entry: (frequency, num)
    pq = []

    for num, count in freq.items():
        heapq.heappush(pq, (count, num))
        if len(pq) > k:
            heapq.heappop(pq)

    # Extract elements from heap
    return [num for count, num in pq]


def top_k_frequent_alternative(nums: List[int], k: int) -> List[int]:
    """
    Alternative approach using nlargest.

    Args:
        nums: Input array of integers
        k: Number of most frequent elements to return

    Returns:
        List of k most frequent elements
    """
    freq = Counter(nums)
    return [num for num, count in freq.most_common(k)]


# Example usage:
# print(top_k_frequent([1,1,1,2,2,3], 2))  # Output: [1, 2]
# print(top_k_frequent([1], 1))  # Output: [1]


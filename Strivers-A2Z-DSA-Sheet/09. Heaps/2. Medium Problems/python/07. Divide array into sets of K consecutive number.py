"""
QUESTION:
Given an array of integers nums and a positive integer k, check whether it is possible to
divide this array into sets of k consecutive numbers.

Return True if it is possible. Otherwise, return False.

Example:
Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: True
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

APPROACH:
1. First, we check if the array size is divisible by k. If not, it is not possible to
   divide the array into sets of k consecutive numbers.
2. We use a frequency map mp to count the occurrences of each element in the array.
3. We sort the array nums in ascending order.
4. For each number num in nums, we check if it is still available (mp[num] > 0).
5. If num is available, we iterate from num + 1 to num + k - 1 and check if each number
   is available in mp as well. If any number is not available, we return False.
6. If all numbers are available, we decrement the counts in mp accordingly.
7. If we reach the end of the loop, it means it is possible to divide the array into
   sets of k consecutive numbers, and we return True.

COMPLEXITY ANALYSIS:
- Time complexity: O(n log n), where n is the size of the input array nums.
  The complexity is dominated by the sorting step.
- Space complexity: O(n), to store the frequency map.
"""

from typing import List
from collections import Counter


def is_possible_divide(nums: List[int], k: int) -> bool:
    """
    Check if array can be divided into sets of k consecutive numbers

    Args:
        nums: Input array of integers
        k: Size of each consecutive set

    Returns:
        True if division is possible, False otherwise
    """
    if len(nums) % k != 0:
        return False

    # Count frequency of each number
    freq = Counter(nums)

    # Sort the array
    nums.sort()

    for num in nums:
        if freq[num] > 0:
            # Try to form a group starting from num
            for i in range(num + 1, num + k):
                if freq[i] == 0:
                    return False
                freq[i] -= 1
            freq[num] -= 1

    return True


# Example usage:
# print(is_possible_divide([1,2,3,3,4,4,5,6], 4))  # Output: True
# print(is_possible_divide([3,2,1,2,3,4,3,4,5,9,10,11], 3))  # Output: True
# print(is_possible_divide([1,2,3,4], 3))  # Output: False


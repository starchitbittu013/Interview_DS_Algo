"""
QUESTION:
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

APPROACH:
To find all elements that appear more than ⌊ n/3 ⌋ times, we can use the Boyer-Moore Majority Vote algorithm.
"""
from typing import List

def majorityElement(nums: List[int]) -> List[int]:
    c1, c2, vote1, vote2 = 0, 0, 0, 0

    # Finding potential candidates
    for i in range(len(nums)):
        if c1 == nums[i]:
            vote1 += 1
        elif c2 == nums[i]:
            vote2 += 1
        elif vote1 == 0:
            c1 = nums[i]
            vote1 = 1
        elif vote2 == 0:
            c2 = nums[i]
            vote2 = 1
        else:
            vote1 -= 1
            vote2 -= 1

    ans = []
    cnt1, cnt2 = 0, 0

    # Counting occurrences of potential candidates
    for num in nums:
        if num == c1:
            cnt1 += 1
        if num == c2:
            cnt2 += 1

    # Checking if candidates appear more than ⌊ n/3 ⌋ times
    if cnt1 > len(nums) // 3:
        ans.append(c1)
    if cnt2 > len(nums) // 3 and c2 != c1:
        ans.append(c2)

    return ans

# TIME COMPLEXITY: O(n), where n is the size of the input array.
# SPACE COMPLEXITY: O(1), as we are using a constant amount of extra space.

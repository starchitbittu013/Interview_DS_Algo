"""
QUESTION:-
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
"""

"""
APPROACH:-
-> Traverse the entire array and within it run a loop while element's are equal to 1 and store the count
-> Update the ans as max(ans,cnt)
"""

# CODE:-
from typing import List

def findMaxConsecutiveOnes(nums: List[int]) -> int:
    ans = 0
    i = 0
    while i < len(nums):
        cnt = 0  # to store the count of consecutive 1's
        while i < len(nums) and nums[i] == 1:
            cnt += 1
            i += 1
        ans = max(ans, cnt)
        i += 1
    return ans

# TIME COMPLEXITY = O(N)
# SPACE COMPLEXITY = O(1)

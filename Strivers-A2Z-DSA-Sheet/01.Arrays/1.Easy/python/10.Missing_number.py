"""
QUESTION:-
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
"""

"""
APPROACH:-
-> Calculate the optimum sum i.e. sum when all elements were present
-> Calculate the actual array's sum
-> Return the optimum sum - actual sum
"""

# CODE:-
from typing import List

def missingNumber(nums: List[int]) -> int:
    n = len(nums)
    optimum_sum = (n * (n + 1)) // 2  # the sum if no number is absent
    actual_sum = 0
    for num in nums:
        actual_sum += num
    return optimum_sum - actual_sum

# TIME COMPLEXITY = O(N)
# SPACE COMPLEXITY = O(1)

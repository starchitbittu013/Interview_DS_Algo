"""
QUESTION:
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target

Example:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
"""
from typing import List

def fourSum(nums: List[int], target: int) -> List[List[int]]:
    ans = []
    nums.sort()

    a = 0
    while a < len(nums):
        b = a + 1
        while b < len(nums):
            c = b + 1
            d = len(nums) - 1
            tar = target - (nums[a] + nums[b])

            while c < d:
                total = nums[c] + nums[d]

                if total == tar:
                    ans.append([nums[a], nums[b], nums[c], nums[d]])
                    c += 1
                    d -= 1

                    # Skip duplicate elements
                    while c < d and nums[c] == nums[c - 1]:
                        c += 1
                    while c < d and nums[d] == nums[d + 1]:
                        d -= 1
                elif total > tar:
                    d -= 1
                else:
                    c += 1

            # Skip duplicate elements
            while b + 1 < len(nums) and nums[b + 1] == nums[b]:
                b += 1
            b += 1

        # Skip duplicate elements
        while a + 1 < len(nums) and nums[a + 1] == nums[a]:
            a += 1
        a += 1

    return ans

"""
TIME COMPLEXITY: O(n^3), where n is the size of the input array nums.
SPACE COMPLEXITY: O(1), as we are using a constant amount of extra space.
"""

"""QUESTION:
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum equal to the goal.

Example 1:
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

APPROACH:
1. Create a dictionary mp to store the prefix sum and its frequency.
2. Initialize a variable prefSum to keep track of the prefix sum.
3. Initialize a variable cnt to keep track of the count of subarrays with a sum equal to the goal.
4. Iterate through each element nums[i] in the array:
   - Update prefSum by adding nums[i].
   - Check if prefSum is equal to the goal, if so, increment cnt.
   - Check if the difference between prefSum and goal (prefSum - goal) exists in the map.
     - If it exists, increment cnt by the frequency of (prefSum - goal) in the map, as this would mean we have found subarrays with a sum equal to the goal.
   - Increment the frequency of prefSum in the map.
5. Return cnt, which represents the number of non-empty subarrays with a sum equal to the goal.

CODE:"""

from typing import List

def numSubarraysWithSum(nums: List[int], goal: int) -> int:
    mp = {}
    prefSum = 0
    cnt = 0
    for i in range(len(nums)):
        prefSum += nums[i]
        if prefSum == goal:
            cnt += 1
        if (prefSum - goal) in mp:
            cnt += mp[prefSum - goal]
        mp[prefSum] = mp.get(prefSum, 0) + 1
    return cnt

"""
COMPLEXITY ANALYSIS:
- Time complexity: O(N), where N is the size of the input array nums. We traverse the array once and perform constant time operations in the loop.
- Space complexity: O(N), as the worst-case scenario would be that all prefix sums are distinct, so the map mp would store N prefix sums.
    - we can reduce the space complexity to O(1) if we use this countOfSubarrays with atmost sum = k - atmost sum = k-1 
    - which will return in countofSubarrays with sum exactly K, but this won't work if array has -ve elements
"""


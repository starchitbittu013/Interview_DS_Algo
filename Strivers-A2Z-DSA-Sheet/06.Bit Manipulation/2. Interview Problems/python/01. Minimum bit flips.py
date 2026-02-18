"""QUESTION:
Given two integers start and goal, return the minimum number of bit flips required to convert start to goal.

Approach:
Count the positions where the bits differ by shifting both numbers right and comparing the least-significant bits.

Time Complexity: O(1) (32 iterations)
Space Complexity: O(1)
"""

def minBitFlips(start: int, goal: int) -> int:
    i = 0
    cnt = 0
    while i < 32:
        start_bit = (start >> i) & 1
        goal_bit = (goal >> i) & 1
        if start_bit != goal_bit:
            cnt += 1
        i += 1
    return cnt

"""QUESTION:
Given N, return the total number of set bits in all integers from 1 to N (inclusive).

Approach:
Let x = floor(log2(n)). Then use:
countSetBits(n) = (2^{x-1} * x) + (n - 2^x + 1) + countSetBits(n - 2^x).

Time Complexity: O(log n)
Space Complexity: O(log n)
"""
import math

def count_set_bits(n: int) -> int:
    if n <= 1:
        return n
    x = int(math.log2(n))
    highest_power = 1 << x
    upto_power_contribution = (highest_power >> 1) * x
    msb_contribution = n - highest_power + 1
    remainder = n - highest_power
    return upto_power_contribution + msb_contribution + count_set_bits(remainder)

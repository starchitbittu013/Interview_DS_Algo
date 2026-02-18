"""QUESTION:
Given an integer `n` and zero-based bit index `k`, return whether the kth bit is set.

Approach:
Bitwise-AND `n` with (1 << k). A non-zero result indicates the bit is set.

Time Complexity: O(1)
Space Complexity: O(1)
"""

def check_kth_bit(n: int, k: int) -> bool:
    return (n & (1 << k)) != 0

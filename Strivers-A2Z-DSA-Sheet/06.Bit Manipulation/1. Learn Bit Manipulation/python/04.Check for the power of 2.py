"""QUESTION:
Given an integer `n`, return True if it is a power of two, otherwise False.

Approach:
A power of two has exactly one set bit. Check that `n > 0` and `n & (n - 1)` equals 0.

Time Complexity: O(1)
Space Complexity: O(1)
"""

def is_power_of_two(n: int) -> bool:
    if n <= 0:
        return False
    return (n & (n - 1)) == 0

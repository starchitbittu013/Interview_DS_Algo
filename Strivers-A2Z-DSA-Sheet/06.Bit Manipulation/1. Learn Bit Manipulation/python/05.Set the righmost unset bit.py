"""QUESTION:
Given a non-negative integer `N`, set its rightmost unset bit. If no unset bit exists, return `N` unchanged.

Approach:
If `N + 1` is a power of two, then every lower bit in `N` is already set, so the number stays the same. Otherwise, `N | (N + 1)` sets the rightmost zero bit.

Time Complexity: O(1)
Space Complexity: O(1)
"""

def is_power_of_two(n: int) -> bool:
    if n <= 0:
        return False
    return (n & (n - 1)) == 0

def set_bit(N: int) -> int:
    if is_power_of_two(N + 1):
        return N
    return N | (N + 1)

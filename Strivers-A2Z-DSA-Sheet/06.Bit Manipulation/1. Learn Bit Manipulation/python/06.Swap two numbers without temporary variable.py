"""QUESTION:
Swap two integers without using a temporary variable.

Approach:
Apply XOR swapping:
1. a = a ^ b
2. b = a ^ b
3. a = a ^ b

Time Complexity: O(1)
Space Complexity: O(1)
"""
from typing import Tuple

def swap_without_temp(a: int, b: int) -> Tuple[int, int]:
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

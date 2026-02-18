"""QUESTION:
Given a 32-bit unsigned integer `num` and a 1-based index `i`, return:
1. The ith bit (0/1)
2. The value of `num` with the ith bit set
3. The value of `num` with the ith bit cleared

Approach:
Convert the 1-based index to 0-based, then use bitwise operations to read, set, and clear the bit.

Time Complexity: O(1)
Space Complexity: O(1)
"""
from dataclasses import dataclass

@dataclass
class BitManipulationResult:
    ith_bit: int
    set_value: int
    clear_value: int

def bit_manipulation(num: int, i: int) -> BitManipulationResult:
    idx = i - 1  # convert to 0-based index
    ith_bit = 1 if (num & (1 << idx)) else 0
    set_value = num | (1 << idx)
    clear_value = num & (~(1 << idx))
    return BitManipulationResult(ith_bit, set_value, clear_value)

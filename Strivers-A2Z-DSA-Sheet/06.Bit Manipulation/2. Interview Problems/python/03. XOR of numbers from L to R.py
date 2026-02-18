"""Question:
Given L and R, return the XOR of all integers in the inclusive range [L, R].

Approach:
Use the observed pattern for XOR(0..n) based on n % 4 and compute XOR(R) ^ XOR(L-1).

Time Complexity: O(1)
Space Complexity: O(1)
"""

def calculate_xor(n: int) -> int:
    if n % 4 == 0:
        return n
    if n % 4 == 1:
        return 1
    if n % 4 == 2:
        return n + 1
    return 0

def find_xor(L: int, R: int) -> int:
    upto_l_minus_1 = calculate_xor(L - 1)
    upto_r = calculate_xor(R)
    return upto_r ^ upto_l_minus_1

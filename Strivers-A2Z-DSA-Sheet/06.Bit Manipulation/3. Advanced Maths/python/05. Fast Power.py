"""QUESTION:
Implement pow(x, n) via fast binary exponentiation.

Approach:
Handle n = 0 early. Track whether the exponent is negative, work with its absolute value, and repeatedly square the base while multiplying the result when the current bit is set. If n was negative, invert the final result.

Time Complexity: O(log |n|)
Space Complexity: O(1)
"""

def my_pow(x: float, n: int) -> float:
    if n == 0:
        return 1.0
    exponent = abs(n)
    base = x
    res = 1.0
    while exponent > 0:
        if exponent & 1:
            res *= base
        base *= base
        exponent >>= 1
    return 1.0 / res if n < 0 else res

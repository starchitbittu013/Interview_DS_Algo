"""QUESTION:
Divide two integers without using multiplication, division, or modulus.

Approach:
Work with absolute values. Repeatedly subtract the largest shifted divisor that fits inside the dividend, accumulating the quotient via powers of two. Apply the overall sign at the end.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

def divide_two_integer(dividend: int, divisor: int) -> int:
    if divisor == 0:
        raise ZeroDivisionError("Division by zero")
    if dividend == divisor:
        return 1

    is_negative = (dividend < 0) ^ (divisor < 0)
    a = abs(dividend)
    b = abs(divisor)
    ans = 0

    while a >= b:
        q = 1
        while a > (b << q):
            q += 1
        ans += 1 << (q - 1)
        a -= b << (q - 1)

    return -ans if is_negative else ans

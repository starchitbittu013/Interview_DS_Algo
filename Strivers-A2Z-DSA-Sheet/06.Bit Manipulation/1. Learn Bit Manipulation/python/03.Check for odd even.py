"""QUESTION:
Given a positive integer `n`, return "odd" if it is odd, otherwise "even".

Approach:
Inspect the least-significant bit (`n & 1`). If it equals 1, the number is odd; otherwise, even.

Time Complexity: O(1)
Space Complexity: O(1)
"""

def odd_even(n: int) -> str:
    return "odd" if (n & 1) else "even"

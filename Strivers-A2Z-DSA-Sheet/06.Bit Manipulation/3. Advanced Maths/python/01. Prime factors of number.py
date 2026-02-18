"""QUESTION:
Given an integer n, return its unique prime factors in increasing order.

Approach:
Iterate from 2 up to sqrt(n), add each divisor that divides n, and divide n repeatedly to ensure uniqueness. If the remaining n is > 1, include it.

Time Complexity: O(sqrt(n))
Space Complexity: O(1) aside from the output list
"""
from typing import List

def all_prime_factors(n: int) -> List[int]:
    ans: List[int] = []
    i = 2
    while i * i <= n:
        if n % i == 0:
            ans.append(i)
            while n % i == 0:
                n //= i
        i += 1
    if n > 1:
        ans.append(n)
    return ans

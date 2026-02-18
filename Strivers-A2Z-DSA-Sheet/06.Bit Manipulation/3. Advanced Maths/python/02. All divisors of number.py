"""QUESTION:
Given an integer n, return all of its divisors in ascending order.

Approach:
Iterate i from 1 to floor(sqrt(n)). Append i immediately when it divides n. If n / i differs from i, store it for later. Once the loop finishes, append the stored values in reverse order so the result stays sorted.

Time Complexity: O(sqrt(n))
Space Complexity: O(sqrt(n)) for temporary storage
"""
from typing import List

def all_divisors(n: int) -> List[int]:
    result: List[int] = []
    high: List[int] = []
    i = 1
    while i * i <= n:
        if n % i == 0:
            result.append(i)
            if n // i != i:
                high.append(n // i)
        i += 1
    result.extend(reversed(high))
    return result

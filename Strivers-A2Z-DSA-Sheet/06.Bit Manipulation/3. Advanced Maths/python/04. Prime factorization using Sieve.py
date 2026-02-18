"""QUESTION:
Prime-factorize N using sieve-style marking.

Approach:
Maintain a boolean array for primality. For each prime i up to sqrt(original N), repeatedly divide N while storing i in the factor list, and mark multiples of i as composite. If the remainder exceeds 1, append it.

Time Complexity: O(N log log N)
Space Complexity: O(N)
"""
from typing import List

def find_prime_factors(n: int) -> List[int]:
    if n <= 1:
        return []
    limit = n
    prime = [True] * (limit + 1)
    ans: List[int] = []
    i = 2
    while i * i <= limit:
        if prime[i]:
            while n % i == 0:
                ans.append(i)
                n //= i
            j = i * i
            while j <= limit:
                prime[j] = False
                j += i
        i += 1
    if n > 1:
        ans.append(n)
    return ans

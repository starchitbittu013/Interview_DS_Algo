"""QUESTION:
Given n, return the count of primes strictly less than n using the Sieve of Eratosthenes.

Approach:
Create a boolean list initialized to True. Traverse from 2 to n-1, and whenever a number remains marked prime, increment the count and mark its multiples starting from i*i as composite.

Time Complexity: O(n log log n)
Space Complexity: O(n)
"""

def count_primes(n: int) -> int:
    if n <= 2:
        return 0
    primes = [True] * n
    cnt = 0
    for i in range(2, n):
        if primes[i]:
            cnt += 1
            j = i * i
            while j < n:
                primes[j] = False
                j += i
    return cnt

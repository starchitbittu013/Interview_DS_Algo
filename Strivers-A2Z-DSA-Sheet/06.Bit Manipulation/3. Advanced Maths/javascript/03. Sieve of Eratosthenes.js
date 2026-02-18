/**
QUESTION:
Given n, return how many primes are strictly less than n using the Sieve of Eratosthenes.

Approach:
Initialize an array of booleans set to true. Traverse from 2 up to n-1, and whenever a number is still marked prime, increment the count and mark all multiples starting from i*i as composite.

Time Complexity: O(n log log n)
Space Complexity: O(n)
*/

function countPrimes(n) {
    if (n <= 2) return 0;
    const primes = new Array(n).fill(true);
    let cnt = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            cnt++;
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    return cnt;
}

module.exports = { countPrimes };

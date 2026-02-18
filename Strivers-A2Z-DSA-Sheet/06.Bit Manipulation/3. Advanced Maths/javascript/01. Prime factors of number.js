/**
QUESTION:
Given a number N, return its unique prime factors in increasing order.

Approach:
Iterate from 2 up to sqrt(N), push every divisor that is prime, and keep dividing N by that divisor to ensure uniqueness. If the remaining N is > 1, it is also a prime factor.

Time Complexity: O(sqrt(N))
Space Complexity: O(1) aside from the output array
*/

function allPrimeFactors(n) {
    const ans = [];
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            ans.push(i);
            while (n % i === 0) {
                n = Math.floor(n / i);
            }
        }
    }
    if (n > 1) ans.push(n);
    return ans;
}

module.exports = { allPrimeFactors };

/**
QUESTION:
Prime-factorize N using sieve logic.

Approach:
Maintain a boolean array for primality. For each prime i up to sqrt(N), repeatedly divide N while pushing i into the result, and mark multiples of i as composite. If the remainder is > 1, append it.

Time Complexity: O(N log log N)
Space Complexity: O(N)
*/

function findPrimeFactors(n) {
    if (n <= 1) return [];
    const original = n;
    const prime = new Array(original + 1).fill(true);
    const ans = [];
    for (let i = 2; i * i <= original; i++) {
        if (prime[i]) {
            while (n % i === 0) {
                ans.push(i);
                n = Math.floor(n / i);
            }
            for (let j = i * i; j <= original; j += i) {
                prime[j] = false;
            }
        }
    }
    if (n > 1) ans.push(n);
    return ans;
}

module.exports = { findPrimeFactors };

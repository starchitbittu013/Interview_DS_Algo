/**
QUESTION:
Given an integer N, return all its divisors in ascending order.

Approach:
Iterate i from 1 to sqrt(N). For each divisor i, push it immediately. If N / i differs from i, store it for later and finally append the stored values in reverse to maintain ascending order.

Time Complexity: O(sqrt(N))
Space Complexity: O(sqrt(N)) for temporary storage
*/

function allDivisors(n) {
    const high = [];
    const result = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
            if (n / i !== i) {
                high.push(n / i);
            }
        }
    }
    for (let j = high.length - 1; j >= 0; j--) {
        result.push(high[j]);
    }
    return result;
}

module.exports = { allDivisors };

/**
QUESTION:
Implement fast exponentiation pow(x, n) via binary exponentiation.

Approach:
Handle base case n = 0. Track sign of exponent; work with absolute n while repeatedly squaring base and multiplying the result when the current bit is set. If exponent was negative, invert the final result.

Time Complexity: O(log |n|)
Space Complexity: O(1)
*/

function myPow(x, n) {
    if (n === 0) return 1;
    let res = 1;
    let exponent = Math.abs(n);
    let base = x;
    while (exponent > 0) {
        if (exponent & 1) {
            res *= base;
        }
        base *= base;
        exponent >>= 1;
    }
    return n < 0 ? 1 / res : res;
}

module.exports = { myPow };

/**
QUESTION:
Given an integer `n`, return true if it is a power of two, otherwise false.

Approach:
A power of two has exactly one set bit. Check `n > 0` and `n & (n - 1)` equals 0.

Time Complexity: O(1)
Space Complexity: O(1)
*/

function isPowerOfTwo(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

module.exports = { isPowerOfTwo };

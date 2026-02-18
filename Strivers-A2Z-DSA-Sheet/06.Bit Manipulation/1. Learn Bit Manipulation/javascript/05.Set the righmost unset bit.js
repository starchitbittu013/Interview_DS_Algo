/**
QUESTION:
Given a non-negative integer `N`, set its rightmost unset bit. If no unset bit exists, return `N` unchanged.

Approach:
If `N + 1` is a power of two, then `N` already has all lower bits set, so return `N`. Otherwise, `N | (N + 1)` sets the rightmost zero bit.

Time Complexity: O(1)
Space Complexity: O(1)
*/

function isPowerOfTwo(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

function setBit(N) {
    if (isPowerOfTwo(N + 1)) return N;
    return N | (N + 1);
}

module.exports = { setBit };

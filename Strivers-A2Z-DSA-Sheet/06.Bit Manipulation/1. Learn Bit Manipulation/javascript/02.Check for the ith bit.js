/**
QUESTION:
Given a number `n` and zero-based bit index `k`, determine if the kth bit is set.

Approach:
Bitwise-AND `n` with (1 << k). A non-zero result indicates that the bit is set.

Time Complexity: O(1)
Space Complexity: O(1)
*/

function checkKthBit(n, k) {
    return (n & (1 << k)) !== 0;
}

module.exports = { checkKthBit };

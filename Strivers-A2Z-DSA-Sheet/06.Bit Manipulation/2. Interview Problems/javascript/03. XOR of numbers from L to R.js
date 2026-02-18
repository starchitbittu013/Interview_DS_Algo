/**
Question:
Find the XOR of all integers in the inclusive range [L, R].

Approach:
Use the observed pattern for XOR of numbers from 0..n (or 1..n) based on n % 4, then compute XOR(R) ^ XOR(L-1).

Time Complexity: O(1)
Space Complexity: O(1)
*/

function calculateXOR(n) {
    if (n % 4 === 0) return n;
    if (n % 4 === 1) return 1;
    if (n % 4 === 2) return n + 1;
    return 0;
}

function findXOR(L, R) {
    const uptoLMinus1 = calculateXOR(L - 1);
    const uptoR = calculateXOR(R);
    return uptoR ^ uptoLMinus1;
}

module.exports = { findXOR };

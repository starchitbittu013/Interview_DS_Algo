/**
QUESTION:
Given `N`, compute the total number of set bits in all integers from 1 to N (inclusive).

Approach:
Use the recursive formula based on the highest power of two <= N:
countSetBits(n) = (2^{x-1} * x) + (n - 2^x + 1) + countSetBits(n - 2^x),
where x = floor(log2(n)).

Time Complexity: O(log n)
Space Complexity: O(log n) recursion depth
*/

function countSetBits(n) {
    if (n <= 1) return n;
    const x = Math.floor(Math.log2(n));
    const highestPower = 1 << x;
    const uptoPowerContribution = (highestPower >> 1) * x;
    const msbContribution = n - highestPower + 1;
    const remainder = n - highestPower;
    return uptoPowerContribution + msbContribution + countSetBits(remainder);
}

module.exports = { countSetBits };

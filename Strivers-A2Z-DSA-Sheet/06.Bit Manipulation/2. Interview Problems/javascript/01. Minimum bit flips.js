/**
QUESTION:
Given two integers `start` and `goal`, return the minimum number of bit flips required to convert `start` to `goal`.

Approach:
Count the positions where the bits differ. Shift both numbers right and compare the least-significant bits until all 32 positions are processed.

Time Complexity: O(1) (32 iterations)
Space Complexity: O(1)
*/

function minBitFlips(start, goal) {
    let i = 0;
    let cnt = 0;
    while (i < 32) {
        const startBit = (start >> i) & 1;
        const goalBit = (goal >> i) & 1;
        if (startBit !== goalBit) cnt++;
        i++;
    }
    return cnt;
}

module.exports = { minBitFlips };

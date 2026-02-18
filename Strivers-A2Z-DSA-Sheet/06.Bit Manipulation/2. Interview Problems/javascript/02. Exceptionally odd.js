/**
QUESTION:
Given an array of positive integers where every value appears an even number of times except one, return that exceptional value.

Approach:
Bitwise XOR all elements. Pairs cancel out (x ^ x = 0), so the remaining value is the element with odd frequency.

Time Complexity: O(n)
Space Complexity: O(1)
*/

function getOddOccurrence(arr) {
    let xr = 0;
    for (const num of arr) {
        xr ^= num;
    }
    return xr;
}

module.exports = { getOddOccurrence };

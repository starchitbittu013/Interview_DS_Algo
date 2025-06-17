// 1922. Count Good Numbers

// A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

// For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
// Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

// A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

 

// Example 1:

// Input: n = 1
// Output: 5
// Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
// Example 2:

// Input: n = 4
// Output: 400
// Example 3:

// Input: n = 50
// Output: 564908303
 

// Constraints:

// 1 <= n <= 1015


/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n;

    function power(base, exponent) {
        base = BigInt(base);
        exponent = BigInt(exponent);

        if (exponent === 0n) return 1n;

        const half = power(base, exponent / 2n);
        const result = (half * half) % MOD;

        if (exponent % 2n === 0n) {
            return result;
        } else {
            return (result * base) % MOD;
        }
    }

    const evenCount = Math.ceil(n / 2);
    const oddCount = Math.floor(n / 2);

    const evenWays = power(5, evenCount);
    const oddWays = power(4, oddCount);

    return Number((evenWays * oddWays) % MOD);
};

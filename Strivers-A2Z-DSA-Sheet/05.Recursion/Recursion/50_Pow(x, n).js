// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n < 0) return 1 / myPow(x, -n);

    while(n > 0) {
        if(n % 2 === 0) {
            const half = myPow(x, n / 2);
            return half * half;
        } else {
            let result = myPow(x, n - 1);
            return x * result;
        }
    }
};

// ✅ Enhanced Implementation: Exponentiation by Squaring
/**
 * Computes x raised to the power n (x^n) using Exponentiation by Squaring.
 * @param {number} x - The base number.
 * @param {number} n - The exponent (can be negative).
 * @return {number} - The result of x raised to the power n.
 */
var myPow = function(x, n) {
    // Handle base cases
    if (n === 0) return 1;
    if (x === 0) return 0;

    // Handle negative exponents
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Recursive function for exponentiation by squaring
    function power(base, exponent) {
        if (exponent === 0) return 1;
        let half = power(base, Math.floor(exponent / 2));
        if (exponent % 2 === 0) {
            return half * half;
        } else {
            return half * half * base;
        }
    }

    return power(x, n);
};


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;

    let isNegative = n < 0;
    let power = Math.abs(n);

    function fastPow(base, exponent) {
        if (exponent === 0) return 1;
        let half = fastPow(base, Math.floor(exponent / 2));
        if (exponent % 2 === 0) {
            return half * half;
        } else {
            return half * half * base;
        }
    }

    let result = fastPow(x, power);
    return isNegative ? 1 / result : result;
};



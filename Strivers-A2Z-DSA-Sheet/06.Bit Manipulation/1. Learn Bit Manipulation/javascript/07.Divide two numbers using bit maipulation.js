/**
QUESTION:
Divide two integers `dividend` and `divisor` without using multiplication, division, or modulus.

Approach:
Work with absolute values and repeatedly subtract the largest shifted divisor from the dividend, building the quotient bit by bit. Track the sign separately.

Time Complexity: O(log n)
Space Complexity: O(1)
*/

function divideTwoInteger(dividend, divisor) {
    if (divisor === 0) throw new Error("Division by zero");
    if (dividend === divisor) return 1;

    const isNegative = (dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0);
    let a = Math.abs(dividend);
    const b = Math.abs(divisor);
    let ans = 0;

    while (a >= b) {
        let q = 1;
        while (a > (b << q)) q++;
        ans += (1 << (q - 1));
        a -= (b << (q - 1));
    }

    return isNegative ? -ans : ans;
}

module.exports = { divideTwoInteger };

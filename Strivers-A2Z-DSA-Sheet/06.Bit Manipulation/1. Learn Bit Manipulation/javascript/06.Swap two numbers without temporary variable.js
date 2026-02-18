/**
QUESTION:
Swap two integers `a` and `b` without using a temporary variable.

Approach:
Use XOR swapping:
1. a = a ^ b
2. b = a ^ b
3. a = a ^ b

Time Complexity: O(1)
Space Complexity: O(1)
*/

function swapWithoutTemp(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return { a, b };
}

module.exports = { swapWithoutTemp };

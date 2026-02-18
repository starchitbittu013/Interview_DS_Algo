/**
QUESTION:
Given a positive integer `N`, determine whether it is odd or even.

Approach:
Check the least-significant bit via `N & 1`. If it equals 1, N is odd; otherwise, it is even.

Time Complexity: O(1)
Space Complexity: O(1)
*/

function oddEven(N) {
    return (N & 1) ? "odd" : "even";
}

module.exports = { oddEven };

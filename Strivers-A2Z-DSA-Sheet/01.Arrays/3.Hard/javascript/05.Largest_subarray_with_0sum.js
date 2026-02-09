/*
QUESTION:
Given an array with both positive and negative integers, we need to compute the length of the largest subarray with a sum of 0.

Example:
Input:
N = 8
A[] = {15, -2, 2, -8, 1, 7, 10, 23}
Output: 5
Explanation: The largest subarray with a sum of 0 will be -2, 2, -8, 1, 7.
*/

function maxLen(A, n) {
    const mp = new Map();
    mp.set(0, -1);
    let pref_sum = 0;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        pref_sum += A[i];
        if (mp.has(pref_sum)) {
            ans = Math.max(ans, i - mp.get(pref_sum));
        }
        else {
            mp.set(pref_sum, i);
        }
    }

    return ans;
}

/*
TIME COMPLEXITY: O(n), where n is the size of the input array A.
SPACE COMPLEXITY: O(n), as we are using a map to store the prefix sums and their corresponding indices.
*/

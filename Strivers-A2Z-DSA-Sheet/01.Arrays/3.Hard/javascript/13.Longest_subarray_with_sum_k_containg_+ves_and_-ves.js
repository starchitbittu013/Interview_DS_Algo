/*
Question:
Given an array containing N integers and an integer K, find the length of the longest subarray with the sum of the elements equal to K.

Example:
Input:
A[] = {10, 5, 2, 7, 1, 9}
K = 15
Output:
4
Explanation:
The sub-array is {5, 2, 7, 1}.
*/

function lenOfLongSubarr(A, N, K) {
    let pref_sum = 0;
    let ans = 0;
    const mp = new Map();

    for (let i = 0; i < N; i++) {
        pref_sum += A[i];
        if (pref_sum === K)
            ans = Math.max(ans, i + 1);
        if (mp.has(pref_sum - K))
            ans = Math.max(ans, i - mp.get(pref_sum - K));
        if (!mp.has(pref_sum))
            mp.set(pref_sum, i);
    }
    return ans;
}

/*
Time Complexity: O(N), where N is the size of the array.
Space Complexity: O(N) to store the prefix sums in the map.
*/

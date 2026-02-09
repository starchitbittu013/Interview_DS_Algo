/*
QUESTION:-
You are given an array 'A' of size 'N' and an integer 'K'. You need to print the length of the longest subarray of array 'A' whose sum = 'K'.
Example:
Input: 'N' = 7 'K' = 3
'A' = [1, 2, 3, 1, 1, 1, 1]
Output: 3
Explanation: Subarrays whose sum = '3' are:
[1, 2], [3], [1, 1, 1], [1, 1, 1]
Here, the length of the longest subarray is 3, which is our final answer.
*/

/*
APPROACH:-
-> Use sliding window approach using two pointers start and end
-> Run a loop to traverse the entire array add from end and subtract from start when sum>k
-> If sum==k then, update the ans now, window size = end-start+1
*/

// CODE:-
function longestSubarrayWithSumK(a, k) {
    let start = 0;
    let ans = 0;
    let sum = 0;
    const n = a.length;

    for (let end = 0; end < n; end++) {
        sum += a[end];
        while (sum > k) {
            sum -= a[start];
            start++;
        }
        if (sum === k) {
            ans = Math.max(ans, end - start + 1);
        }
    }
    return ans;
}

// TIME COMPLEXITY = O(N)
// SPACE COMPLEXITY = O(1)

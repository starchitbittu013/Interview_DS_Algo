/*
QUESTION:
Given a string 'str' and an integer 'K', find the length of the largest substring with at most 'K' distinct characters.

EXAMPLE:
For example, if we are given 'str' = "abbbbbbc" and 'K' = 2, the substrings that can be formed are ["abbbbbb", "bbbbbbc"]. Hence, the answer is 7.

APPROACH:
We can use a sliding window approach to solve this problem.

1. Create a function, kDistinctChars, that takes 'k' and the input string 's' as parameters.
   - Initialize a Map, mp, to store the frequency of characters.
   - Initialize 'start' to 0 and 'ans' to 0.
   - Iterate over the string from left to right:
     - Increment the frequency of the current character in the map.
     - If the number of distinct characters in the map exceeds 'k', move the 'start' pointer to the right and remove characters from the map until the number of distinct characters becomes equal to 'k'.
     - Update 'ans' with the maximum length of the substring (i - start + 1).
   - Return 'ans', which represents the length of the largest substring with at most 'k' distinct characters.

COMPLEXITY ANALYSIS:
- Time complexity: O(n), where n is the length of the string 's'. We iterate over the string once using the sliding window approach.
- Space complexity: O(k), as the space used by the Map is proportional to the number of distinct characters, which can be at most 'k'.
*/

/**
 * @param {number} k
 * @param {string} s
 * @return {number}
 */
var kDistinctChars = function(k, s) {
    const mp = new Map();
    let start = 0, ans = 0;

    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);

        while (mp.size > k) {
            mp.set(s[start], mp.get(s[start]) - 1);

            if (mp.get(s[start]) === 0)
                mp.delete(s[start]);

            start++;
        }

        ans = Math.max(ans, i - start + 1);
    }

    return ans;
};

/*
===================================================================================
BRUTE FORCE APPROACH
===================================================================================

APPROACH EXPLANATION:
- We generate all possible substrings using two nested loops.
- For each substring, we count the number of distinct characters.
- We use a hash map (or Set) to track distinct characters in the current substring.
- For every starting index i, we iterate through all ending indices j.
- At each step, we add the current character to our hash map.
- If the number of distinct characters (hash map size) is <= k, we update the
  maximum length.
- If it exceeds k, we break out of the inner loop since extending further will
  only add more characters.
- This approach checks every possible substring, making it inefficient for large inputs.

TIME COMPLEXITY: O(n^2) - Two nested loops to generate all substrings.
SPACE COMPLEXITY: O(k) - Hash map stores at most k distinct characters.
*/

/**
 * @param {number} k
 * @param {string} s
 * @return {number}
 */
function kDistinctCharsBrute(k, s) {
    const n = s.length;
    let maxLen = 0;

    // Iterate over all possible starting indices
    for (let i = 0; i < n; i++) {
        // Hash map to track distinct characters in current substring
        const charCount = new Map();

        // Iterate over all possible ending indices
        for (let j = i; j < n; j++) {
            // Add current character to map
            charCount.set(s[j], (charCount.get(s[j]) || 0) + 1);

            // If distinct characters <= k, update maximum length
            if (charCount.size <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                // More than k distinct characters, no point extending further
                break;
            }
        }
    }

    return maxLen;
}

/*
===================================================================================
BETTER APPROACH (Sliding Window with while loop)
===================================================================================

APPROACH EXPLANATION:
- We use a sliding window with two pointers: left (l) and right (r).
- We expand the window by moving the right pointer and adding characters to a hash map.
- The hash map stores the frequency of each character in the current window.
- When the number of distinct characters (map size) exceeds k:
  - We shrink the window from the left by decrementing frequency of s[l].
  - If frequency becomes 0, we remove that character from the map.
  - We increment the left pointer.
  - We continue shrinking until distinct characters become <= k.
- At each step (when window is valid), we update the maximum length.
- The while loop ensures we always have at most k distinct characters before
  calculating the length.

TIME COMPLEXITY: O(2n) ≈ O(n) - Each character is visited at most twice (once by r, once by l).
SPACE COMPLEXITY: O(k) - Hash map stores at most k distinct characters.
*/

/**
 * @param {number} k
 * @param {string} s
 * @return {number}
 */
function kDistinctCharsBetter(k, s) {
    const n = s.length;
    let maxLen = 0;
    let l = 0;
    const charCount = new Map();

    for (let r = 0; r < n; r++) {
        // Add current character to the window
        charCount.set(s[r], (charCount.get(s[r]) || 0) + 1);

        // Shrink window while we have more than k distinct characters
        while (charCount.size > k) {
            // Decrement frequency of leftmost character
            charCount.set(s[l], charCount.get(s[l]) - 1);

            // If frequency becomes 0, remove from map
            if (charCount.get(s[l]) === 0) {
                charCount.delete(s[l]);
            }

            // Move left pointer
            l++;
        }

        // Update maximum length (window is now valid with <= k distinct chars)
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}

/*
===================================================================================
OPTIMAL APPROACH (Sliding Window without shrinking completely)
===================================================================================

APPROACH EXPLANATION:
- The better approach shrinks the window completely until it becomes valid again.
- The optimal approach makes a key observation: we only care about the MAXIMUM length.
- Instead of shrinking completely with a while loop, we use an if statement to
  shrink by just one character.
- When distinct characters exceed k:
  - We remove one character from the left (decrement frequency, delete if 0).
  - We move left pointer by 1.
  - We DON'T continue shrinking - we just maintain the window size.
- Why this works:
  - If current window is invalid (> k distinct), we don't update maxLen.
  - We only shrink by 1, so the window size stays the same or grows.
  - Once we've found a valid window of size X, we never consider smaller windows.
  - We're essentially looking for a window that can be LARGER than our current max.
- This avoids unnecessary shrinking when we already have a larger valid window.

TIME COMPLEXITY: O(n) - Each character is visited exactly once by each pointer.
SPACE COMPLEXITY: O(k) - Hash map stores at most k distinct characters.
*/

/**
 * @param {number} k
 * @param {string} s
 * @return {number}
 */
function kDistinctCharsOptimal(k, s) {
    const n = s.length;
    let maxLen = 0;
    let l = 0;
    const charCount = new Map();

    for (let r = 0; r < n; r++) {
        // Add current character to the window
        charCount.set(s[r], (charCount.get(s[r]) || 0) + 1);

        // If more than k distinct characters, shrink by ONE from left
        if (charCount.size > k) {
            // Decrement frequency of leftmost character
            charCount.set(s[l], charCount.get(s[l]) - 1);

            // If frequency becomes 0, remove from map
            if (charCount.get(s[l]) === 0) {
                charCount.delete(s[l]);
            }

            // Move left pointer by 1
            l++;
        }

        // Update maximum length only if window is valid
        // Since we only shrink by 1, window might still be invalid
        // But that's okay - we just won't update maxLen in that case
        if (charCount.size <= k) {
            maxLen = Math.max(maxLen, r - l + 1);
        }
    }

    return maxLen;
}

/*
===================================================================================
EXAMPLE WALKTHROUGH:

For s = "aaabbccd", k = 2:

OPTIMAL APPROACH:
Initial: l = 0, maxLen = 0, charCount = {}

r=0, s[r]='a': charCount = {a:1}, size=1 <= 2, maxLen = max(0, 1) = 1
r=1, s[r]='a': charCount = {a:2}, size=1 <= 2, maxLen = max(1, 2) = 2
r=2, s[r]='a': charCount = {a:3}, size=1 <= 2, maxLen = max(2, 3) = 3
r=3, s[r]='b': charCount = {a:3, b:1}, size=2 <= 2, maxLen = max(3, 4) = 4
r=4, s[r]='b': charCount = {a:3, b:2}, size=2 <= 2, maxLen = max(4, 5) = 5
r=5, s[r]='c': charCount = {a:3, b:2, c:1}, size=3 > 2
    - Remove s[0]='a': charCount = {a:2, b:2, c:1}, l=1
    - size=3 > 2, don't update maxLen
r=6, s[r]='c': charCount = {a:2, b:2, c:2}, size=3 > 2
    - Remove s[1]='a': charCount = {a:1, b:2, c:2}, l=2
    - size=3 > 2, don't update maxLen
r=7, s[r]='d': charCount = {a:1, b:2, c:2, d:1}, size=4 > 2
    - Remove s[2]='a': charCount = {b:2, c:2, d:1}, l=3
    - size=3 > 2, don't update maxLen

Answer: 5 (substring "aaabb" with 2 distinct characters: 'a' and 'b')
===================================================================================
*/

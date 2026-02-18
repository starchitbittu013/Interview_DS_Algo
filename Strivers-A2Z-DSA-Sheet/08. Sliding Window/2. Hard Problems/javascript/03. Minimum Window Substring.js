/*
QUESTION:
Given two strings 's' and 't' of lengths 'm' and 'n' respectively, find the minimum window substring of 's' that contains all the characters of 't' (including duplicates). If there is no such substring, return an empty string.

EXAMPLE:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string 't'.

APPROACH:
We can solve this problem using a sliding window approach.

1. Create a function, minWindow, that takes 's' and 't' as parameters.
   - Initialize a Map, mp, to store the frequency of characters in 't'.
   - Iterate over 't' and update the frequencies in the map.
   - Initialize 'count' to the number of unique characters in 't'.
   - Initialize 'start' to 0 and 'minlen' to Infinity.
   - Initialize 'substrBegin' to 0, which represents the starting index of the minimum window substring.
   - Iterate over 's' from left to right:
     - Decrement the frequency of the current character in the map.
     - If the frequency becomes 0, decrement 'count'.
     - Check if 'count' becomes 0, indicating that we have found a window containing all characters of 't'.
       - If the current window length is smaller than 'minlen', update 'minlen' and 'substrBegin' to the current window length and starting index respectively.
       - Move the 'start' pointer to the right, increment the frequency of the character at 'start' in the map, and increment 'count' if the frequency becomes greater than 0.
   - Return the minimum window substring by using the substring function on 's' with 'substrBegin' and 'minlen' as parameters.
   - If 'minlen' is still Infinity, return an empty string.

COMPLEXITY ANALYSIS:
- Time complexity: O(m + n), where m is the length of 's' and n is the length of 't'. We iterate over both strings once using the sliding window approach.
- Space complexity: O(n), as the space used by the Map is proportional to the number of unique characters in 't', which can be at most 'n'.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const mp = new Map();

    for (const char of t) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }

    let count = mp.size;
    let start = 0, minlen = Infinity;
    let substrBegin = 0;

    for (let i = 0; i < s.length; i++) {
        if (mp.has(s[i])) {
            mp.set(s[i], mp.get(s[i]) - 1);

            if (mp.get(s[i]) === 0)
                count--;
        }

        while (count === 0) {
            if (i - start + 1 < minlen) {
                substrBegin = start;
                minlen = i - start + 1;
            }

            if (mp.has(s[start])) {
                mp.set(s[start], mp.get(s[start]) + 1);

                if (mp.get(s[start]) > 0) {
                    count++;
                }
            }

            start++;
        }
    }

    return (minlen === Infinity) ? "" : s.substring(substrBegin, substrBegin + minlen);
};


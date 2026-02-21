/*
QUESTION:
Given two strings 's' and 't' of lengths 'm' and 'n' respectively,
find the minimum window substring of 's' that contains all the characters of 't' (including duplicates).
If there is no such substring, return an empty string.

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
       - If the current window length is smaller than 'minlen', update 'minlen' and
       'substrBegin' to the current window length and starting index respectively.
       - Move the 'start' pointer to the right, increment the frequency of the character at 'start' in the map,
       and increment 'count' if the frequency becomes greater than 0.
   - Return the minimum window substring by using the substring function on 's' with 'substrBegin' and 'minlen' as parameters.
   - If 'minlen' is still Infinity, return an empty string.

COMPLEXITY ANALYSIS:
- Time complexity: O(m + n), where m is the length of 's' and n is the length of 't'.
    We iterate over both strings once using the sliding window approach.
- Space complexity: O(n), as the space used by the Map is proportional to the number of unique characters in 't',
    which can be at most 'n'.
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


/*
===================================================================================
BRUTE FORCE APPROACH
===================================================================================

APPROACH EXPLANATION:
- We generate all possible substrings of string 's' using two nested loops.
- For each substring, we check if it contains all characters of string 't'.
- To check if a substring contains all characters of 't':
  - We create a hash map of character frequencies from 't'.
  - We iterate through the substring and decrement frequencies.
  - If all frequencies become 0 or negative, the substring is valid.
- We track the minimum length valid substring and its starting index.
- For every starting index i, we iterate through all ending indices j.
- At each step, we check if the current substring [i, j] contains all chars of 't'.
- If valid and shorter than current minimum, we update our answer.

TIME COMPLEXITY: O(n^2 * m) - Two nested loops for substrings, O(m) to check each.
                 Where n = length of s, m = length of t.
SPACE COMPLEXITY: O(m) - Hash map to store character frequencies of t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindowBrute(s, t) {
    const n = s.length;
    const m = t.length;

    if (m > n) return "";

    let minLen = Infinity;
    let startIndex = -1;

    // Generate all substrings starting at index i
    for (let i = 0; i < n; i++) {
        // Create frequency map for string t
        const hash = new Map();
        for (const char of t) {
            hash.set(char, (hash.get(char) || 0) + 1);
        }

        let count = m; // Total characters needed to match

        // Extend substring to index j
        for (let j = i; j < n; j++) {
            // If current character is needed (frequency > 0), decrement count
            if (hash.has(s[j]) && hash.get(s[j]) > 0) {
                count--;
            }

            // Decrement frequency (can go negative for extra occurrences)
            if (hash.has(s[j])) {
                hash.set(s[j], hash.get(s[j]) - 1);
            }

            // If all characters matched, check if this is minimum
            if (count === 0) {
                const currentLen = j - i + 1;
                if (currentLen < minLen) {
                    minLen = currentLen;
                    startIndex = i;
                }
                // Found valid window starting at i, no need to extend further
                break;
            }
        }
    }

    return startIndex === -1 ? "" : s.substring(startIndex, startIndex + minLen);
}

/*
===================================================================================
OPTIMAL APPROACH (Sliding Window with Two Pointers)
===================================================================================

APPROACH EXPLANATION:
- We use a sliding window approach with two pointers: left (l) and right (r).
- Key Idea: Expand the window by moving 'r' until we have all characters of 't'.
  Then shrink from left by moving 'l' to find the minimum valid window.

- Algorithm:
  1. Use a frequency array of size 256 (for all ASCII characters) instead of a Map.
  2. Store the frequency of each character in 't' in the freq array.
  3. Maintain a 'count' variable that tracks how many characters of 't' are matched.
  4. Expand window (move r):
     - If freq[s[r]] > 0, it means this character is needed, so increment count.
     - Decrement freq[s[r]] (mark as used, can go negative for extra occurrences).
  5. When count equals t.length (all characters matched):
     - Update minimum length if current window is smaller.
     - Try to shrink window from left (move l):
       - Increment freq[s[l]] (restore the character).
       - If freq[s[l]] > 0, it means we removed a required character, so decrement count.
       - Move l forward.
     - Continue shrinking while count equals t.length.
  6. Continue expanding until r reaches end of s.

- Why frequency can go negative:
  - Characters not in 't' will have freq 0 initially, and will go negative when seen.
  - Characters in 't' seen more times than needed will also go negative.
  - We only increment count when freq > 0 (character was actually needed).
  - We only decrement count when freq becomes > 0 after restoration (lost a needed char).

TIME COMPLEXITY: O(n + m) - Each character in s is visited at most twice
                 (once by r, once by l). Building freq array takes O(m).
SPACE COMPLEXITY: O(1) - Fixed size array of 256 elements (constant space).
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindowOptimal(s, t) {
    if (s.length < t.length) return "";

    // Frequency array for all ASCII characters
    const freq = new Array(256).fill(0);

    // Store frequency of characters of t
    for (const ch of t) {
        freq[ch.charCodeAt(0)]++;
    }

    let l = 0;              // Left pointer
    let r = 0;              // Right pointer
    let count = 0;          // Characters matched so far
    let minLen = Infinity;  // Minimum window length found
    let startIndex = -1;    // Starting index of minimum window

    while (r < s.length) {
        // If character is needed (freq > 0 means it's required)
        if (freq[s.charCodeAt(r)] > 0) {
            count++;
        }

        // Decrease freq (mark as used, can go negative)
        freq[s.charCodeAt(r)]--;

        // When all characters of t are matched
        while (count === t.length) {
            // Update minimum if current window is smaller
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                startIndex = l;
            }

            // Remove left character (restore its frequency)
            freq[s.charCodeAt(l)]++;

            // If character becomes needed again (freq > 0)
            if (freq[s.charCodeAt(l)] > 0) {
                count--;
            }

            // Move left pointer
            l++;
        }

        // Move right pointer
        r++;
    }

    return startIndex === -1
        ? ""
        : s.substring(startIndex, startIndex + minLen);
}

/*
===================================================================================
EXAMPLE WALKTHROUGH:

For s = "ADOBECODEBANC", t = "ABC":

Initial:
- freq array: freq['A']=1, freq['B']=1, freq['C']=1 (rest are 0)
- count = 0, l = 0, r = 0, minLen = Infinity

Expanding (moving r):
--------------------------------------------------
r=0 (A): freq['A']=1 > 0 → count=1, freq['A']=0
r=1 (D): freq['D']=0 → count=1, freq['D']=-1
r=2 (O): freq['O']=0 → count=1, freq['O']=-1
r=3 (B): freq['B']=1 > 0 → count=2, freq['B']=0
r=4 (E): freq['E']=0 → count=2, freq['E']=-1
r=5 (C): freq['C']=1 > 0 → count=3 ✓ ALL MATCHED!

Shrinking (count === 3):
  Window "ADOBEC" [0,5], len=6 → minLen=6, startIndex=0
  l=0 (A): freq['A']=1 > 0 → count=2, l=1 (exit while)

r=6 (O): freq['O']=-1 → count=2
r=7 (D): freq['D']=-1 → count=2
r=8 (E): freq['E']=-1 → count=2
r=9 (B): freq['B']=0 → count=2, freq['B']=-1
r=10(A): freq['A']=1 > 0 → count=3 ✓ ALL MATCHED!

Shrinking (count === 3):
  Window [1,10], len=10 > 6 (no update)
  l=1 (D): freq['D']=0 → count=3, l=2
  l=2 (O): freq['O']=0 → count=3, l=3
  l=3 (B): freq['B']=0 → count=3, l=4
  l=4 (E): freq['E']=0 → count=3, l=5
  l=5 (C): freq['C']=1 > 0 → count=2, l=6 (exit while)

r=11(N): freq['N']=0 → count=2, freq['N']=-1
r=12(C): freq['C']=1 > 0 → count=3 ✓ ALL MATCHED!

Shrinking (count === 3):
  Window [6,12], len=7 > 6 (no update)
  l=6 (O): freq['O']=0 → count=3, l=7
  l=7 (D): freq['D']=0 → count=3, l=8
  l=8 (E): freq['E']=0 → count=3, l=9
  Window "BANC" [9,12], len=4 < 6 → minLen=4, startIndex=9
  l=9 (B): freq['B']=1 > 0 → count=2, l=10 (exit while)

End of string.

Answer: s.substring(9, 13) = "BANC"
===================================================================================
*/

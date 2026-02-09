// 1781. Sum of Beauty of All Substrings

// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.

 

// Example 1:

// Input: s = "aabcb"
// Output: 5
// Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
// Example 2:

// Input: s = "aabcbaa"
// Output: 17
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let n = s.length;

    let sum = 0;

    for(let i = 0; i < n; i++) {
        let map = new Map();

        for(let j = i; j < n; j++) {
            let least = Infinity, most = -Infinity;
            map.set(s[j], (map.get(s[j]) || 0) + 1);

            for(let [key, count] of map) {
                if(count > most) {
                    most = count;
                }
                if(count < least) {
                    least = count;
                }
            }
            
            sum += most - least;
        }
    }
    return sum;
};

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let n = s.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Map();

        for (let j = i; j < n; j++) {
            freq.set(s[j], (freq.get(s[j]) || 0) + 1);

            let maxFreq = -Infinity;
            let minFreq = Infinity;

            for (let [key, count] of freq) {
                maxFreq = Math.max(maxFreq, count);
                minFreq = Math.min(minFreq, count);
            }

            sum += maxFreq - minFreq;
        }
    }
    return sum;
};


// Optimized to n^2, Since the problem says s consists of lowercase letters, we can use a fixed array of size 26.

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let n = s.length;

    let sum = 0;

    for(let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);

        for(let j = i; j < n; j++) {
            freq[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

            let maxFreq = 0, minFreq = Infinity;

            for(let count of freq) {
                if(count > 0) {
                    maxFreq = Math.max(maxFreq, count);
                    minFreq = Math.min(minFreq, count);
                }
            }
            
            sum += maxFreq - minFreq;
        }
    }
    return sum;
};


// I'll show you the crazy-fast Sliding Window idea for beautySum.
// It's a bit advanced, but once you get it — it's beautiful and powerful. 🌟

// 🧠 Idea:
// Normally, for every (i,j) substring, you restart and calculate frequencies from scratch.

// Sliding Window optimization says:

// Keep extending the window (i..j).

// Update frequency array as you grow j.

// Don't restart for every i,j.

// Recalculate maxFreq and minFreq smartly incrementally.

// But...
// ⚡ beautySum is still O(n²) at least, because we need all substrings.
// We can only optimize constant factors, not change time complexity to O(n) — because you must consider all substrings.

// Here's Sliding Window Optimized version:

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let n = s.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);
        let maxFreq = 0; // maintain max during sliding window

        for (let j = i; j < n; j++) {
            let idx = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
            freq[idx]++;

            maxFreq = Math.max(maxFreq, freq[idx]);

            let minFreq = Infinity;
            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    minFreq = Math.min(minFreq, freq[k]);
                }
            }

            sum += (maxFreq - minFreq);
        }
    }

    return sum;
};
// 🔥 Key Points:

// Before	                                After Sliding Window
// Every i,j, build Map from scratch	    Reuse frequency array across i,j
// Recalculate max, min fully	            Smart maintain maxFreq incrementally
// Heavier O(n³) when naive	Much faster O(n²) even on huge strings
// ⚡ Even faster tip:
// If you wanted even crazier optimization,
// you can skip checking minFreq when only one character exists —
// because then beauty is always 0 (max = min).

// 🧪 Example Walkthrough:
// Take s = "aabcb"

// First i = 0:


// j	freq	            maxFreq	 minFreq	beauty
// 0	{a:1}	                1	      1	        0
// 1	{a:2}	                2	      2	        0
// 2	{a:2, b:1}	            2	      1	        1
// 3	{a:2, b:1, c:1}	        2	      1	        1
// 4	{a:2, b:2, c:1}	        2	      1	        1
// And similarly for other starting points.

// 🥇 TL;DR
// Beauty Sum must consider all substrings.

// We can optimize frequency counting using a sliding window array.

// Final runtime stays O(n²) but becomes blazing fast ⚡.


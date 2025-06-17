// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n =  haystack.length;
    let m =  needle.length;

    let j = 0;

    for (let i = 0; i <n; i++) {
        if (haystack[i] === needle[j]) {
        if (j === m - 1) {
            return i - j;
        }
        j++;
        } else {
        i = i - j;
        j = 0;
        }
    }
    return -1;
};

console.log(strStr( "leetcode", "leeto"));

// Knuth-Morris-Pratt (KMP) Algorithm:

// The KMP algorithm is an efficient algorithm for searching for occurrences of a pattern within a text string. 
// It avoids unnecessary character comparisons by utilizing a "failure" array (also known as the "prefix table" or "lps" array)
// that stores information about the pattern's proper prefixes and suffixes.

// Preprocessing Phase:

// Create the "failure" array lps (Longest Prefix that is also a Suffix) for the pattern needle.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    const lps = buildLPSArray(needle);
    let i = 0; // Index for haystack
    let j = 0; // Index for needle

    while (i < haystack.length) {
        if (needle[j] === haystack[i]) {
            i++;
            j++;
        }

        if (j === needle.length) {
            return i - j; // Pattern found, return starting index
        } else if (i < haystack.length && needle[j] !== haystack[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // Pattern not found
}

function buildLPSArray(needle) {
    const lps = [0]; // lps[0] is always 0
    let len = 0; // Length of the previous longest prefix suffix

    for (let i = 1; i < needle.length; ) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

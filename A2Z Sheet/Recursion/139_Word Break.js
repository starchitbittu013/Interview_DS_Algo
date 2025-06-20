// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Helper to check if s[from...to] matches any word in dictionary
    function isInDict(start, end) {
        for (let i = 0; i < wordDict.length; i++) {
            const word = wordDict[i];

            // Compare character by character
            if (word.length !== (end - start + 1)) continue;

            let matched = true;
            for (let j = 0; j < word.length; j++) {
                if (s[start + j] !== word[j]) {
                    matched = false;
                    break;
                }
            }

            if (matched) return true;
        }
        return false;
    }

    function canBreak(index) {
        if (index === s.length) return true;

        for (let end = index; end < s.length; end++) {
            if (isInDict(index, end)) {
                if (canBreak(end + 1)) return true;
            }
        }
        return false;
    }

    return canBreak(0);
};

// 🧮 Time Complexity
// Worst-case time: O(2^n) without memoization.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);   // Use Set for O(1) lookup
    const memo = new Array(s.length).fill(undefined);  // memo[i] stores if s[i:] can be broken

    function canBreak(index) {
        if (index === s.length) return true; // Reached end successfully

        if (memo[index] !== undefined) return memo[index]; // Return cached result

        for (let end = index + 1; end <= s.length; end++) {
            const substring = s.substring(index, end);
            if (wordSet.has(substring) && canBreak(end)) {
                memo[index] = true;
                return true;
            }
        }

        memo[index] = false;
        return false;
    }

    return canBreak(0);
};

// 📌 Time and Space Complexity:
// Time: O(n²) — where n is the length of s. For each index, you may try all possible end indices.

// Space: O(n) for memoization and recursion stack.
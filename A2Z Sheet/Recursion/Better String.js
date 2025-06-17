// Better String

// Given a pair of strings s1 and s2 of equal lengths, your task is to find which of the two strings has more distinct subsequences. If both strings have the same number of distinct subsequences, return s1.

// Examples:

// Input: s1 = "gfg", s2 = "ggg"
// Output: "gfg"
// Explanation: "gfg" have 6 distinct subsequences whereas "ggg" have 3 distinct subsequences. 
// Input: s1 = "a", s2 = "b"
// Output: "a"
// Explanation: Both the strings have only 1 distinct subsequence.
// Constraints:
// 1 <= n <= 30


class Solution {
    betterString(s1, s2) {
        // code here
        const count1 = this.countDistinctSubsequences(s1);
        const count2 = this.countDistinctSubsequences(s2);

        return count2 > count1 ? s2 : s1;
    }
    
    countDistinctSubsequences(str) {
        let set = new Set();
        this.recurse(0, '', str, set);
        return set.size;
    }
    
    recurse(index, current, str, set) {
        if(index === str.length) {
            set.add(current);
            return;
        }
        
        this.recurse(index + 1, current + str[index], str, set);
        this.recurse(index + 1, current, str, set);
    }
}

class Solution {
    betterString(s1, s2) {
        const count1 = this.countDistinctSubsequences(s1);
        const count2 = this.countDistinctSubsequences(s2);

        return count2 > count1 ? s2 : s1;
    }

    countDistinctSubsequences(str) {
        const set = new Set();
        const memo = new Map(); // Key: index + "_" + current

        const recurse = (index, current) => {
            const key = index + "_" + current;
            if (memo.has(key)) return;

            if (index === str.length) {
                set.add(current);
                return;
            }

            // Include current character
            recurse(index + 1, current + str[index]);

            // Exclude current character
            recurse(index + 1, current);

            memo.set(key, true);
        };

        recurse(0, '');
        return set.size;
    }
}


class Solution {
    betterString(s1, s2) {
        const count1 = this.countDistinctSubsequences(s1);
        const count2 = this.countDistinctSubsequences(s2);

        return count2 > count1 ? s2 : s1;
    }

    countDistinctSubsequences(str) {
        const MOD = 1e9 + 7;
        const n = str.length;
        const dp = Array(n + 1).fill(0);
        const lastIndex = new Map();

        dp[0] = 1; // Empty subsequence

        for (let i = 1; i <= n; i++) {
            const ch = str[i - 1];

            dp[i] = (2 * dp[i - 1]) % MOD;

            if (lastIndex.has(ch)) {
                dp[i] = (dp[i] - dp[lastIndex.get(ch) - 1] + MOD) % MOD;
            }

            lastIndex.set(ch, i);
        }

        // Exclude empty subsequence if needed: return dp[n] - 1;
        return dp[n];
    }
}

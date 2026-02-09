// 97. Interleaving String

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
// substrings
//  respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true


// Bottom-up approach
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length, l = s3.length;
    if (m + n !== l) return false;

    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let j = 1; j <= n; ++j) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
    }

    for (let i = 1; i <= m; ++i) {
        dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
        for (let j = 1; j <= n; ++j) {
            dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }
    
    return dp[n];
};

// Recursion and Memoization Technique

const makeKey = (n1, n2, n3) => `${n1}-${n2}-${n3}`

const isInterleave = (s1, s2, s3, s1p = 0, s2p = 0, s3p = 0, visited = new Set()) => {
  if (s1.length + s2.length !== s3.length) return false
  if (s3p === s3.length) return true
  
  const key = makeKey(s1p, s2p, s3p)
  if (visited.has(key)) return false
  visited.add(key)
  
  if (s1[s1p] === s3[s3p] && isInterleave(s1, s2, s3, s1p + 1, s2p, s3p + 1, visited)) return true
  if (s2[s2p] === s3[s3p] && isInterleave(s1, s2, s3, s1p, s2p + 1, s3p + 1, visited)) return true
  return false
}


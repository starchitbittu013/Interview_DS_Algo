// 2707. Extra Characters in a String
// You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

// Return the minimum number of extra characters left over if you break up s optimally.

 

// Example 1:

// Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
// Output: 1
// Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

// Example 2:

// Input: s = "sayhelloworld", dictionary = ["hello","world"]
// Output: 3
// Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const n = s.length;
    const dp = new Array(n).fill();
    const set = new Set(dictionary);
  
    return helper(s, set, dp, 0);
  };
  
  function helper(s, set, dp, idx) {
    if (idx >= s.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
  
    let result = 1 + helper(s, set, dp, idx + 1);
    for (let i = idx; i < s.length; i++) {
      const substring = s.slice(idx, i + 1);
      if (!set.has(substring)) continue;
  
      const next = helper(s, set, dp, i + 1);
      result = Math.min(result, next);
    }
  
    return (dp[idx] = result);
  }

// #########  Recursion + Memoization ######################
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    let dicSet = new Set(dictionary);
    let n = s.length;

    let memo = new Map();

    function solve(idx) {
        let minExtra = n;

        if(idx >= n) return 0;

        if(memo.has(idx)) return memo.get(idx);

        let currentString = '';        
        for(let i = idx; i < n; i++) {                                   
            currentString = currentString + s[i];            

            let currExtra = dicSet.has(currentString) ? 0 : currentString.length;
            let remExtra = solve(i + 1); 
             
            let totalExtra = currExtra + remExtra; 

            minExtra = Math.min(minExtra, totalExtra);  
            memo.set(idx, minExtra);
        }        

        return minExtra;
    }

    return solve(0);
}

console.log(minExtraChar("leetscode", ["leet","code","leetcode"]));

// #########  Bottom up  ######################
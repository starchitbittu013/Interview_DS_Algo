// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;
    let m = strs[0].length;

    while(m > 0) {
        for(let i = 0; i < n; i++) {
            if(strs[0].substring(0, m) !== strs[i].substring(0, m)) {
                break;
            }
            if(i === n - 1) return strs[0].substring(0, m);
        }
        m--;            
    }
    return '';
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
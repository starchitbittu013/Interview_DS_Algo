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
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.


var longestCommonPrefix = function(strs) {
    let n = strs.length; 
    let result = '';   

    let str = strs[0];
    let k = 0;

    for(let k = 0; k < str.length; k++) {
        for(let j = 1; j < n; j++) {
            if(str[k] !== strs[j][k]) {
                return result;
            }
        }
        result += str[k];
    }
    return result;
};
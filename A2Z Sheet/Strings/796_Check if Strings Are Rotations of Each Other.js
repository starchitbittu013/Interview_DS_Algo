// Check if Strings Are Rotations of Each Other

// Given two string s1 and s2 of same length, the task is to check whether s2 is a rotation of s1.

// Examples: 

// Input: s1 = “abcd”, s2 = “cdab”
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.


// Input: s1 = “aab”, s2 = “aba”
// Output: true
// Explanation: After 1 left rotation, s1 will become equal to s2.


// Input: s1 = “abcd”, s2 = “acbd”
// Output: false
// Explanation: Strings are not rotations of each other.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let n = s.length;
    let m = goal.length;

    if(n !== m) return false;

    let str = s + s;
    if(str.includes(goal)) return true;
    return false;
};

// [Expected Approach] Using KMP Algorithm – O(n) Time and O(n) Space

// JavaScript program to check if two given strings
// are rotations of each other using KMP Algorithm

function computeLPSArray(pat) {
    let n = pat.length;
    let lps = new Array(n).fill(0);
  
    // Length of the previous longest prefix suffix
    let len = 0;

    // lps[0] is always 0
    lps[0] = 0;

    // loop calculates lps[i] for i = 1 to n-1
    let i = 1;
    while (i < n) {
      
        // If the characters match, increment len 
        // and extend the matching prefix
        if (pat[i] === pat[len]) {
            len++;
            lps[i] = len;
            i++;
        }
      
        // If there is a mismatch
        else {
          
            // If len is not zero, update len to
            // last known prefix length
            if (len !== 0) {
                len = lps[len - 1];
            }
          
            // No prefix matches, set lps[i] = 0
            // and move to the next character
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// Function to check if s1 and s2 are rotations of each other
function areRotations(s1, s2) {
    let txt = s1 + s1;
    let pat = s2;
    
    // search the pattern string s2 in the concatenation string 
    let n = txt.length;
    let m = pat.length;

    // Create lps[] that will hold the longest prefix suffix
    // values for pattern
    let lps = computeLPSArray(pat);
  
    let i = 0; 
    let j = 0;
    while (i < n) {
        if (pat[j] === txt[i]) {
            j++;
            i++;
        }

        if (j === m) {
            return true;
        }

        // Mismatch after j matches
        else if (i < n && pat[j] !== txt[i]) {

            // Do not match lps[0..lps[j-1]] characters,
            // they will match anyway
            if (j !== 0)
                j = lps[j - 1];
            else
                i++;
        }
    }
    return false;
}

// Driver Code
const s1 = "aab"; 
const s2 = "aba";

console.log(areRotations(s1, s2) ? "true" : "false");

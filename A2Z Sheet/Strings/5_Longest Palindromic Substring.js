// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


// Brute Force Method - Find all substring and check!

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let result = '';
    let max = 0;

    function checkPalindrome(low, high) {
        while(low < high) {
            if(s[low] !== s[high]) return false;
            low++;
            high--;
        }
        return true;
    }

    for(let i = 0; i < n; i++){    
        for(let j = i; j < n; j++){
            let temp = '';
            if(checkPalindrome(i, j) && max < j - i + 1) {
                max = j - i + 1;
                for(let k = i; k <= j; k++) {
                    temp += s[k];
                }
                result = temp;                
            }
        }
    }
    return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let result = '';
    let max = 0;
    let start = 0;

    function checkPalindrome(low, high) {
        while(low < high) {
            if(s[low] !== s[high]) return false;
            low++;
            high--;
        }
        return true;
    }

    for(let i = 0; i < n; i++){    
        for(let j = i; j < n; j++){            
            if(checkPalindrome(i, j) && max < j - i + 1) {
                max = j - i + 1;
                start = i;
            }
        }
    }

    for(let k = start; k < start + max; k++) {
        result += s[k];
    }
    return result;
};


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // Odd length
        expandAroundCenter(i, i + 1); // Even length
    }

    return s.substring(start, start + maxLength);
};


// JavaScript program to find the longest
// palindromic substring.

// Function to find the longest palindrome substring
function longestPalindrome(s) {
    const n = s.length;
    if (n === 0) return "";

    let start = 0, maxLen = 1;

    // Traverse the input string
    for (let i = 0; i < n; i++) {

        // THIS RUNS TWO TIMES 
        // for both odd and even length
        // palindromes. j = 0 means odd
        // and j = 1 means even length
        for (let j = 0; j <= 1; j++) {
            let low = i;
            let high = i + j; 

            // Expand substring while it is a palindrome
            // and in bounds
            while (low >= 0 && high < n && s[low] === s[high]) {
                const currLen = high - low + 1;
                if (currLen > maxLen) {
                    start = low;
                    maxLen = currLen;
                }
                low--;
                high++;
            }
        }
    }

    return s.substring(start, start + maxLen);
}

// Driver Code
const s = "forgeeksskeegfor";
console.log(longestPalindrome(s));

// Check if two Strings are anagrams of each other

// Problem Statement: Given two strings, check if two strings are anagrams of each other or not.

// Examples:

// Example 1:
// Input: CAT, ACT
// Output: true
// Explanation: Since the count of every letter of both strings are equal.

// Example 2:
// Input: RULES, LESRT 
// Output: false
// Explanation: Since the count of U and T  is not equal in both strings.


function checkAnagrams(str1, str2) {
    // Case 1: Different lengths can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort both strings and compare
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Case 2: Check character-by-character
    for (let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i]) {
            return false;
        }
    }

    return true;
}

// Example usage
let str1 = "INTEGER";
let str2 = "TEGERNI";

if (checkAnagrams(str1, str2)) {
    console.log("True");
} else {
    console.log("False");
}

// Better solution

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};
// Substrings with K Distinct

// Given a string s of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly 
// k distinct characters. 

// Examples :

// Input: s = "aba", k = 2
// Output: 3
// Explanation: The substrings are: "ab", "ba" and "aba".
// Input: s = "abaaca", k = 1
// Output: 7
// Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a".
// Input: s = "cdad", k = 4
// Output: 0
// Constraints:
// 1 ≤ s.size() ≤ 106
// 1 ≤ k ≤ 26

// [Naive Approach] Checking all Substrings – O(n^2) time and O(1) space


// JavaScript program to find substrings 
// with K Distinct characters

function countSubstr(s, k) {
    let n = s.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {

        // Array to check if a character 
        // is present in substring i..j
        let map = new Array(26).fill(false);
        let distinctCnt = 0;

        for (let j = i; j < n; j++) {

            // If new character is present,
            // increment distinct count.
            let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
            if(!array[index]) {
                array[index] = true;
                distinct++;
            }

            // If distinct count is equal to k.
            if (distinctCnt === k) ans++;
        }
    }

    return ans;
}

let s = "abc";
let k = 2;
console.log(countSubstr(s, k));



// [Efficient Approach] Using Sliding Window Method – O(n) time and O(1) space

// The idea is to use sliding window technique to efficiently count substrings with at most k distinct characters, 
// and then subtract the count of substrings with at most k-1 distinct characters to obtain the exact number of substrings 
// with exactly k distinct characters.


// Step by step approach:

// Use a sliding window with an array of size 26 to track character frequencies.
// Expand the window to the right, adding characters.
// Shrink the window from the left when distinct characters exceed k.
// Count all valid substrings within the window.
// Subtract substrings with k-1 distinct characters from k distinct characters.



// JavaScript program to find substrings 
// with K Distinct characters

// Function which finds the number of 
// substrings with atmost k Distinct
// characters.
function count(s, k) {
    let n = s.length;
    let ans = 0;

    // Use sliding window technique
    let freq = new Array(26).fill(0);
    let distinctCnt = 0;
    let i = 0;

    for (let j = 0; j < n; j++) {

        // Expand window and add character
        freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
        if (freq[s.charCodeAt(j) - 'a'.charCodeAt(0)] === 1) distinctCnt++;

        // Shrink window if distinct characters exceed k
        while (distinctCnt > k) {
            freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
            if (freq[s.charCodeAt(i) - 'a'.charCodeAt(0)] === 0) distinctCnt--;
            i++;
        }

        // Add number of valid substrings ending at j
        ans += j - i + 1;
    }

    return ans;
}

// Function to find the number of substrings
// with exactly k Distinct characters.
function countSubstr(s, k) {
    let n = s.length;
    let ans = 0;

    // Subtract substrings with at most 
    // k-1 distinct characters from substrings
    // with at most k distinct characters
    ans = count(s, k) - count(s, k - 1);

    return ans;
}

// let s = "abc";
// let k = 2;
// console.log(countSubstr(s, k));

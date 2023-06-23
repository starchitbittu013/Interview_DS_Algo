// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
    let i = 0;
    let j = 0;
    let max = 0;
    let count = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let stringArray = s.split('');

    while (j < stringArray.length) {
        count = count + (vowel.includes(stringArray[j]) || 0);        

        if (j - i + 1 < k) {
            j++;
        } else {
            max = Math.max(max, count);            
            count = count - (vowel.includes(stringArray[i]) || 0);
    
            i++;
            j++;
        }
    }
    return max;
}


console.log(maxVowels('abciiidef', 3));

// TC: O(n)
// SC: O(1)
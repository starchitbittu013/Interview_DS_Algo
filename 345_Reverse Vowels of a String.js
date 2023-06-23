// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Input: s = "hello"
// Output: "holle"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0;
    let j = s.length - 1;
    const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
  let result = s.split(''); // Convert the string to an array

    while (i < j) {
        if (vowelsArray.includes(s[i]) && vowelsArray.includes(s[j])) {        
            result[i] = s[j];
            result[j] = s[i];
            i++;
            j--;
        } else if (vowelsArray.includes(s[i])) {
            j--;
        } else if (vowelsArray.includes(s[j])) {
            i++;
        } else {
            i++;
            j--;
        }
    }
    console.log(result.join(''));
    return result.join(''); // Convert the array back to a string
};

// Time complexity: O(n) - linear, where n is the length of the input string.
// Space complexity: O(n) - linear, where n is the length of the input string.
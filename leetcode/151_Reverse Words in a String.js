// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const stringArray = s.split(' ');
    const stringLength = stringArray.length;
    console.log(stringArray);
    
    let result = [];
    for(i = 0; i < stringLength; i++) {
        const poppedElement = stringArray.pop() 
        if(poppedElement !== '' && poppedElement !== undefined) {
            console.log(`poppedElement: ${poppedElement}`);
            result.push(poppedElement);
        }
    }  
    console.log(result.join(' '));
    return result.join(' ');
};

// Time Complexity: O(n)
// Space Complexity: O(n)
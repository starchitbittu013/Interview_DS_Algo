// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    let result = [];

    const digitToLettersMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    function backtrack(index, currentCombo) {
        if(index === digits.length) {
            result.push(currentCombo);
            return;
        }

        const letters = digitToLettersMap[digits[index]];

        for(letter of letters) {
            backtrack(index + 1, currentCombo + letter);
        }
    }

    backtrack(0, "");

    return result;
};


var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const mapping = {
        2: 'abc', 3: 'def', 4: 'ghi',
        5: 'jkl', 6: 'mno', 7: 'pqrs',
        8: 'tuv', 9: 'wxyz'
    };

    let result = [];

    function buildCombinations(index, current, charIndex = 0) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        let letters = mapping[digits[index]];
        if (charIndex === letters.length) return;

        // Pick the current character and move to next digit
        buildCombinations(index + 1, current + letters[charIndex]);

        // Stay on the same digit, move to next character
        buildCombinations(index, current, charIndex + 1);
    }

    buildCombinations(0, '');
    return result;
};

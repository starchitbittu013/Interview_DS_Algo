// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return '1';
    }

    let num = 1;
    let current = '1';
    let count = 1;
    let result;

    while(num < n) {
        result = '';
        let array = current.split('');

        for(let i = 0; i < array.length; i++) { 
            if(array[i] === array[i + 1]) {
                count++;
            } else {
                result = result + count.toString() + array[i];                
                count = 1;
            }
        }
        num++;
        current = result;
    }
    return result;
};

console.log(countAndSay(4));

// 1 
// 11
// 21
// 1211
// 111221

// Recursive Approach

/**
 * @param {number} n
 * @return {string}
 */
var countAndSayUsingRecursion = function(n) {
    // Base Case
    if(n === 1) {
        return '1';
    }
    let say = countAndSayUsingRecursion(n - 1);

    // Processing

    let count = 1;
    let result = '';

    for(let i = 0; i < say.length; i++) {
        if(say[i] === say[i + 1]) {
            count++;
        } else {
            result = result + count.toString() + say[i];                
            count = 1;
        }

    }
    return result;

};

console.log(countAndSayUsingRecursion(5));
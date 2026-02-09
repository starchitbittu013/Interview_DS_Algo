// 1903. Largest Odd Number in String

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.


/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n = num.length;
    let result = '';

    let temp = '';
    let i = n - 1;

    while(i >= 0) {
        if(num[i] % 2 !== 0 || num[i] === 0 || temp.length > 0) {
            temp += num[i];
        }
        i--;
    }
    console.log(temp)
    

    for(let j = temp.length - 1; j >= 0; j--) {
        result += temp[j];
    }

    return result;
};

// Better one

var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        let ch = num[i];
        if (ch === '1' || ch === '3' || ch === '5' || ch === '7' || ch === '9') {
            let result = '';
            for (let j = 0; j <= i; j++) {
                result += num[j];
            }
            return result;
        }
    }
    return "";
};

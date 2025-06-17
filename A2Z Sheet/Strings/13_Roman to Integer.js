// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = s.length;
    let result = 0;

    for(let i = 0; i < n; i++) {
        if(s[i] === 'M') {
            result += 1000;
        } else if(s[i] === 'D') {
            result += 500;
        } else if(s[i] === 'C' && s[i + 1] === 'M') {
            result += 900;
            i++;
        } else if(s[i] === 'C' && s[i + 1] === 'D') {
            result += 400;
            i++;
        } else if(s[i] === 'C') {
            result += 100;
        } else if(s[i] === 'L') {
            result += 50;
        } else if(s[i] === 'X' && s[i + 1] == 'C') {
            result += 90;
            i++;
        } else if(s[i] === 'X' && s[i + 1] == 'L') {
            result += 40;
            i++;
        } else if(s[i] === 'X') {
            result += 10;
        } else if(s[i] === 'V' && s[i + 1] == 'I' && s[i + 2] === 'I' && s[i + 3] === 'I') {
            result += 8;
            i += 3;
        } else if(s[i] === 'V' && s[i + 1] == 'I' && s[i + 2] === 'I') {
            result += 7;
            i += 2;
        } else if(s[i] === 'V' && s[i + 1] == 'I') {
            result += 6;
            i++;
        } else if(s[i] === 'V') {
            result += 5;
        } else if(s[i] === 'I' && s[i + 1] === 'X') {
            result += 9;
            i++;
        } else if(s[i] === 'I' && s[i + 1] === 'V') {
            result += 4;
            i++;
        } else if(s[i] === 'I') {
            result += 1;
        }
    }
    return result;
};

var romanToInt = function(s) {
    const value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let current = value[s[i]];
        let next = value[s[i + 1]];

        if (next > current) {
            result += next - current;
            i++; // Skip next character
        } else {
            result += current;
        }
    }

    return result;
};


// Reverse 


var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};

function intToRoman(num) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];

    let result = '';
    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }

    return result;
}



function intToRoman(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens      = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones      = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let t = Math.floor(num / 1000);
    let h = Math.floor((num % 1000) / 100);
    let te = Math.floor((num % 100) / 10);
    let o = num % 10;

    return thousands[t] + hundreds[h] + tens[te] + ones[o];
}


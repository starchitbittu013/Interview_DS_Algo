// 282. Expression Add Operators
// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

 

// Example 1:

// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
// Example 3:

// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
 

// Constraints:

// 1 <= num.length <= 10
// num consists of only digits.
// -231 <= target <= 231 - 1

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = (num, target) => {
    const results = [];

    const backtrack = (index, currentValue, prevValue, expression) => {
        if (index === num.length) {
            if (currentValue === target) {
                results.push(expression);
            }
            return;
        }

        let currentNum = '';
        for (let i = index; i < num.length; i++) {
            currentNum += num[i];
            if (currentNum.length > 1 && num[index] === '0') break; // Skip numbers with leading zeros

            const value = parseInt(currentNum, 10);

            if (index === 0) {
                // For the first number, just recurse with no operator
                backtrack(i + 1, value, value, currentNum);
            } else {
                // For subsequent numbers, try each operator
                backtrack(i + 1, currentValue + value, value, `${expression}+${currentNum}`);
                backtrack(i + 1, currentValue - value, -value, `${expression}-${currentNum}`);
                backtrack(i + 1, currentValue - prevValue + (prevValue * value), prevValue * value, `${expression}*${currentNum}`);
            }
        }
    };

    if (num) backtrack(0, 0, 0, '');
    return results;
};



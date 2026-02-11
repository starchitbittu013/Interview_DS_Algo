/*
QUESTION:
Given an infix expression in the form of string str. Convert this infix expression to prefix expression.

What is an Infix Expression?
The traditional method of writing mathematical expressions is called infix expressions.
It is written as . The operator is placed between two operands (e.g., A+B or (A*B)/Q).
Infix expressions are easy to understand and evaluate for humans but hard for computers to parse due to operator precedence, associativity rules, and parentheses.
To make parsing easier for computers, we use postfix and prefix notations.

What is a Prefix Expression?
In a prefix expression, the operator is placed before the operands.
The expression is in the form .
Prefix expressions work similarly to postfix expressions. While evaluating, operators are applied immediately to the operands on the right of the operator.
Prefix expressions are also called Polish notation.
Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -.

Example:
Input: str = "((A-(B/C))*((A/K)-L))"
Output: "*-A/BC-/AKL"
Explanation:
After converting the infix expression into prefix expression, the resultant expression will be *-A/BC-/AKL.

APPROACH:

1. Reverse the infix expression.
2. Swap '(' with ')' and vice versa.
3. Convert the modified expression to postfix.
4. Reverse the postfix expression to get the prefix expression.
 
CODE:
*/

// Function to return precedence of operators
function getPriority(C) {
    if (C === '^')
        return 3;
    else if (C === '*' || C === '/')
        return 2;
    else if (C === '+' || C === '-')
        return 1;
    return 0;
}

// manual string reverse
function reverseString(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// manual bracket swap
function swapBrackets(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(')
            res += ')';
        else if (str[i] === ')')
            res += '(';
        else
            res += str[i];
    }
    return res;
}

// check operand manually
function isOperand(c) {
    if (c >= 'a' && c <= 'z') return true;
    if (c >= 'A' && c <= 'Z') return true;
    if (c >= '0' && c <= '9') return true;
    return false;
}

// Function to convert infix expression to postfix expression
function infixToPostfix(infix) {
    let stack = [];
    let result = "";

    for (let i = 0; i < infix.length; i++) {

        let c = infix[i];

        if (isOperand(c)) {
            result += c;
        }

        else if (c === '(') {
            stack.push(c);
        }

        else if (c === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();
        }

        else {

            while (
                stack.length > 0 &&
                stack[stack.length - 1] !== '(' &&
                (
                    getPriority(stack[stack.length - 1]) > getPriority(c) ||
                    (
                        getPriority(stack[stack.length - 1]) === getPriority(c) &&
                        c !== '^'
                    )
                )
            ) {
                result += stack.pop();
            }

            stack.push(c);
        }
    }

    // pop remaining operators (safety flush)
    while (stack.length > 0) {
        result += stack.pop();
    }

    return result;
}

// Function to convert infix expression to prefix expression
function infixToPrefix(infix) {

    let reversed = reverseString(infix);

    let swapped = swapBrackets(reversed);

    let postfix = infixToPostfix(swapped);

    let prefix = reverseString(postfix);

    return prefix;
}

// Main function
function main() {

    let exp1 = "(p+q)*(c-d)";
    let exp2 = "a+b*(c^d-e)^(f+g*h)-i"; 
    let exp3 = "a^b^c";

    console.log("Infix:", exp1);
    console.log("Prefix:", infixToPrefix(exp1));

    console.log("\nInfix:", exp2);
    console.log("Prefix:", infixToPrefix(exp2));

    console.log("\nInfix:", exp3);
    console.log("Prefix:", infixToPrefix(exp3));
}

main();



// Time Complexity: O(N), where N is the length of the infix expression.
// Space Complexity: O(N), for the stack and the result string.


/*

class Solution {

    precedence(c) {
        if (c === '^') return 3;
        if (c === '*' || c === '/') return 2;
        if (c === '+' || c === '-') return 1;
        return -1;
    }

    isOperand(ch) {
        return (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        );
    }

    infixToPrefix(s) {

        // reverse + swap brackets
        let rev = "";
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === '(') rev += ')';
            else if (s[i] === ')') rev += '(';
            else rev += s[i];
        }

        let st = [];
        let postfix = "";

        for (let i = 0; i < rev.length; i++) {

            let ch = rev[i];

            if (this.isOperand(ch)) {
                postfix += ch;
            }

            else if (ch === '(') {
                st.push(ch);
            }

            else if (ch === ')') {
                while (st.length && st[st.length - 1] !== '(')
                    postfix += st.pop();
                st.pop();
            }

            else {

                while (
                    st.length &&
                    (
                        this.precedence(st[st.length - 1]) > this.precedence(ch) ||
                        (
                            this.precedence(st[st.length - 1]) === this.precedence(ch) &&
                            ch === '^'   // 🔥 key fix
                        )
                    )
                ) {
                    postfix += st.pop();
                }

                st.push(ch);
            }
        }

        while (st.length)
            postfix += st.pop();

        // manual reverse (avoid split/join)
        let prefix = "";
        for (let i = postfix.length - 1; i >= 0; i--) {
            prefix += postfix[i];
        }

        return prefix;
    }
}

**/
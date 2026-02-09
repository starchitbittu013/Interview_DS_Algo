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
- We can use a stack to convert the infix expression to postfix.
- We iterate through each character of the input string from right to left.
- If the character is an alphanumeric character, we append it to the output string.
- If the character is an closing parenthesis '(', we push it onto the stack.
- If the character is a opening parenthesis ')', we pop operators from the stack and append them to the output string until we encounter an closing parenthesis '('.
- If the character is an operator, we compare its precedence with the top of the stack and pop operators with higher or equal precedence and append them to the output string. Then we push the current operator onto the stack.
- After iterating through all characters, we pop any remaining operators from the stack and append them to the output string.

CODE:
*/

function infixToPrefix(s) {
    let ans = "";
    const precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    };

    const st = [];

    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];
        
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) {
            ans += ch;
        } else if (ch === ')') {
            st.push(ch);
        } else if (ch === '(') {
            while (st.length > 0 && st[st.length - 1] !== ')') {
                ans += st.pop();
            }
            st.pop(); // Pop the closing parenthesis ')'
        } else {
            while (st.length > 0 && st[st.length - 1] !== ')' && precedence[st[st.length - 1]] >= precedence[ch]) {
                ans += st.pop();
            }
            st.push(ch);
        }
    }

    while (st.length > 0) {
        ans += st.pop();
    }

    return ans.split('').reverse().join('');
}

/*
COMPLEXITY ANALYSIS:
- The time complexity of the infixToPrefix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operators.
*/

// Export for module usage
module.exports = { infixToPrefix };

console.log(infixToPrefix("x+y*z/w+u"));

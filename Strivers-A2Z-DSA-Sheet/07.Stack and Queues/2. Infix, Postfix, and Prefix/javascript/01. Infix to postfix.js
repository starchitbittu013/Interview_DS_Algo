/*
QUESTION:
Given an infix expression in the form of string str, convert it to a postfix expression.

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -.

Example:
Input: str = "a+b*(c^d-e)^(f+g*h)-i"
Output: abcd^e-fgh*+^*+i-
Explanation:
After converting the infix expression into postfix expression, the resultant expression will be abcd^e-fgh*+^*+i-

APPROACH:
- We can use a stack to convert the infix expression to postfix.
- We iterate through each character of the input string.
- If the character is an operand (letter or digit), we append it to the output string.
- If the character is an opening parenthesis '(', we push it onto the stack.
- If the character is a closing parenthesis ')', we pop elements from the stack and append them to the output string until we encounter an opening parenthesis. We also discard the opening parenthesis from the stack.
- If the character is an operator, we compare its precedence with the top element of the stack. If the top element has higher precedence, we pop it and append it to the output string. We repeat this process until we find an operator with lower precedence or an opening parenthesis. Then we push the current operator onto the stack.
- After iterating through all characters, we pop any remaining elements from the stack and append them to the output string.
// ✅ IMP: 👉 ^ is right-associative, not left-associative. When the operator is ^, you should NOT pop operators with equal precedence — only higher precedence.

CODE:
*/

// Function to return precedence of operators
// ✅ IMP: 👉 ^ is right-associative, not left-associative. When the operator is ^, you should NOT pop operators with equal precedence — only higher precedence.

function precedence(c) {
    if (c === '^')  // Exponent operator has highest precedence
        return 3;
    else if (c === '/' || c === '*')  // Multiplication and division have higher precedence than addition
        return 2;
    else if (c === '+' || c === '-')  // Addition and subtraction have lowest precedence
        return 1;
    else
        return -1;
}

function infixToPostfix(s) {
    let ans = "";
    
    const st = [];
    
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        
        // if (/[a-zA-Z0-9]/.test(ch))
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) { 
            ans += ch;
        } else if (ch === '(') {
            st.push(ch);
        } else if (ch === ')') {
            while (st.length > 0 && st[st.length - 1] !== '(') {
                ans += st.pop();
            }
            st.pop();
        } else {
            while (st.length > 0 && st[st.length - 1] !== '(' 
                && (precedence(st[st.length - 1]) > precedence(ch) 
                || precedence(st[st.length - 1]) === precedence(ch)
                && ch !== '^')) {                
                ans += st.pop();
            }
            st.push(ch);
        }
    }
    
    while (st.length > 0) {
        ans += st.pop();
    }
    
    return ans;
}

//let exp = "(p+q)*(m-n)";  // Infix expression
//console.log(`Infix expression: ${exp}`);
//console.log(infixToPostfix(exp));  // Convert the infix expression to postfix

console.log(infixToPostfix("a*(b+c)/d"));
console.log(infixToPostfix("h^m^q^(7-4)"));
// ✅ IMP: 👉 ^ is right-associative, not left-associative. When the operator is ^, you should NOT pop operators with equal precedence — only higher precedence.

/*
COMPLEXITY ANALYSIS:
- The time complexity of the infixToPostfix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operators.
*/

// Export for module usage
module.exports = { infixToPostfix };


// Function to return precedence of operators
function prec(c) {
    if (c === '^')  // Exponent operator has highest precedence
        return 3;
    else if (c === '/' || c === '*')  // Multiplication and division have higher precedence than addition
        return 2;
    else if (c === '+' || c === '-')  // Addition and subtraction have lowest precedence
        return 1;
    else
        return -1;
}

// Function to convert infix expression to postfix expression
function infixToPostfix1(s) {
    let stack = [];  // Stack to hold operators and parentheses
    let result = "";  // String to hold the resulting postfix expression

    for (let c of s) {
        // If the scanned character is an operand, add it to the result string
        if (/[a-zA-Z0-9]/.test(c)) {
            result += c;
        }
        // If the scanned character is an ‘(‘, push it to the stack
        else if (c === '(') {
            stack.push('(');
        }
        // If the scanned character is a ‘)’, pop from stack until an ‘(‘ is encountered
        else if (c === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();  // Pop the ‘(‘ from the stack
        }
        // If an operator is scanned
        else {
            while (stack.length > 0 
                && (prec(stack[stack.length - 1]) > prec(c) 
                || prec(stack[stack.length - 1]) === prec(c)
                && c !== '^')) {                
                result += stack.pop();
            }
            stack.push(c);  // Push the current operator to the stack
        }
    }

    // Pop all the remaining elements from the stack
    while (stack.length > 0) {
        result += stack.pop();
    }

    console.log(`Postfix expression: ${result}`);  // Output the result
}

// Main function to handle input and output
function main() {
    let exp = "(p+q)*(m-n)";  // Infix expression
    console.log(`Infix expression: ${exp}`);
    infixToPostfix1(exp);  // Convert the infix expression to postfix
    infixToPostfix1("h^m^q^(7-4)");
}

// Call the main function
main();
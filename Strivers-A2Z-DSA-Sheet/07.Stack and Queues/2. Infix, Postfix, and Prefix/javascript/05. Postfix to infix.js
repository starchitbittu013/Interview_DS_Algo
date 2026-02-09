/*
QUESTION:
You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its infix form.

Example:
Input:
ab*c+ 
Output: 
((a*b)+c)
Explanation: 
The above output is its valid infix form.

APPROACH:
- We can use a stack to convert the postfix expression to infix.
- We iterate through each character of the input string.
- If the character is an alphanumeric character, we push it onto the stack.
- If the character is an operator, we pop two operands from the stack, concatenate them with the operator in the proper order (operand1 + operator + operand2), and push the result back onto the stack.
- After iterating through all characters, the top of the stack will contain the final infix expression.

CODE:
*/

function isAlphaNumeric(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
}

function postToInfix(exp) {
    const st = [];
    
    for (let i = 0; i < exp.length; i++) {
        const ch = exp[i];
        
        if (isAlphaNumeric(ch)) {
            st.push(ch);
        } else {
            const a = st.pop();
            const b = st.pop();
            
            st.push("(" + b + ch + a + ")");
        }
    }
    
    return st[st.length - 1];
}

/*
COMPLEXITY ANALYSIS:
- The time complexity of the postToInfix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operands.
*/

// Export for module usage
module.exports = { isAlphaNumeric, postToInfix };

/*
QUESTION:
You are given a string that represents the prefix form of a valid mathematical expression. Convert it to its postfix form.

Example:
Input: 
*-A/BC-/AKL
Output: 
ABC/-AK/L-*
Explanation: 
The above output is its valid postfix form.

APPROACH:
- We can use a stack to convert the prefix expression to postfix.
- We iterate through each character of the input string in reverse order.
- If the character is an alphanumeric character, we push it onto the stack.
- If the character is an operator, we pop two operands from the stack, concatenate them with the operator, and push the result back onto the stack.
- After iterating through all characters, the top of the stack will contain the final postfix expression.

CODE:
*/

function isAlphaNumeric(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
}

function preToPost(preExp) {
    const st = [];
    
    for (let i = preExp.length - 1; i >= 0; i--) {
        const ch = preExp[i];
        
        if (isAlphaNumeric(ch)) {
            st.push(ch);
        } else {
            const a = st.pop();
            const b = st.pop();
            
            const temp = a + b + ch;
            st.push(temp);
        }
    }
    
    return st[st.length - 1];
}

/*
COMPLEXITY ANALYSIS:
- The time complexity of the preToPost function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operands.
*/

// Export for module usage
module.exports = { isAlphaNumeric, preToPost };

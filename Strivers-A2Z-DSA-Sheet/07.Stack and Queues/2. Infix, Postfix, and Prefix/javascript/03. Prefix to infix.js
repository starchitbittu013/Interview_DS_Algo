/*
QUESTION:
You are given a string S of size N that represents the prefix form of a valid mathematical expression. Convert it to its infix form.

Example:
Input: 
*-A/BC-/AKL
Output: 
((A-(B/C))*((A/K)-L))
Explanation: 
The above output is its valid infix form.

APPROACH:
- We can use a stack to convert the prefix expression to infix.
- We iterate through each character of the input string in reverse order.
- If the character is an operand (letter or digit), we push it onto the stack.
- If the character is an operator, we pop two operands from the stack, concatenate them with the operator and enclosing parentheses, and push the result back onto the stack.
- After iterating through all characters, the top of the stack will contain the final infix expression.

CODE:
*/

function preToInfix(preExp) {
    const st = [];
    
    for (let i = preExp.length - 1; i >= 0; i--) {
        const ch = preExp[i];
        
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            st.push(ch);
        } else {
            const a = st.pop();
            const b = st.pop();
            
            const temp = "(" + a + ch + b + ")";
            st.push(temp);
        }
    }
    
    return st[st.length - 1];
}

/*
COMPLEXITY ANALYSIS:
- The time complexity of the preToInfix function is O(N), where N is the length of the input string.
- String concatenation in JavaScript can be O(N) in the worst case, but since we are only concatenating a few characters (two operands and one operator), it can be considered O(1) for each operation. Thus, the overall time complexity remains O(N). 
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operands.
*/

// Export for module usage
module.exports = { preToInfix };

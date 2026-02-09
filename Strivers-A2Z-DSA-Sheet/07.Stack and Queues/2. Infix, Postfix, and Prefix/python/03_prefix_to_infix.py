"""
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
"""

def pre_to_infix(pre_exp: str) -> str:
    st = []
    
    for i in range(len(pre_exp) - 1, -1, -1):
        ch = pre_exp[i]
        
        if ch.isalnum():
            st.append(ch)
        else:
            a = st.pop()
            b = st.pop()
            
            temp = "(" + a + ch + b + ")"
            st.append(temp)
    
    return st[-1]


"""
COMPLEXITY ANALYSIS:
- The time complexity of the pre_to_infix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operands.
"""

if __name__ == "__main__":
    # Test example
    test = "*-A/BC-/AKL"
    print(f"Input: {test}")
    print(f"Output: {pre_to_infix(test)}")

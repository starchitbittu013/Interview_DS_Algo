"""
QUESTION:
You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its prefix form.

Example:
Input: 
ABC/-AK/L-*
Output: 
*-A/BC-/AKL
Explanation: 
The above output is its valid prefix form.

APPROACH:
- We can use a stack to convert the postfix expression to prefix.
- We iterate through each character of the input string.
- If the character is an alphanumeric character, we push it onto the stack.
- If the character is an operator, we pop two operands from the stack, concatenate them with the operator in the proper order (operator + operand2 + operand1), and push the result back onto the stack.
- After iterating through all characters, the top of the stack will contain the final prefix expression.

CODE:
"""

def is_alphanumeric(ch: str) -> bool:
    return ch.isalnum()


def post_to_pre(post_exp: str) -> str:
    st = []
    
    for ch in post_exp:
        if is_alphanumeric(ch):
            st.append(ch)
        else:
            a = st.pop()
            b = st.pop()
            
            temp = ch + b + a
            st.append(temp)
    
    return st[-1]


"""
COMPLEXITY ANALYSIS:
- The time complexity of the post_to_pre function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operands.
"""

if __name__ == "__main__":
    # Test example
    test = "ABC/-AK/L-*"
    print(f"Input: {test}")
    print(f"Output: {post_to_pre(test)}")

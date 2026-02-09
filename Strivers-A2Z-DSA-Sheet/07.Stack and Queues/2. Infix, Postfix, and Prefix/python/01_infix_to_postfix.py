"""
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

CODE:
"""

def infix_to_postfix(s: str) -> str:
    ans = ""
    precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    }
    
    st = []
    
    for ch in s:
        if ch.isalnum():
            ans += ch
        elif ch == '(':
            st.append(ch)
        elif ch == ')':
            while st and st[-1] != '(':
                ans += st.pop()
            st.pop()
        else:
            while st and st[-1] != '(' and precedence.get(st[-1], 0) >= precedence.get(ch, 0):
                ans += st.pop()
            st.append(ch)
    
    while st:
        ans += st.pop()
    
    return ans


"""
COMPLEXITY ANALYSIS:
- The time complexity of the infix_to_postfix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operators.
"""

if __name__ == "__main__":
    # Test example
    test = "a+b*(c^d-e)^(f+g*h)-i"
    print(f"Input: {test}")
    print(f"Output: {infix_to_postfix(test)}")

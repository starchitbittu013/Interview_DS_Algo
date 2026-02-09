"""
QUESTION:
Given an infix expression in the form of string str. Convert this infix expression to postfix expression.

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
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
"""

def infix_to_prefix(s: str) -> str:
    ans = ""
    precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    }

    st = []

    for i in range(len(s) - 1, -1, -1):
        ch = s[i]
        
        if ch.isalnum():
            ans += ch
        elif ch == ')':
            st.append(ch)
        elif ch == '(':
            while st and st[-1] != ')':
                ans += st.pop()
            st.pop()  # Pop the closing parenthesis ')'
        else:
            while st and st[-1] != ')' and precedence.get(st[-1], 0) >= precedence.get(ch, 0):
                ans += st.pop()
            st.append(ch)

    while st:
        ans += st.pop()

    return ans[::-1]


"""
COMPLEXITY ANALYSIS:
- The time complexity of the infix_to_prefix function is O(N), where N is the length of the input string.
- We iterate through each character once, and the operations performed inside the loop are all constant time.
- The space complexity is O(N) as we use a stack to store operators.
"""

if __name__ == "__main__":
    # Test example
    test = "((A-(B/C))*((A/K)-L))"
    print(f"Input: {test}")
    print(f"Output: {infix_to_prefix(test)}")

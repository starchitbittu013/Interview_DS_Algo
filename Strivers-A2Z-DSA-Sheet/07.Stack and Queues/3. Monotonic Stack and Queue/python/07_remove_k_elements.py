"""
QUESTION:
Given string num representing a non-negative integer num, and an integer k,
return the smallest possible integer after removing k digits from num.

Example:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
"""

"""
APPROACH:
The idea is to use a stack to build the smallest number by removing larger digits.
We iterate through each digit in num and compare it with the digits in the stack.
If the current digit is smaller than the top of the stack, we pop elements from the stack
until either the stack is empty or the top of the stack is smaller than or equal to the current digit.
After processing all the digits, we remove any remaining digits from the stack to satisfy the required k digits to remove.
Finally, we construct the result by popping elements from the stack and reverse it to get the correct order.
"""


def remove_kdigits(num: str, k: int) -> str:
    st = []
    
    for c in num:
        while st and k > 0 and st[-1] > c:
            st.pop()
            k -= 1
        st.append(c)
    
    # Remove remaining digits from the back if k is still greater than 0
    while st and k > 0:
        st.pop()
        k -= 1
    
    # Remove leading zeros
    ans = ''.join(st).lstrip('0')
    
    return ans if ans else "0"


"""
Complexity Analysis:
- The code iterates through each digit in the input string, so the time complexity is O(n),
  where n is the length of the input string.
- The space complexity is O(n) as well since the stack can potentially store all the digits in the input string.
"""

if __name__ == "__main__":
    # Test example
    num = "1432219"
    k = 3
    print(f"Input: num = {num}, k = {k}")
    print(f"Output: {remove_kdigits(num, k)}")

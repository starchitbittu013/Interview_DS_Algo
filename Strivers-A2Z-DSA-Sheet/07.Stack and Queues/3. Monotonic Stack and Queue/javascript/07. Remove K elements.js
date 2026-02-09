/*
QUESTION:
Given string num representing a non-negative integer num, and an integer k,
return the smallest possible integer after removing k digits from num.

Example:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
*/

/*
APPROACH:
The idea is to use a stack to build the smallest number by removing larger digits.
We iterate through each digit in num and compare it with the digits in the stack.
If the current digit is smaller than the top of the stack, we pop elements from the stack
until either the stack is empty or the top of the stack is smaller than or equal to the current digit.
After processing all the digits, we remove any remaining digits from the stack to satisfy the required k digits to remove.
Finally, we construct the result by popping elements from the stack and reverse it to get the correct order.
*/

function removeKdigits(num, k) {
    const st = [];
    
    for (const c of num) {
        while (st.length > 0 && k > 0 && st[st.length - 1] > c) {
            st.pop();
            k--;
        }
        st.push(c);
    }
    
    // Remove remaining digits from the back if k is still greater than 0
    while (st.length > 0 && k > 0) {
        st.pop();
        k--;
    }
    
    // Remove leading zeros
    let ans = st.join('');
    let i = 0;
    while (i < ans.length && ans[i] === '0') {
        i++;
    }
    ans = ans.slice(i);
    
    return ans.length === 0 ? "0" : ans;
}

/*
Complexity Analysis:
- The code iterates through each digit in the input string, so the time complexity is O(n),
  where n is the length of the input string.
- The space complexity is O(n) as well since the stack can potentially store all the digits in the input string.
*/

// Export for module usage
module.exports = { removeKdigits };

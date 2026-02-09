"""
QUESTION:
Given a square NxN matrix representing people at a party, determine if there is a celebrity in the party. A celebrity is defined as a person who is known to all but does not know anyone at the party.

APPROACH:
To solve this problem, we can use a stack to keep track of potential celebrity candidates.
1. Initially, push all the people (indices) onto the stack.
2. While the stack size is greater than 1, do the following:
   - Pop two people 'a' and 'b' from the stack.
   - Check if 'a' knows 'b' and 'b' does not know 'a'. If true, push 'b' back onto the stack.
   - Check if 'b' knows 'a' and 'a' does not know 'b'. If true, push 'a' back onto the stack.
3. After the above loop, if the stack is empty, there is no celebrity, so return -1.
4. Otherwise, get the potential celebrity from the top of the stack.
5. Check if the potential celebrity is known by everyone else and does not know anyone else.
   - If true, return the potential celebrity index.
   - If false, return -1.

Example:
Input: N = 3, M[][] = {{0, 1, 0}, {0, 0, 0}, {0, 1, 0}}
Output: 1
Explanation: Both person 0 and person 2 know person 1. Therefore, person 1 is the celebrity.

CODE:
"""

from typing import List


def knows(a: int, b: int, M: List[List[int]]) -> bool:
    return M[a][b] == 1


def celebrity(M: List[List[int]], n: int) -> int:
    st = []
    for i in range(n):
        st.append(i)

    while len(st) > 1:
        a = st.pop()
        b = st.pop()

        if knows(a, b, M) and not knows(b, a, M):
            st.append(b)
        elif knows(b, a, M) and not knows(a, b, M):
            st.append(a)

    if not st:
        return -1

    potential_celeb = st[-1]

    # Check if the potential celebrity is known by everyone else and does not know anyone else
    for i in range(n):
        if i != potential_celeb and (M[i][potential_celeb] == 0 or M[potential_celeb][i] == 1):
            return -1

    return potential_celeb


"""
COMPLEXITY ANALYSIS:
- The time complexity is O(N) because each person is pushed onto and popped from the stack at most once.
- The space complexity is O(N) because the stack can store at most N elements.
"""

if __name__ == "__main__":
    # Test example
    M = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]
    n = 3
    print(f"Input: M = {M}, n = {n}")
    print(f"Output: {celebrity(M, n)}")

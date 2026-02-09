"""QUESTION:

Given a Binary Search Tree (BST) and a number `X`, find the Ceil of `X`. Ceil(X) is a number that is either equal to `X` or is immediately greater than `X` in the BST.

If the Ceil of `X` could not be found, return `-1`.

Example 1:

Input:

      5
    /   \
   1     7
    \
     2 
      \
       3
X = 3

Output: 3

Explanation: We find 3 in the BST, so the ceil of 3 is 3.

APPROACH:

To find the Ceil of a given number `X`, we can perform a traversal of the BST and keep track of the node with the smallest value that is greater than or equal to `X`. 

COMPLEXITY ANALYSIS:

The time complexity of this approach is O(h), where `h` is the height of the BST.
The space complexity is O(1) since we are using a constant amount of extra space.

CODE:
"""
from typing import Optional

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def solve(root: Optional[Node], x: int, ans: list) -> None:
    if not root:
        return
    if root.data == x:
        ans[0] = root.data
        return
    if root.data > x:
        ans[0] = root.data
        return solve(root.left, x, ans)
    return solve(root.right, x, ans)

def findCeil(root: Optional[Node], input_val: int) -> int:
    if root is None:
        return -1
    ans = [-1]
    solve(root, input_val, ans)
    return ans[0]

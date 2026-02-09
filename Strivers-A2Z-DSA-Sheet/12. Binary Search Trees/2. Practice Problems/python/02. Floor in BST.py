"""
QUESTION:
Given a Binary Search Tree (BST) with `n` number of nodes and a value `x`, find the greatest value node of the BST which is smaller than or equal to `x`.
Note: If `x` is smaller than the smallest node of the BST, then return -1.

APPROACH:
To find the floor of `x` in the BST, we can perform a traversal of the tree starting from the root. While traversing, we compare the value of the current node with `x` to find the largest value in the tree that is smaller than or equal to `x`.

Complexity Analysis
Time complexity: O(h), where h is the height of the BST.
Space complexity: O(1), as the function uses a single integer variable (`ans`) to store the result.

CODE:
"""
from typing import Optional

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def findFloor(root: Optional[Node], x: int) -> int:
    if not root:
        return -1
    ans = -1
    while root:
        if root.data == x:
            ans = root.data
            break
        elif root.data < x:
            ans = root.data
            root = root.right
        else:
            root = root.left
    return ans

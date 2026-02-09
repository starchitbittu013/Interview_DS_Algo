"""QUESTION:

Given a Binary Search Tree (BST), find the minimum value in it.

Example:


    8
   / 
  5
 / \
3   6 


BST for the given input looks like the above. The minimum value in this BST is `3`.

APPROACH:

To find the minimum value in a BST, we can traverse the left child nodes until we reach the leftmost leaf node, which will have the minimum value.

COMPLEXITY ANALYSIS:

Let 'n' be the number of nodes in the BST.

- Time Complexity: O(h), where 'h' is the height of the BST.
- Space Complexity: O(1) as we are not using any extra space.

CODE:
"""
from typing import Optional

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def minVal(root: Optional[Node]) -> int:
    if not root:
        return -1
    while root.left:
        root = root.left
    return root.data

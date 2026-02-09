# 226. Invert Binary Tree

# Given the root of a binary tree, invert the tree, and return its root.

# Example 1:

# Input: root = [4,2,7,1,3,6,9]
# Output: [4,7,2,9,6,3,1]

"""
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
        return root

    invertTree(root.left)
    invertTree(root.right)

    temp = root.left
    root.left = root.right
    root.right = temp

    return root

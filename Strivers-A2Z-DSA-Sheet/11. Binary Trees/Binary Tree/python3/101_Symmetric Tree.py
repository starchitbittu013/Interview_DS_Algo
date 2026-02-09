# 101. Symmetric Tree

# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# Example 1:

# Input: root = [1,2,2,3,4,4,3]
# Output: true

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

# Recursive Approach....

def isMirror(node1: Optional[TreeNode], node2: Optional[TreeNode]) -> bool:
    # Base case to exit the recursion
    if node1 is None and node2 is None:
        return True
    if node1 is None or node2 is None:
        return False

    # Compare the root node value and check if left subtree is mirror or right subtree
    if node1.val == node2.val:
        return isMirror(node1.left, node2.right) and isMirror(node1.right, node2.left)
    return False

def isSymmetric(root: Optional[TreeNode]) -> bool:
    return isMirror(root, root)


# Iterative Approach....

def isSymmetricIterative(root: Optional[TreeNode]) -> bool:
    if root is None:
        return True
    stack = []

    stack.append(root.left)
    stack.append(root.right)

    while len(stack) > 0:
        node1 = stack.pop()
        node2 = stack.pop()

        if node1 is None and node2 is None:
            continue
        if node1 is None or node2 is None:
            return False

        if node1.val == node2.val:
            stack.append(node1.left)
            stack.append(node2.right)
            stack.append(node1.right)
            stack.append(node2.left)
        else:
            return False
    return True

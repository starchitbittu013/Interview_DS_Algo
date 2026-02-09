"""
Question:
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Approach:
- Initialize the range with -infinity and infinity values.
- Now, if a node.val is out of the range then it's not a BST
- And, then check for the left and right subtrees with modified range 

Time Complexity: O(n)
Space Complexity: O(h)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root: Optional[TreeNode], low: float, high: float) -> bool:
    if not root:
        return True
    if root.val >= high or root.val <= low:
        return False
    return solve(root.left, low, root.val) and solve(root.right, root.val, high)

def isValidBST(root: Optional[TreeNode]) -> bool:
    if not root:
        return True
    return solve(root, float('-inf'), float('inf'))

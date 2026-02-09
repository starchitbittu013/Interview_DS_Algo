"""
Question:
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

Example:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Approach:
- Traverse the BST from the root.
- If both the nodes p and q are smaller than the current node's value, then the LCA must be in the left subtree.
- If both the nodes p and q are greater than the current node's value, then the LCA must be in the right subtree.
- If the current node's value is between the values of nodes p and q, then the current node is the LCA.

Time Complexity: O(h)
Space Complexity: O(h)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root: Optional[TreeNode], p: TreeNode, q: TreeNode) -> Optional[TreeNode]:
    if (p.val < root.val) and (q.val < root.val):
        return lowestCommonAncestor(root.left, p, q)
    if (p.val > root.val) and (q.val > root.val):
        return lowestCommonAncestor(root.right, p, q)
    return root

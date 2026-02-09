"""
Question:
Given an array of integers preorder, which represents the preorder traversal of a BST, construct the tree and return its root.

Example:
Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Approach:
- The first element of the preorder traversal is the root of the BST.
- We start with the first element and recursively build the BST.

Time Complexity: O(n)
Space Complexity: O(h)
"""
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(index_ref: list, pre: List[int], bound: int) -> Optional[TreeNode]:
    if index_ref[0] >= len(pre) or pre[index_ref[0]] > bound:
        return None
    root = TreeNode(pre[index_ref[0]])
    index_ref[0] += 1
    root.left = solve(index_ref, pre, root.val)
    root.right = solve(index_ref, pre, bound)
    return root

def bstFromPreorder(preorder: List[int]) -> Optional[TreeNode]:
    index_ref = [0]
    return solve(index_ref, preorder, float('inf'))

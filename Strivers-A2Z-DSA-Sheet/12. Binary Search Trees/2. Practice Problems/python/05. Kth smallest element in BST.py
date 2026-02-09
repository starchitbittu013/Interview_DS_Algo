"""
Question:
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Approach:
To find the kth smallest value in a binary search tree (BST), we can perform an in-order traversal of the BST and keep track of the count of nodes visited so far.

Time Complexity: O(log n + k)
Space Complexity: O(log n)

CODE:
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(root: Optional[TreeNode], k: int, state: dict) -> None:
    if not root:
        return
    inorder(root.left, k, state)
    state['cnt'] += 1
    if state['cnt'] == k:
        state['ans'] = root.val
        return
    inorder(root.right, k, state)

def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    state = {'ans': -1, 'cnt': 0}
    inorder(root, k, state)
    return state['ans']

"""
Question:
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

Explanation:
- We perform an in-order traversal of the BST to find the two nodes that are swapped.
- During the in-order traversal, we keep track of the previous node and compare it with the current node.
- We swap the values of the two nodes to recover the BST.

Time Complexity: O(n)
Space Complexity: O(h)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def recoverTree(root: Optional[TreeNode]) -> None:
    state = {
        'prev': None,
        'first': None,
        'last': None
    }

    def traversal(node: Optional[TreeNode]) -> None:
        if not node:
            return
        traversal(node.left)
        if state['prev'] and node.val < state['prev'].val:
            if not state['first']:
                state['first'] = state['prev']
            state['last'] = node
        state['prev'] = node
        traversal(node.right)

    if not root:
        return
    traversal(root)
    temp = state['first'].val
    state['first'].val = state['last'].val
    state['last'].val = temp

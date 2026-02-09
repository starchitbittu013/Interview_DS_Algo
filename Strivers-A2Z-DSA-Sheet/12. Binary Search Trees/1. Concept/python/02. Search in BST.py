"""Question:

You are given the root of a binary search tree (BST) and an integer `val`. You need to find the node in the BST whose value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `None`.

Approach:

Since the given binary tree is a binary search tree, we can utilize its property to efficiently find the node with the value `val`. We start from the root and compare its value with `val`. If the current node's value is equal to `val`, we return the current node as it is the node we are looking for. If the current node's value is greater than `val`, we need to search in the left subtree because all nodes in the left subtree have smaller values. Similarly, if the current node's value is smaller than `val`, we need to search in the right subtree. We recursively perform this process until we find the desired node or reach a leaf node (where the node is not present).

Complexity Analysis:

- Time Complexity: O(log N) on average for balanced BST, O(N) in the worst case for skewed BST.
- Space Complexity: O(H), where H is the height of the BST.

Code:
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def searchBST(root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
    if not root:
        return None
    if root.val == val:
        return root
    if root.val > val:
        return searchBST(root.left, val)
    else:
        return searchBST(root.right, val)

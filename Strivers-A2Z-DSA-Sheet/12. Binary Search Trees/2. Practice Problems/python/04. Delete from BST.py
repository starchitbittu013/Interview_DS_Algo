"""
Question:
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Approach:
To delete a node with a given key from the BST, we need to search for the node first. If the node is found, there are three possible cases:
1. The node to be deleted is a leaf node (no children).
2. The node to be deleted has only one child (left or right child).
3. The node to be deleted has both left and right children.

Example:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]

Time Complexity: O(log n) on average, O(n) in the worst case.
Space Complexity: O(log n) on average, O(n) in the worst case.

CODE:
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def deleteNode(root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if not root:
        return None
    if root.val == key:
        if not root.left and not root.right:
            return None  # Case: Node to be deleted is a leaf node
        if not root.left or not root.right:
            return root.left if root.left else root.right  # Case: Node to be deleted has only one child
        temp = root.left  # Case: Node to be deleted has both left and right children
        while temp.right is not None:
            temp = temp.right
        root.val = temp.val
        root.left = deleteNode(root.left, temp.val)  # Delete the node that was copied into the current node
    if root.val < key:
        root.right = deleteNode(root.right, key)
    root.left = deleteNode(root.left, key)
    return root

"""
Question:
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Approach:
1. To insert a value 'val' into the BST, we start from the root node and traverse down the tree to find the appropriate position for insertion.
2. If the BST is empty, we create a new node with value 'val' and make it the root of the BST.
3. If the value of the current node is less than 'val', we move to the right subtree.
4. If the value of the current node is greater than or equal to 'val', we move to the left subtree.

Complexity Analysis
Time complexity: O(h), where h is the height of the BST.
Space complexity: O(h), where h is the height of the BST.

CODE:
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def insertIntoBST(root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
    if not root:
        return TreeNode(val)
    if root.val < val:
        root.right = insertIntoBST(root.right, val)
    else:
        root.left = insertIntoBST(root.left, val)
    return root

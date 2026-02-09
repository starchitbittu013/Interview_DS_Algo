"""
Question:
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer.
int next() Moves the pointer to the right, then returns the number at the pointer.

Approach:
- We are using a stack to keep track of the nodes during the in-order traversal of the BST.
- In the constructor, we initialize the stack by pushing all the leftmost nodes in the BST to the stack.

Time Complexity:
- The constructor takes O(h) time.
- The next() and hasNext() functions take O(1) time.

Space Complexity: O(h)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.st = []
        self.pushLeft(root)

    def pushLeft(self, root: Optional[TreeNode]) -> None:
        while root:
            self.st.append(root)
            root = root.left

    def next(self) -> int:
        ans = self.st.pop()
        if ans.right:
            self.pushLeft(ans.right)
        return ans.val

    def hasNext(self) -> bool:
        return len(self.st) > 0

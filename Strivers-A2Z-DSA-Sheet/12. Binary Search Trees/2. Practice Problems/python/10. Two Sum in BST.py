"""
Question:
Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

Explanation:
- We are using two stacks, one for the left traversal and one for the right traversal of the BST.
- The next() function returns the next smallest element in the BST.
- The before() function returns the next largest element in the BST.
- We use the two pointer approach to find the pair of elements whose sum is equal to k.

Time Complexity: O(n)
Space Complexity: O(h)
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class TwoSumBST:
    def __init__(self):
        self.stl = []
        self.str = []

    def pushLeft(self, root: Optional[TreeNode]) -> None:
        while root:
            self.stl.append(root)
            root = root.left

    def pushRight(self, root: Optional[TreeNode]) -> None:
        while root:
            self.str.append(root)
            root = root.right

    def next(self) -> int:
        if not self.stl:
            return int(1e9)
        ans = self.stl.pop()
        if ans.right:
            self.pushLeft(ans.right)
        return ans.val

    def before(self) -> int:
        if not self.str:
            return int(1e9)
        ans = self.str.pop()
        if ans.left:
            self.pushRight(ans.left)
        return ans.val

def findTarget(root: Optional[TreeNode], k: int) -> bool:
    solver = TwoSumBST()
    solver.pushLeft(root)
    solver.pushRight(root)

    l = solver.next()
    r = solver.before()
    while l < r:
        if l == int(1e9) or r == int(1e9):
            return False
        if l + r == k:
            return True
        elif l + r < k:
            l = solver.next()
        else:
            r = solver.before()

    return False

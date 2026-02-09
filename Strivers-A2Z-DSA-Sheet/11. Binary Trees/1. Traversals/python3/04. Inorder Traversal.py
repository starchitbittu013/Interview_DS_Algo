"""
Question:
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Approach:
- inorder traversal visits the left subtree first, followed by the root node, and then the right subtree.
- We can solve this problem recursively by following the inorder traversal order.

Complexity Analysis:
- Since we are visiting each node once, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we are using the call stack for recursion.

Code:
"""
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root: Optional[TreeNode]) -> List[int]:
    ans = []
    solve(root, ans)
    return ans

def solve(root: Optional[TreeNode], ans: List[int]) -> None:
    if not root:
        return
    solve(root.left, ans)
    ans.append(root.val)
    solve(root.right, ans)

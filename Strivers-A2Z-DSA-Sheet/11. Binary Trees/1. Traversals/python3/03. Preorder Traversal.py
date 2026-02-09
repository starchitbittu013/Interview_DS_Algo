"""
Question:
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Approach:
- Preorder traversal visits the root node first, followed by the left subtree, and then the right subtree.
- We can solve this problem recursively by following the preorder traversal order.
- Starting from the root node, we can add the node's value to the result list, then recursively traverse the left subtree and right subtree.

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

def preorderTraversal(root: Optional[TreeNode]) -> List[int]:
    ans = []
    solve(root, ans)
    return ans

def solve(root: Optional[TreeNode], ans: List[int]) -> None:
    if not root:
        return
    ans.append(root.val)
    solve(root.left, ans)
    solve(root.right, ans)

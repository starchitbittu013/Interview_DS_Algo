"""
Question:
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Approach:
- We can perform a preorder traversal iteratively using a stack.
- We start by pushing the root node into the stack.
- Then, while the stack is not empty, we pop a node from the stack, add its value to the result list, and push its right child (if it exists) followed by its left child (if it exists) into the stack.
- By pushing the right child before the left child, we ensure that the left child is processed first during the traversal.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we store the node values in the result list.

Code:
"""
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorderTraversal(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    
    stack = []
    stack.append(root)
    ans = []
    
    while stack:
        curr = stack.pop()
        ans.append(curr.val)
        if curr.right:
            stack.append(curr.right)
        if curr.left:
            stack.append(curr.left)
    
    return ans

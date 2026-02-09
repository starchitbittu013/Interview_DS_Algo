"""
Question:
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Approach:
- We can perform an inorder traversal iteratively using a stack.
- The idea is to push all the left children of a node into the stack until we reach a node with no left child.
- Then, we pop a node from the stack, add its value to the result list, and move to its right child (if it exists).
- We repeat this process until the stack is empty and all nodes are traversed.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we store the node values in the result list and use a stack to keep track of the nodes.

Code:
"""
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def pushLeft(curr: Optional[TreeNode], stack: List[TreeNode]) -> None:
    while curr:
        stack.append(curr)
        curr = curr.left

def inorderTraversal(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    
    stack = []
    curr = root
    pushLeft(curr, stack)
    ans = []
    
    while stack:
        curr = stack.pop()
        ans.append(curr.val)
        curr = curr.right
        if curr:
            pushLeft(curr, stack)
    
    return ans

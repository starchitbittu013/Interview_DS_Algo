"""
Question:
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Approach:
- We can perform a postorder traversal iteratively using a stack and a set.
- The idea is to push all the left children of a node into the stack until we reach a node with no left child.
- Then, we check if the right child of the node exists or has already been visited (using the set).
    - If it does not exist or has been visited, we add the node's value to the result list and pop the node from the stack.
    - Otherwise, we push the right child into the stack and mark it as visited in the set.
- We repeat this process until the stack is empty and all nodes are traversed.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is also O(N) as we store the node values in the result list and use a stack and a set to keep track of the nodes.

Code:
"""
from typing import List, Optional, Set

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def pushLeft(curr: Optional[TreeNode], stack: List[TreeNode], visited: Set[TreeNode]) -> None:
    while curr:
        visited.add(curr)
        stack.append(curr)
        curr = curr.left

def postorderTraversal(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []
    
    ans = []
    stack = []
    curr = root
    visited = set()
    pushLeft(curr, stack, visited)
    
    while stack:
        curr = stack[-1]
        if not curr.right or curr.right in visited:
            ans.append(curr.val)
            stack.pop()
        else:
            pushLeft(curr.right, stack, visited)
    
    return ans

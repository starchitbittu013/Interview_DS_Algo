# 199. Binary Tree Right Side View

# Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

# Input: root = [1,2,3,null,5,null,4]
# Output: [1,3,4]

# Input: root = [1,null,3]
# Output: [1,3]

"""
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root: Optional[TreeNode]) -> List[int]:
    result = []
    if not root:
        return result

    queue = deque()
    queue.append(root)

    while queue:
        n = len(queue)
        for i in range(n):
            curr = queue.popleft()

            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)

            # Add only the last node of the level to the answer for right view
            if i == n - 1:
                result.append(curr.val)
    return result

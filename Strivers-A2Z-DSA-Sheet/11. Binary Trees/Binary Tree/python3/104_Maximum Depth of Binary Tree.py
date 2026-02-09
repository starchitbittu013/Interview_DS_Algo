# 104. Maximum Depth of Binary Tree

# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Input: root = [3,9,20,null,null,15,7]
# Output: 3
# Example 2:

# Input: root = [1,null,2]
# Output: 2

"""
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

from typing import Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root: Optional[TreeNode]) -> int:
    max_depth_value = [0]

    def dfs(node, depth):
        if not node:
            max_depth_value[0] = max(max_depth_value[0], depth)
            return
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    
    dfs(root, 0)
    return max_depth_value[0]


def height(root: Optional[TreeNode]) -> int:
    if not root:
        return 0
    h = 0
    queue = deque()

    queue.append(root)

    while len(queue) > 0:
        length = len(queue)
        for _ in range(length):
            temp = queue.popleft()

            if temp.left is not None:
                queue.append(temp.left)
            if temp.right is not None:
                queue.append(temp.right)
        h += 1
    return h

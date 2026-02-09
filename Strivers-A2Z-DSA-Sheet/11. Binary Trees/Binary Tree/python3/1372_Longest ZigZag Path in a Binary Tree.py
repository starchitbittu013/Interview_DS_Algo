# 1372. Longest ZigZag Path in a Binary Tree

# You are given the root of a binary tree.

# A ZigZag path for a binary tree is defined as follow:

# Choose any node in the binary tree and a direction (right or left).
# If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
# Change the direction from right to left or from left to right.
# Repeat the second and third steps until you can't move in the tree.
# Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

# Return the longest ZigZag path contained in that tree.

# Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
# Output: 3
# Explanation: Longest ZigZag path in blue nodes (right -> left -> right).


"""
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def longestZigZag(root: Optional[TreeNode]) -> int:
    longest_path = [0]

    def maxZigZag(node, go_left, count):
        if not node:
            return

        longest_path[0] = max(longest_path[0], count)

        if go_left:                    
            maxZigZag(node.left, False, count + 1)
            maxZigZag(node.right, True, 1)
        else:                        
            maxZigZag(node.right, True, count + 1)
            maxZigZag(node.left, False, 1)

    maxZigZag(root, True, 0)
    maxZigZag(root, False, 0)

    return longest_path[0]

"""Question:

Write a program to print the path from the root to a given node in a binary tree. You are given a binary tree and a node value. You need to find and print the path from the root to the node.

Approach:

To find the path from the root to the given node, we can use a recursive function. The idea is to traverse the tree from the root and keep track of the path in a list. If the target node is found, add the node's value to the path list, and return True. Otherwise, recursively search for the target node in the left and right subtrees. If the target node is not found, remove the last node from the path list before returning False.

Complexity Analysis:

Let N be the number of nodes in the binary tree.

- Time Complexity: The time complexity of the recursive function is O(N) as we may visit all nodes in the worst case.
- Space Complexity: The space complexity is O(N) due to the space used by the recursion stack and the path list.

Code:
"""
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def findPath(root: Optional[TreeNode], target: int, path: List[int]) -> bool:
    if not root:
        return False

    path.append(root.val)

    if root.val == target:
        return True

    if findPath(root.left, target, path) or findPath(root.right, target, path):
        return True

    path.pop()
    return False

def getPathFromRootToNode(root: Optional[TreeNode], target: int) -> List[int]:
    path = []
    findPath(root, target, path)
    return path

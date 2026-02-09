"""
Question:
You have been given a Binary Tree of 'N' nodes, where the nodes have integer values.
Your task is to find the In-Order, Pre-Order, and Post-Order traversals of the given binary tree.

Approach:
- We can perform the tree traversals recursively using three functions:
    - In-Order Traversal: Visit the left subtree, visit the current node, visit the right subtree.
    - Pre-Order Traversal: Visit the current node, visit the left subtree, visit the right subtree.
    - Post-Order Traversal: Visit the left subtree, visit the right subtree, visit the current node.
- For each traversal, we can maintain a list to store the values of the visited nodes in the respective order.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we store the values of the nodes in lists for each traversal.

Code:
"""
from typing import List, Optional

class BinaryTreeNode:
    def __init__(self, data: int):
        self.data = data
        self.left = None
        self.right = None

def traversal(root: Optional[BinaryTreeNode], pre: List[int], ino: List[int], pos: List[int]) -> None:
    if root is None:
        return

    # Pre-Order Traversal
    pre.append(root.data)
    traversal(root.left, pre, ino, pos)
    # In-Order Traversal
    ino.append(root.data)
    traversal(root.right, pre, ino, pos)
    # Post-Order Traversal
    pos.append(root.data)

def getTreeTraversal(root: Optional[BinaryTreeNode]) -> List[List[int]]:
    pre = []
    ino = []
    pos = []

    traversal(root, pre, ino, pos)

    return [ino, pre, pos]

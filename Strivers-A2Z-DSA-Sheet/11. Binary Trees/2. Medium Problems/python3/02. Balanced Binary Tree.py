"""
Question:
Given a binary tree, determine if it is height-balanced.

Approach:
- We can solve this problem recursively by checking if the left and right subtrees of each node are height-balanced.
- For each node, we calculate the height of its left and right subtrees, and check if the absolute difference of their heights is at most 1.
- If both subtrees are height-balanced, and the absolute difference of their heights is at most 1, then the current node and its subtree are height-balanced.
- We can use a tuple to represent the result of the recursion: the first value indicates if the subtree is height-balanced, and the second value represents the height of the subtree.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(H), where H is the height of the binary tree. In the worst case, the tree can be skewed and have a height of N, resulting in O(N) space complexity. In the best case, the tree is balanced and has a height of log(N), resulting in O(log(N)) space complexity.

Code:
"""
from typing import Optional, Tuple

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root: Optional[TreeNode]) -> Tuple[bool, int]:
    if not root:
        return (True, 0)
    left = solve(root.left)
    right = solve(root.right)
    height = max(left[1], right[1]) + 1
    balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
    return (balanced, height)

def isBalanced(root: Optional[TreeNode]) -> bool:
    result = solve(root)
    return result[0]

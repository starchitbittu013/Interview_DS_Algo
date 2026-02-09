"""
Question:
Given a binary tree. Find the size of its largest subtree that is a Binary Search Tree.

Explanation:
- We use a recursive function to traverse the binary tree in a bottom-up manner.
- At each node, we check if the left and right subtrees are binary search trees.
- We return a triplet containing the size of the subtree, the minimum value, and the maximum value.

Time Complexity: O(n)
Space Complexity: O(h)
"""
from typing import Optional, Tuple

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def solve(root: Optional[Node]) -> Tuple[int, int, int]:
    if not root:
        return (0, float('inf'), float('-inf'))
    lef = solve(root.left)
    rig = solve(root.right)
    if lef[2] < root.data < rig[1]:
        return (lef[0] + rig[0] + 1, min(lef[1], root.data), max(rig[2], root.data))
    # here we are returning such values so that bst condition doesn't satisfy upwards
    return (max(lef[0], rig[0]), float('-inf'), float('inf'))

def largestBst(root: Optional[Node]) -> int:
    ans = solve(root)
    return ans[0]

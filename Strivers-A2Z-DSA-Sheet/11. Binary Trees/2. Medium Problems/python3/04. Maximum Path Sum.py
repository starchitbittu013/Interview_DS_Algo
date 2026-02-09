"""
Question:
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Approach:
- The maximum path sum can be calculated using a recursive approach.
- For each node, we calculate the maximum path sum that includes the node as the root.
- The maximum path sum that includes the current node is the maximum of the following values:
  - The value of the current node.
  - The maximum path sum of the left subtree plus the value of the current node.
  - The maximum path sum of the right subtree plus the value of the current node.
  - The maximum path sum of the left subtree plus the maximum path sum of the right subtree plus the value of the current node.
- During the calculation, we keep track of the maximum path sum encountered so far and update it if necessary.
- We return the maximum path sum encountered overall.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(H), where H is the height of the binary tree. In the worst case, the tree can be skewed and have a height of N, resulting in O(N) space complexity. In the best case, the tree is balanced and has a height of log(N), resulting in O(log(N)) space complexity.

Code:
"""
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(root: Optional[TreeNode], max_sum: List[int]) -> int:
    if not root:
        return 0
    left_sum = max(0, solve(root.left, max_sum))
    right_sum = max(0, solve(root.right, max_sum))
    current_sum = root.val + left_sum + right_sum
    max_sum[0] = max(max_sum[0], current_sum)
    return root.val + max(left_sum, right_sum)

def maxPathSum(root: Optional[TreeNode]) -> int:
    max_sum = [float('-inf')]
    solve(root, max_sum)
    return max_sum[0]

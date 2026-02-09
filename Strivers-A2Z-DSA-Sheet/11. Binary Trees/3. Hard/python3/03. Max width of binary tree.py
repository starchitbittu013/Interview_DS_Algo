"""QUESTION:

Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will be in the range of a 32-bit signed integer.

Example 1:
Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).


APPROACH:

To find the maximum width, we can perform a level-order traversal (BFS) of the binary tree while keeping track of the indices of nodes at each level. For each level, we calculate the width by finding the difference between the indices of the leftmost and rightmost non-null nodes. The maximum width among all levels will be the answer.

COMPLEXITY ANALYSIS:

Let `n` be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n) since we need to traverse all nodes in the binary tree using BFS.
- Space Complexity: The space complexity is O(w) for the queue, where `w` is the maximum width of the binary tree at any level.

CODE:
"""
from typing import Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def widthOfBinaryTree(root: Optional[TreeNode]) -> int:
    if not root:
        return 0
    ans = 0
    queue = deque()
    queue.append((0, root))

    while queue:
        n = len(queue)
        start = queue[0][0]
        end = queue[-1][0]

        for _ in range(n):
            idx, curr = queue.popleft()
            # note we are doing -start because we don't need previous value
            index = idx - start

            if curr.left:
                queue.append((2 * index + 1, curr.left))
            if curr.right:
                queue.append((2 * index + 2, curr.right))

        ans = max(ans, end - start + 1)

    return ans

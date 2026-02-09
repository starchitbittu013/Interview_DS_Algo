"""
Question:
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Approach:
- We can use a queue to perform a level order traversal of the binary tree.
- To achieve the zigzag order, we can use a flag variable to keep track of the current direction (left to right or right to left) for each level.
- Initialize a boolean variable `ltor` to True, where True represents the left to right direction.
- While traversing each level, we store the values of the nodes in a temporary list.
- If `ltor` is True, we push the left child first and then the right child into the queue for the next level.
- If `ltor` is False, we push the right child first and then the left child into the queue for the next level.
- After processing all the nodes in the current level, if `ltor` is False, we reverse the temporary list to achieve the right to left direction for the next level.
- We alternate the value of `ltor` after processing each level to switch between left to right and right to left directions.
- Finally, we return the list containing the zigzag level order traversal.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(M), where M is the maximum number of nodes at any level in the binary tree. In the worst case, the maximum number of nodes at any level can be N/2 (in a complete binary tree), resulting in O(N) space complexity.

Code:
"""
from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []  # Empty tree, return an empty list

    ans = []  # List to store the zigzag level order traversal
    queue = deque()  # Queue for level order traversal
    queue.append(root)
    ltor = True  # Flag variable to track the current direction (left to right or right to left)

    while queue:
        n = len(queue)  # Number of nodes at the current level
        level_values = []  # Temporary list to store the values of nodes at the current level

        for _ in range(n):
            curr = queue.popleft()

            level_values.append(curr.val)

            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)

        if not ltor:
            level_values.reverse()  # Reverse the values to achieve right to left direction

        ans.append(level_values)

        ltor = not ltor  # Alternate the direction for the next level

    return ans

"""
Question:
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Approach:
- We can perform a level order traversal using a queue.
- We start by pushing the root node into the queue.
- Then, while the queue is not empty, we process each level by taking the size of the queue and iterating over the nodes at that level.
- For each node, we add its value to the current level's list and push its left and right child nodes into the queue if they exist.
- After processing each level, we add the level's list to the result list.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we store the node values in the result list.

Code:
"""
from typing import List, Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    ans = []
    if not root:
        return ans
    
    queue = deque()
    queue.append(root)

    while queue:
        level = []
        n = len(queue)
        for _ in range(n):
            curr = queue.popleft()
            level.append(curr.val)
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
        ans.append(level)

    return ans

"""
Question: Given the root of a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.
"""

"""
Approach:
- Perform a level order traversal of the binary tree.
- For each level, keep track of the last node encountered (the rightmost node from the viewer's perspective).
- Add the value of the last node at each level to the result.

Complexity Analysis:
- Time complexity: O(N), where N is the number of nodes in the binary tree.
- Space complexity: O(M), where M is the maximum number of nodes at any level in the tree.

CODE:-
"""
from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []

    ans = []
    queue = deque()
    queue.append(root)

    while queue:
        n = len(queue)
        for i in range(n):
            curr = queue.popleft()
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
            # Add only the last node of the level to the answer for right view in case of left view push only the first element
            if i == n - 1:
                ans.append(curr.val)

    return ans

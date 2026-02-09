"""QUESTION:

Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.


APPROACH:

To find the nodes that are at a distance k from the target node, we can perform a two-step process:
1. First, traverse the binary tree to build a map of each node to its parent node using BFS. This map will help us later to backtrack from the target node to its ancestors.
2. Next, perform a BFS from the target node to find all nodes at a distance k from it. While doing this, we also mark visited nodes to avoid revisiting the same nodes.

COMPLEXITY ANALYSIS:

Let `n` be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n) since we need to traverse the entire binary tree to build the parent map and perform BFS from the target node.
- Space Complexity: The space complexity is O(n) for the parent map and O(k) for the queue used in BFS. In the worst case, when k approaches n, the space complexity becomes O(n).

CODE:
"""
from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def distanceK(root: Optional[TreeNode], target: TreeNode, k: int) -> List[int]:
    ans = []
    parent = {}
    queue = deque()
    queue.append(root)

    while queue:
        si = len(queue)
        for _ in range(si):
            top = queue.popleft()

            if top.left:
                parent[top.left.val] = top
                queue.append(top.left)

            if top.right:
                parent[top.right.val] = top
                queue.append(top.right)

    visited = {}
    queue.append(target)
    while k > 0 and queue:
        k -= 1
        size = len(queue)

        for _ in range(size):
            top = queue.popleft()

            visited[top.val] = 1

            if top.left and top.left.val not in visited:
                queue.append(top.left)

            if top.right and top.right.val not in visited:
                queue.append(top.right)

            if top.val in parent and parent[top.val].val not in visited:
                queue.append(parent[top.val])

    while queue:
        ans.append(queue.popleft().val)
    return ans

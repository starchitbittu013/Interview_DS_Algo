"""
Question:
Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Approach:
- We can perform a level order traversal of the binary tree while keeping track of the horizontal distance (hd) of each node from the root.
- For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively.
- We can use a queue to perform the level order traversal. The queue will store tuples of (hd, node), where hd represents the horizontal distance and node represents the current node being processed.
- During the traversal, we maintain a dictionary to store the nodes at each horizontal distance. The key in the dict is the horizontal distance (hd), and the value is a list of tuples representing the level and value of the nodes at that horizontal distance.
- After the traversal, we iterate over the keys in the dict in ascending order and sort the nodes within each horizontal distance based on their levels. We then extract the values and add them to the result list.
- Finally, we return the result list containing the vertical order traversal.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used to store the nodes in the dictionary during the traversal.

Code:
"""
from typing import Optional, List
from collections import deque, defaultdict

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# NOTE:- we are keeping track of levels because of the question condition but if no such condition exists, then no need of level only hd will work.

def verticalTraversal(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []

    mp = defaultdict(list)
    mini, maxi = 0, 0
    queue = deque()
    queue.append((0, root))

    lvl = 0
    while queue:
        n = len(queue)
        for _ in range(n):
            hd, curr = queue.popleft()
            
            if curr.left:
                mini = min(mini, hd - 1)
                queue.append((hd - 1, curr.left))
            if curr.right:
                maxi = max(maxi, hd + 1)
                queue.append((hd + 1, curr.right))
            
            mp[hd].append((lvl, curr.val))
        lvl += 1

    ans = []
    for i in range(mini, maxi + 1):
        arr = mp[i]
        arr.sort()
        temp = [item[1] for item in arr]
        ans.append(temp)

    return ans

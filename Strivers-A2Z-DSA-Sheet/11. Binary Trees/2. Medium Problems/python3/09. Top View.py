"""
Question:
Given a binary tree, print its top view.

Approach:
- We can perform a level order traversal of the binary tree while keeping track of the horizontal distance (hd) of each node from the root.
- For each node, if the horizontal distance is not present in the dictionary, we add it to the dictionary along with its value.
- Since we want to print the nodes in the order of their horizontal distance, we maintain the minimum and maximum horizontal distances (`mini` and `maxi`) during the traversal.
- Finally, we iterate over the range from `mini` to `maxi` and retrieve the corresponding values from the dictionary, and add them to the result list.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used to store the nodes in the dictionary during the traversal.

Code:
"""
from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, data=0, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def getTopView(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []

    mp = {}
    mini, maxi = 0, 0
    queue = deque()
    queue.append((0, root))

    while queue:
        hd, curr = queue.popleft()
        
        if curr.left:
            mini = min(mini, hd - 1)
            queue.append((hd - 1, curr.left))
        if curr.right:
            maxi = max(maxi, hd + 1)
            queue.append((hd + 1, curr.right))
        
        if hd not in mp:
            mp[hd] = curr.data

    ans = []
    for i in range(mini, maxi + 1):
        ans.append(mp[i])

    return ans

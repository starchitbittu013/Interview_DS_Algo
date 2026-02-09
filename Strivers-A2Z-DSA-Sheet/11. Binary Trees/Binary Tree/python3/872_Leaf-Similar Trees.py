# 872. Leaf-Similar Trees

# Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

# For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

# Two binary trees are considered leaf-similar if their leaf value sequence is the same.

# Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

# Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
# Output: true


"""
Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def getLeafSequence(root: Optional[TreeNode]) -> List[int]:
    sequence = []

    def dfs(node):
        if not node:
            return
        if not node.left and not node.right:
            sequence.append(node.val)
        dfs(node.left)
        dfs(node.right)
    
    dfs(root)
    return sequence

def leafSimilar(root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
    leafSequence1 = getLeafSequence(root1)
    leafSequence2 = getLeafSequence(root2)

    return leafSequence1 == leafSequence2

# The time complexity of this solution is O(n + m),
# where n and m are the number of nodes in root1 and root2, respectively,
# as we perform a DFS traversal on both trees. 
# The space complexity is O(h),
# where h is the height of the trees, as the maximum stack space used
# during the recursive DFS calls is determined by the height of the trees.

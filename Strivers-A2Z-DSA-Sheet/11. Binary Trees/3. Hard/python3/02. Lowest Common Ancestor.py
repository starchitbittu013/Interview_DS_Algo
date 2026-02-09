"""QUESTION:

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.


APPROACH:

To find the lowest common ancestor (LCA) of two nodes `p` and `q` in a binary tree, we can use a recursive approach. We start from the root of the tree and check if either `p` or `q` matches the current node. If one of them matches, it means that the current node is the LCA. Otherwise, we recursively search for `p` and `q` in the left and right subtrees.

COMPLEXITY ANALYSIS:

Let `n` be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n) since we may have to visit all nodes of the binary tree in the worst case.
- Space Complexity: The space complexity is O(h) for the recursive call stack, where `h` is the height of the binary tree. In the worst case, when the binary tree is skewed, the space complexity becomes O(n).


CODE:
"""
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root: Optional[TreeNode], p: TreeNode, q: TreeNode) -> Optional[TreeNode]:
    if not root:
        return None
    if root.val == p.val or root.val == q.val:
        return root

    lef = lowestCommonAncestor(root.left, p, q)
    rig = lowestCommonAncestor(root.right, p, q)

    if not lef:
        return rig
    if not rig:
        return lef
    return root

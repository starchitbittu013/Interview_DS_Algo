"""QUESTION:

Given a Binary Tree. Return true if, for every node X in the tree other than the leaves, its value is equal to the sum of its left subtree's value and its right subtree's value. Else return false.

An empty tree is also a Sum Tree as the sum of an empty tree can be considered to be 0. A leaf node is also considered a Sum Tree.


Example 1:
Input:
    3
  /   \\    
 1     2

Output: 1
Explanation:
The sum of left subtree and right subtree is 1 + 2 = 3, which is the value of the root node.
Therefore, the given binary tree is a sum tree.


APPROACH:

To determine if a binary tree is a Sum Tree, we can perform a post-order traversal of the tree and check if each node satisfies the condition of being a Sum Tree.

For each node in the tree, we will calculate the sum of its left subtree and right subtree. If both subtrees are Sum Trees and the value of the current node is equal to the sum of its subtrees, then the current node is also a Sum Tree. Otherwise, it is not a Sum Tree.

To indicate that the current node is not a Sum Tree, we return a special value (e.g., float('-inf')) from the recursive function. If the result is float('-inf'), then the binary tree is not a Sum Tree. Otherwise, it is a Sum Tree.

COMPLEXITY ANALYSIS:

Let `n` be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n) as we visit each node in the binary tree once during the post-order traversal.
- Space Complexity: The space complexity is O(h) due to the recursion stack, where h is the height of the binary tree.

CODE:
"""
from typing import Optional

class Node:
    def __init__(self, data=0, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def solve(root: Optional[Node]) -> int:
    if not root:
        return 0
    if not root.left and not root.right:
        return root.data
    
    lef = solve(root.left)
    rig = solve(root.right)
    
    return 2 * root.data if lef + rig == root.data else float('-inf')

def isSumTree(root: Optional[Node]) -> bool:
    ans = solve(root)
    return ans != float('-inf')

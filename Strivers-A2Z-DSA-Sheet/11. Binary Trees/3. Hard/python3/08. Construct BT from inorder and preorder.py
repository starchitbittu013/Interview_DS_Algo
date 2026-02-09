"""QUESTION:

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

APPROACH:

The preorder traversal follows the root-left-right order, while the inorder traversal follows the left-root-right order. Based on these two traversals, we can construct the binary tree recursively.

1. The first element in the preorder traversal array is the root of the binary tree.
2. We can find the position of the root in the inorder traversal array. All the elements to the left of this position will be in the left subtree, and all the elements to the right will be in the right subtree.
3. Recursively, we can build the left and right subtrees using the corresponding portions of the preorder and inorder traversal arrays.
4. The recursive function takes the index of the current element in the preorder traversal array, the starting and ending indices of the current portion in the inorder traversal array, and the preorder and inorder traversal arrays as inputs.
5. In each recursive call, we create a new node with the value of the current element in the preorder traversal array and determine its left and right subtrees by calling the recursive function on the corresponding portions of the inorder and preorder traversal arrays.
6. The base case is when the starting index is greater than the ending index, indicating an empty portion of the tree. In this case, we return None.
7. Finally, we return the root of the constructed binary tree.

COMPLEXITY ANALYSIS:

Let n be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n), as we visit each node once.
- Space Complexity: The space complexity is O(n) for the recursive call stack.

CODE:
"""
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def solve(i: int, ins: int, ine: int, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    if i >= len(preorder) or ins > ine:
        return None

    loc = -1
    for j in range(ins, ine + 1):
        if inorder[j] == preorder[i]:
            loc = j

    root = TreeNode(preorder[i])
    root.left = solve(i + 1, ins, loc - 1, preorder, inorder)
    # Note: the index of the right child in preorder is the number of nodes in the left subtree + 1
    root.right = solve(i + (loc - ins + 1), loc + 1, ine, preorder, inorder)

    return root

def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    n = len(inorder)
    return solve(0, 0, n - 1, preorder, inorder)

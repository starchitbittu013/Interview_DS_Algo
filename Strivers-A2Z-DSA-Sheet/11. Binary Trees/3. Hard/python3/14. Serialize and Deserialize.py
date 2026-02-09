"""QUESTION:

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

APPROACH:

To serialize the binary tree, we can perform a preorder traversal of the tree and append the node values to a string, separating them by a delimiter.

To deserialize the string back to the original tree structure, we can split the string by the delimiter and recursively build the tree.

1. For serialization:
   - If the current node is None, we append "N," to the string.
   - Otherwise, we append the node value followed by a delimiter "," to the string.
   - We then recursively serialize the left and right subtrees.

2. For deserialization:
   - If the current string token is "N," indicating a None node, we return None.
   - Otherwise, we convert the string token to an integer and create a new TreeNode with the value.
   - We then recursively deserialize the left and right subtrees.

COMPLEXITY ANALYSIS:

Let n be the number of nodes in the binary tree.
- Time Complexity:
  - Serialization: O(n) - We visit each node once during the serialization process.
  - Deserialization: O(n) - We process each string token once during the deserialization process.
- Space Complexity: O(n) - The space required for the serialized string and the recursion stack.

CODE:
"""
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serializeHelper(root: Optional[TreeNode], serialized: List[str]) -> None:
    if not root:
        serialized.append("N")
        return
    serialized.append(str(root.val))
    serializeHelper(root.left, serialized)
    serializeHelper(root.right, serialized)

def serialize(root: Optional[TreeNode]) -> str:
    serialized = []
    serializeHelper(root, serialized)
    return ",".join(serialized)

def deserializeHelper(tokens: List[str], index: List[int]) -> Optional[TreeNode]:
    if index[0] >= len(tokens):
        return None
    
    token = tokens[index[0]]
    index[0] += 1
    
    if token == "N":
        return None
    
    root = TreeNode(int(token))
    root.left = deserializeHelper(tokens, index)
    root.right = deserializeHelper(tokens, index)
    return root

def deserialize(data: str) -> Optional[TreeNode]:
    tokens = data.split(",")
    index = [0]
    return deserializeHelper(tokens, index)

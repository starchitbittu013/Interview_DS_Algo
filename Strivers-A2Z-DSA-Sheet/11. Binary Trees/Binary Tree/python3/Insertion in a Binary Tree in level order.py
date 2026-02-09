# Insertion in a Binary Tree in level order

# Given a binary tree and a key, insert the key into the binary tree at the first position available in level order.


# The idea is to do an iterative level order traversal of the given tree using queue. 
# If we find a node whose left child is empty, we make a new key as the left child of the node. 
# Else if we find a node whose right child is empty, we make the new key as the right child. 
# We keep traversing the tree until we find a node whose either left or right child is empty. 

from typing import Optional
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(node: Optional[TreeNode]) -> None:
    if not node:
        return
    inorder(node.left)
    print(node.val)
    inorder(node.right)

def insertLevelOrder(root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
    if root is None:
        return TreeNode(key)
    
    queue = deque()
    queue.append(root)

    while len(queue) > 0:
        temp = queue.popleft()
        
        if temp.left is None:
            temp.left = TreeNode(key)
            break
        else:
            queue.append(temp.left)

        if temp.right is None:
            temp.right = TreeNode(key)
            break
        else:
            queue.append(temp.right)
    
    return root

"""
          10
    11          9
  7          15   8

"""

/*
Question:
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Approach:
To delete a node with a given key from the BST, we need to search for the node first. If the node is found, there are three possible cases:
1. The node to be deleted is a leaf node (no children).
2. The node to be deleted has only one child (left or right child).
3. The node to be deleted has both left and right children.

Example:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]

Time Complexity: O(log n) on average, O(n) in the worst case.
Space Complexity: O(log n) on average, O(n) in the worst case.

CODE:-
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root, key) {
    if (!root) return null;
    if (root.val === key) {
        if (!root.left && !root.right) return null; // Case: Node to be deleted is a leaf node
        if (!root.left || !root.right) return root.left ? root.left : root.right; // Case: Node to be deleted has only one child
        let temp = root.left; // Case: Node to be deleted has both left and right children
        while (temp.right !== null) temp = temp.right;
        root.val = temp.val;
        root.left = deleteNode(root.left, temp.val); // Delete the node that was copied into the current node
    } 
    if (root.val < key) root.right = deleteNode(root.right, key);
    root.left = deleteNode(root.left, key);
    return root;
}

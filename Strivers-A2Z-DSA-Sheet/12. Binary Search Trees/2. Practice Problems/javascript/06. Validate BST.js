/*
Question:
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Approach:
- Initialize the range with -Infinity and Infinity values.
- Now, if a node.val is out of the range then it's not a BST
- And, then check for the left and right subtrees with modified range 

Time Complexity: O(n)
Space Complexity: O(h)
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function solve(root, low, high) {
    if (!root) return true;
    if (root.val >= high || root.val <= low) return false;
    return solve(root.left, low, root.val) && solve(root.right, root.val, high); 
}

function isValidBST(root) {
    if (!root) return true;
    return solve(root, -Infinity, Infinity);
}

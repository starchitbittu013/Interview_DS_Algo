/*
Question:
Given an array of integers preorder, which represents the preorder traversal of a BST, construct the tree and return its root.

Example:
Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Approach:
- The first element of the preorder traversal is the root of the BST.
- We start with the first element and recursively build the BST.

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

function solve(indexRef, pre, bound) {
    if (indexRef.val >= pre.length || pre[indexRef.val] > bound) {
        return null;
    }
    const root = new TreeNode(pre[indexRef.val++]);
    root.left = solve(indexRef, pre, root.val);
    root.right = solve(indexRef, pre, bound);
    return root;
}

function bstFromPreorder(preorder) {
    const indexRef = { val: 0 };
    return solve(indexRef, preorder, Infinity);
}

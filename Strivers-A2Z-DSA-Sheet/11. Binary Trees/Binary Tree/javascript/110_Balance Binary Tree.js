/**
Given a binary tree, determine if it is height-balanced.

 Height-Balanced: A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

 */ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfsHeight(root) !== -1;

    function dfsHeight(root) {
        if(!root) return 0;

        let leftHeight = dfsHeight(root.left);
        if(leftHeight === -1) return -1;
        
        let rightHeight = dfsHeight(root.right);
        if(rightHeight === -1) return -1;

        if(Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }
};

// TC: O(N) : height of the tree
// O(N) : Recursion Stack in worst case

// Brute Force

/**
function isBalanced(root) {
    if(!root) return true;

    function findHeight(node) {
        if(!node) return 0;

        let left = findHeight(node.left);
        let right = findHeight(node.right);

        return 1 + Math.max(left, right);
    }

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);

    if(Math.abs(leftHeight - rightHeight) > 1) return false;

    let left = isBalanced(root.left);
    let right = isBalanced(root.right);

    if(left === false || right === false) return false;

    return true;
}

// TC: O(N^2)
// O(N) : Recursion Stack in worst case

 */
// 1372. Longest ZigZag Path in a Binary Tree

// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor() {
        this.root = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let longestPath = 0;

    maxZigZag(root, true, 0);
    maxZigZag(root, false, 0);

    function maxZigZag(node, goLeft, count) {
        if (!node) return;

        longestPath = Math.max(longestPath, count);

        if (goLeft === true) {                    
            maxZigZag(node.left, false, count + 1);
            maxZigZag(node.right, true, 1);
        } else {                        
            maxZigZag(node.right, true, count + 1);
            maxZigZag(node.left, false, 1);
        }
    }
    return longestPath;
};

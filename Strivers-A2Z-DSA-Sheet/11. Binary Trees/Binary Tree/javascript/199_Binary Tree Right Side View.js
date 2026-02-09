// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,null,3]
// Output: [1,3]

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
}

class Tree {
    constructor() {
        this.root = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    if (!root) return result;

    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const curr = queue.shift();

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            // Add only the last node of the level to the answer for right view
            if (i === n - 1) {
                result.push(curr.val);
            }
        }
    }
    return result;
};

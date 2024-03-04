// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

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
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;

    function dfs(node, depth) {
        if (!node) {
            maxDepth = Math.max(maxDepth, depth);
            return;
        }
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
    dfs(root, 0);
    return maxDepth;
};


function height(root) {
    let height = 0;
    let queue = [];

    queue.push(root);

    // console.log(queue);

    while(queue.length > 0) {
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let temp = queue.shift();

            if(temp.left !== null) {
                queue.push(temp.left);
            }
            if(temp.right !== null) {
                queue.push(temp.right);
            }
        }
        height++;
    }
    return height;
}

const tree = new Tree();

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log(maxDepth(tree.root));

console.log(height(tree.root));
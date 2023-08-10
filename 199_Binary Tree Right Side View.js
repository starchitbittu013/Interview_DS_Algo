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
        this.root = data;
        this.left = null;
        this.root = null;
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
    
};

const tree = new Tree();

tree.root = new TreeNode(1);

tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.right = new TreeNode(5);
tree.root.right.right = new TreeNode(4);

console.log(rightSideView(tree.root));
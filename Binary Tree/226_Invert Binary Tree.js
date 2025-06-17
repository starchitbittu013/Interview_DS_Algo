// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    invertTree(root.left);
    invertTree(root.right);

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
};

const tree = new Tree();

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
//tree.root.left.left = new TreeNode(4);
//tree.root.left.right = new TreeNode(5);

console.log(invertTree(tree.root));
// 1448. Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.


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
 * @return {number}
 */
var goodNodes = function(root) {
    const count = findGoodNodesCount(root);   
    return count;
};

function findGoodNodesCount(root) {
    let good = 0;
    function dfs(node, max) {        
        if (!node) {
            return;
        }
        if (node.val >=max) {   
            good++; 
            max = Math.max(max, node.val);
        }
        dfs(node.left, max);
        dfs(node.right, max);
    }
    dfs(root, root.val);    
    return good;
}

const tree = new Tree();

tree.root = new TreeNode(3);
tree.root.left = new TreeNode(1);
tree.root.left.left = new TreeNode(3);
tree.root.right = new TreeNode(4);
tree.root.right.left = new TreeNode(1);
tree.root.right.right = new TreeNode(5);


console.log(goodNodes(tree.root));

// 236. Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
      return root;
    }
  
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    if (left !== null && right !== null) {
      return root;
    } else if (left !== null) {
      return left;
    } else if (right !== null) {
      return right;
    } else {
      return null;
    }
  };

const tree = new Tree();
tree.root = new TreeNode(3);

tree.root.left = new TreeNode(5);
tree.root.left.left = new TreeNode(6);
tree.root.left.right = new TreeNode(2);
tree.root.left.right.left = new TreeNode(7);
tree.root.left.right.right = new TreeNode(4);

tree.root.right = new TreeNode(1);
tree.root.right.left = new TreeNode(0);
tree.root.right.right = new TreeNode(8);


const lcaNode = lowestCommonAncestor(tree.root, tree.root.left, tree.root.right);

console.log(lcaNode.val);

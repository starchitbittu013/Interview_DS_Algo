/** 
1382. Balance a Binary Search Tree

Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.


Example 1:

Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
Example 2:


Input: root = [2,1,3]
Output: [2,1,3]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 105

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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let values = [];

    function inorder(root) {
        if(!root) return;

        inorder(root.left);
        values.push(root.val);
        inorder(root.right);
    }

    function buildBalancedBST(l, r) {
        if(l > r) return null;

        let mid = Math.floor((l + r) / 2);
        let root = new TreeNode(values[mid]);
        
        root.left = buildBalancedBST(l, mid - 1);
        root.right = buildBalancedBST(mid + 1, r);

        return root;
    }

    inorder(root);
    
    return buildBalancedBST(0, values.length - 1);
};

class Tree {
    constructor() {
        this.root = null;
    }
};

class TreeNode {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);

let balancedRoot = balanceBST(root);
console.log(balancedRoot);

// print result
printLevelOrder(balancedRoot);

// helper to print tree level order
function printLevelOrder(root) {
    if (!root) return;

    let queue = [root];

    while (queue.length) {
        let node = queue.shift();
        process.stdout.write(node.val + " ");

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    console.log();
}

/**
 
🧠 Interview Insight (Very Important)

Whenever you see:
👉 “balance a BST”
👉 “height balanced BST”
👉 “convert skewed BST”

Your brain should immediately go:

inorder → sorted array → build BST using middle element

This is a top 50 BST interview pattern.

 */
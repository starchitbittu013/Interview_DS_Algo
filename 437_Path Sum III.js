// 437. Path Sum III

// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

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
 * @param {number} targetSum
 * @return {number}
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

/*
var pathSum = function(root, targetSum) {
    let count = 0;
    traverse(root);

    function traverse (node) {
        if (node === null) return;

        dfs(node, 0);
        traverse(node.left);
        traverse(node.right);

    }
    function dfs(node, currentSum) {            
        if(!node) return;

        currentSum += node.val;
        if (currentSum == targetSum) {
            count++;            
        }
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    }
    return count;    
};

// TC: O(n*2)

*/

var pathSum = function(root, targetSum) {
    let count = 0;
    let sumCountMap = new Map();
    function dfs(node, currentSum) {            
        if(!node) return;

        currentSum += node.val;
        if (currentSum == targetSum) {
            count++;            
        }
        if (sumCountMap.has(currentSum - targetSum)) {
            count += sumCountMap.get(currentSum - targetSum);
        }

        sumCountMap.set(currentSum, (sumCountMap.get(currentSum) || 0) + 1);

        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        // Important line, Remove the currentSum from Map while backtracking.
        sumCountMap.set(currentSum, (sumCountMap.get(currentSum) || 0) - 1);
    }
    dfs(root, 0);
    return count;    
};

// TC: O(n)
// SC: O(h)




const tree = new Tree()
tree.root = new TreeNode(10);
tree.root.left = new TreeNode(5);
tree.root.left.left = new TreeNode(3);
tree.root.left.right = new TreeNode(2);
tree.root.left.right.right = new TreeNode(1);
tree.root.left.left.left = new TreeNode(3);
tree.root.left.left.right = new TreeNode(-2);
tree.root.right = new TreeNode(-3);
tree.root.right.right = new TreeNode(11);

console.log(pathSum(tree.root, 8));



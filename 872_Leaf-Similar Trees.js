// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor() {
        this.root = null;
    }

};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafSequence1 = getLeafSequence(root1);
    const leafSequence2 = getLeafSequence(root2);

    // let result1 = [];
    // let result2 = [];

    // result1 = getLeaf(root1, result1);
    // result2 = getLeaf(root2, result2);

    // function getLeaf(root, res) {        
    //     if (!root) {
    //         return;
    //     }
    
    //     if (!root.left && !root.right) {
    //         res.push(root.val);
    //     }
    
    //     if (root.left) getLeaf(root.left, res);
    //     if (root.right) getLeaf(root.right, res);
    
    //     return res;
    // }

    console.log(leafSequence1);
    console.log(leafSequence2);

    return leafSequence1.toString() === leafSequence2.toString() ;
};

function getLeafSequence(root) {
    const sequence = [];

    function dfs(node) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            sequence.push(node.val);
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);

    return sequence;
}

const tree = new Tree();
tree.root1 = new TreeNode(1);
tree.root1.left = new TreeNode(2);
tree.root1.right = new TreeNode(3);

tree.root2 = new TreeNode(15);
tree.root2.left = new TreeNode(2);
tree.root2.right = new TreeNode(3);

console.log(leafSimilar(tree.root1, tree.root2));


// The time complexity of this solution is O(n + m),
// where n and m are the number of nodes in root1 and root2, respectively,
// as we perform a DFS traversal on both trees. 
//The space complexity is O(h),
// where h is the height of the trees, as the maximum stack space used
// during the recursive DFS calls is determined by the height of the trees.
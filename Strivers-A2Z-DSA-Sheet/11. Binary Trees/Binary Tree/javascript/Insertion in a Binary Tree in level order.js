// Insertion in a Binary Tree in level order

// Given a binary tree and a key, insert the key into the binary tree at the first position available in level order.


// The idea is to do an iterative level order traversal of the given tree using queue. 
// If we find a node whose left child is empty, we make a new key as the left child of the node. 
// Else if we find a node whose right child is empty, we make the new key as the right child. 
// We keep traversing the tree until we find a node whose either left or right child is empty. 

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

function inorder(node) {
    if(!node) return;
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);    
}

var insertLevelOrder = function(root, key) {
    if(root === null) {
        return new TreeNode(key);
    }
    let queue = [];
    queue.push(root);

    while(queue.length > 0) {
        const temp = queue.shift();
        
        if(temp.left === null) {
            temp.left = new TreeNode(key);
            break;
        } else {
            queue.push(temp.left);
        }

        if(temp.right === null) {
            temp.right = new TreeNode(key);
            break;
        } else {
            queue.push(temp.right);
        }
    }
    return root;
}

/*
          10
    11          9
  7          15   8

*/

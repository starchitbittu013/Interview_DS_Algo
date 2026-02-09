// Insertion in a Binary Tree in level order

// Given a binary tree and a key, insert the key into the binary tree at the first position available in level order.


// The idea is to do an iterative level order traversal of the given tree using queue. 
// If we find a node whose left child is empty, we make a new key as the left child of the node. 
// Else if we find a node whose right child is empty, we make the new key as the right child. 
// We keep traversing the tree until we find a node whose either left or right child is empty. 

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* node) {
    if (!node) return;
    inorder(node->left);
    cout << node->val << " ";
    inorder(node->right);    
}

TreeNode* insertLevelOrder(TreeNode* root, int key) {
    if (root == nullptr) {
        return new TreeNode(key);
    }
    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        TreeNode* temp = q.front();
        q.pop();
        
        if (temp->left == nullptr) {
            temp->left = new TreeNode(key);
            break;
        } else {
            q.push(temp->left);
        }

        if (temp->right == nullptr) {
            temp->right = new TreeNode(key);
            break;
        } else {
            q.push(temp->right);
        }
    }
    return root;
}

/*
          10
    11          9
  7          15   8

*/

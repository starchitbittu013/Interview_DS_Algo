// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

// Recursive Approach....

bool isMirror(TreeNode* node1, TreeNode* node2) {
    // Base case to exit the recursion
    if (node1 == nullptr && node2 == nullptr) return true;
    if (node1 == nullptr || node2 == nullptr) return false;

    // Compare the root node value and check if left subtree is mirror or right subtree
    if (node1->val == node2->val) {
        return isMirror(node1->left, node2->right) && isMirror(node1->right, node2->left);
    }
    return false;
}

bool isSymmetric(TreeNode* root) {
    return isMirror(root, root);
}


// Iterative Approach....

bool isSymmetricIterative(TreeNode* root) {
    if (root == nullptr) return true;
    stack<TreeNode*> st;

    st.push(root->left);
    st.push(root->right);

    while (!st.empty()) {
        TreeNode* node1 = st.top(); st.pop();
        TreeNode* node2 = st.top(); st.pop();

        if (node1 == nullptr && node2 == nullptr) continue;
        if (node1 == nullptr || node2 == nullptr) return false;

        if (node1->val == node2->val) {
            st.push(node1->left);
            st.push(node2->right);
            st.push(node1->right);
            st.push(node2->left);
        } else return false;
    }
    return true;
}

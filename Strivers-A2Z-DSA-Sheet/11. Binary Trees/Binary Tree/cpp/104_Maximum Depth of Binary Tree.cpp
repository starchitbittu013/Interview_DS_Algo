// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

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

int maxDepthValue = 0;

void dfs(TreeNode* node, int depth) {
    if (!node) {
        maxDepthValue = max(maxDepthValue, depth);
        return;
    }
    dfs(node->left, depth + 1);
    dfs(node->right, depth + 1);
}

int maxDepth(TreeNode* root) {
    maxDepthValue = 0;
    dfs(root, 0);
    return maxDepthValue;
}


int height(TreeNode* root) {
    if (!root) return 0;
    int h = 0;
    queue<TreeNode*> q;

    q.push(root);

    while (!q.empty()) {
        int length = q.size();
        for (int i = 0; i < length; i++) {
            TreeNode* temp = q.front();
            q.pop();

            if (temp->left != nullptr) {
                q.push(temp->left);
            }
            if (temp->right != nullptr) {
                q.push(temp->right);
            }
        }
        h++;
    }
    return h;
}

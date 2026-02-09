/*
Question:
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Approach:
To find the kth smallest value in a binary search tree (BST), we can perform an in-order traversal of the BST and keep track of the count of nodes visited so far.

Time Complexity: O(log n + k)
Space Complexity: O(log n)

CODE:-
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorder(root, k, state) {
    if (!root) return;
    inorder(root.left, k, state);
    state.cnt++;
    if (state.cnt === k) {
        state.ans = root.val;
        return;
    }
    inorder(root.right, k, state);
}

function kthSmallest(root, k) {
    const state = { ans: -1, cnt: 0 };
    inorder(root, k, state);
    return state.ans;
}

/**Question:**

You are given the root of a binary search tree (BST) and an integer `val`. You need to find the node in the BST whose value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

**Approach:**

Since the given binary tree is a binary search tree, we can utilize its property to efficiently find the node with the value `val`. We start from the root and compare its value with `val`. If the current node's value is equal to `val`, we return the current node as it is the node we are looking for. If the current node's value is greater than `val`, we need to search in the left subtree because all nodes in the left subtree have smaller values. Similarly, if the current node's value is smaller than `val`, we need to search in the right subtree. We recursively perform this process until we find the desired node or reach a leaf node (where the node is not present).

**Complexity Analysis:**

Let's analyze the time and space complexity of our approach:

- Time Complexity: O(log N) on average for balanced BST, O(N) in the worst case for skewed BST.
- Space Complexity: O(H), where H is the height of the BST.

**Code:**/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function searchBST(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    else return searchBST(root.right, val);
}

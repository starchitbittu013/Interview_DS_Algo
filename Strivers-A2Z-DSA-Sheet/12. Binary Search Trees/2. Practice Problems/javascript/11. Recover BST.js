/*
Question:
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

Explanation:
- We perform an in-order traversal of the BST to find the two nodes that are swapped.
- During the in-order traversal, we keep track of the previous node and compare it with the current node.
- We swap the values of the two nodes to recover the BST.

Time Complexity: O(n)
Space Complexity: O(h)
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function recoverTree(root) {
    const state = {
        prev: null,
        first: null,
        last: null
    };

    function traversal(node) {
        if (!node) return;
        traversal(node.left);
        if (state.prev && node.val < state.prev.val) {
            if (!state.first)
                state.first = state.prev;
            state.last = node;
        }
        state.prev = node;
        traversal(node.right);
    }

    if (!root) return;
    traversal(root);
    const temp = state.first.val;
    state.first.val = state.last.val;
    state.last.val = temp;
}

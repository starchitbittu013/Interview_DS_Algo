/*
Question:
Given a binary tree. Find the size of its largest subtree that is a Binary Search Tree.

Explanation:
- We use a recursive function to traverse the binary tree in a bottom-up manner.
- At each node, we check if the left and right subtrees are binary search trees.
- We return a triplet containing the size of the subtree, the minimum value, and the maximum value.

Time Complexity: O(n)
Space Complexity: O(h)
*/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function solve(root) {
    if (!root) return { size: 0, min: Infinity, max: -Infinity };
    const lef = solve(root.left);
    const rig = solve(root.right);
    if (lef.max < root.data && root.data < rig.min) {
        return {
            size: lef.size + rig.size + 1,
            min: Math.min(lef.min, root.data),
            max: Math.max(rig.max, root.data)
        };
    }
    // here we are returning such values so that bst condition doesn't satisfy upwards
    return { size: Math.max(lef.size, rig.size), min: -Infinity, max: Infinity };
}

function largestBst(root) {
    const ans = solve(root);
    return ans.size;
}

/*
Question:
You have been given a Binary Tree of 'N' nodes, where the nodes have integer values.
Your task is to find the In-Order, Pre-Order, and Post-Order traversals of the given binary tree.

Approach:
- We can perform the tree traversals recursively using three functions:
    - In-Order Traversal: Visit the left subtree, visit the current node, visit the right subtree.
    - Pre-Order Traversal: Visit the current node, visit the left subtree, visit the right subtree.
    - Post-Order Traversal: Visit the left subtree, visit the right subtree, visit the current node.
- For each traversal, we can maintain an array to store the values of the visited nodes in the respective order.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we store the values of the nodes in arrays for each traversal.

Code:
*/

function traversal(root, pre, ino, pos) {
    if (root === null) {
        return;
    }

    // Pre-Order Traversal
    pre.push(root.data);
    traversal(root.left, pre, ino, pos);
    // In-Order Traversal
    ino.push(root.data);
    traversal(root.right, pre, ino, pos);
    // Post-Order Traversal
    pos.push(root.data);
}

function getTreeTraversal(root) {
    const pre = [];
    const ino = [];
    const pos = [];

    traversal(root, pre, ino, pos);

    return [ino, pre, pos];
}

/*
Question:
Given the root of a binary tree, return the length of the diameter of the tree.

Approach:
- The diameter of a binary tree is the length of the longest path between any two nodes in the tree.
- This path may or may not pass through the root.
- To find the diameter of the tree, we can recursively calculate the height of each node's left and right subtrees.
- At each node, we calculate the diameter as the maximum of the following three values:
  - The diameter of the left subtree.
  - The diameter of the right subtree.
  - The sum of the heights of the left and right subtrees plus one (for the current node).
- We update the diameter variable with the maximum diameter encountered during the traversal.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(H), where H is the height of the binary tree. In the worst case, the tree can be skewed and have a height of N, resulting in O(N) space complexity. In the best case, the tree is balanced and has a height of log(N), resulting in O(log(N)) space complexity.

Code:
*/

function maxDepth(root, diameterRef) {
    if (!root) {
        return 0;
    }
    const left = maxDepth(root.left, diameterRef);
    const right = maxDepth(root.right, diameterRef);
    diameterRef.value = Math.max(diameterRef.value, left + right);
    return Math.max(left, right) + 1;
}

function diameterOfBinaryTree(root) {
    const diameterRef = { value: 0 };
    maxDepth(root, diameterRef);
    return diameterRef.value;
}

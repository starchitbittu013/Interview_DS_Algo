/*
Question:
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Approach:
- postorder traversal visits the left subtree first, followed by the right subtree, and then the root node.
- We can solve this problem recursively by following the postorder traversal order.

Complexity Analysis:
- Since we are visiting each node once, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N) as we are using the call stack for recursion.

Code:
*/

function postorderTraversal(root) {
    const ans = [];
    solve(root, ans);
    return ans;
}

function solve(root, ans) {
    if (!root) {
        return;
    }
    solve(root.left, ans);
    solve(root.right, ans);
    ans.push(root.val);
}

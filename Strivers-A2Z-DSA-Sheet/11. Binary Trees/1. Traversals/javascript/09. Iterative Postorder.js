/*
Question:
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Approach:
- We can perform a postorder traversal iteratively using a stack and a map.
- The idea is to push all the left children of a node into the stack until we reach a node with no left child.
- Then, we check if the right child of the node exists or has already been visited (using the map).
    - If it does not exist or has been visited, we add the node's value to the result array and pop the node from the stack.
    - Otherwise, we push the right child into the stack and mark it as visited in the map.
- We repeat this process until the stack is empty and all nodes are traversed.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is also O(N) as we store the node values in the result array and use a stack and a map to keep track of the nodes.

Code:
*/

function pushLeft(curr, stack, visited) {
    while (curr) {
        visited.set(curr, true);
        stack.push(curr);
        curr = curr.left;
    }
}

function postorderTraversal(root) {
    if (!root) {
        return [];
    }
    const ans = [];
    const stack = [];
    let curr = root;
    const visited = new Map();
    pushLeft(curr, stack, visited);
    while (stack.length > 0) {
        curr = stack[stack.length - 1];
        if (!curr.right || visited.has(curr.right)) {
            ans.push(curr.val);
            stack.pop();
        } else {
            pushLeft(curr.right, stack, visited);
        }
    }
    return ans;
}

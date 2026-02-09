/* QUESTION:

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

APPROACH:

To serialize the binary tree, we can perform a preorder traversal of the tree and append the node values to a string, separating them by a delimiter.

To deserialize the string back to the original tree structure, we can split the string by the delimiter and recursively build the tree.

1. For serialization:
   - If the current node is null, we append "N," to the string.
   - Otherwise, we append the node value followed by a delimiter "," to the string.
   - We then recursively serialize the left and right subtrees.

2. For deserialization:
   - If the current string token is "N," indicating a null node, we return null.
   - Otherwise, we convert the string token to an integer and create a new TreeNode with the value.
   - We then recursively deserialize the left and right subtrees.

COMPLEXITY ANALYSIS:

Let n be the number of nodes in the binary tree.
- Time Complexity:
  - Serialization: O(n) - We visit each node once during the serialization process.
  - Deserialization: O(n) - We process each string token once during the deserialization process.
- Space Complexity: O(n) - The space required for the serialized string and the recursion stack.

CODE:
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function serializeHelper(root, serialized) {
    if (!root) {
        serialized.push("N");
        return;
    }
    serialized.push(root.val.toString());
    serializeHelper(root.left, serialized);
    serializeHelper(root.right, serialized);
}

function serialize(root) {
    const serialized = [];
    serializeHelper(root, serialized);
    return serialized.join(",");
}

function deserializeHelper(tokens, indexRef) {
    if (indexRef.i >= tokens.length) return null;
    
    const token = tokens[indexRef.i];
    indexRef.i++;
    
    if (token === "N") return null;
    
    const root = new TreeNode(parseInt(token));
    root.left = deserializeHelper(tokens, indexRef);
    root.right = deserializeHelper(tokens, indexRef);
    return root;
}

function deserialize(data) {
    const tokens = data.split(",");
    const indexRef = { i: 0 };
    return deserializeHelper(tokens, indexRef);
}

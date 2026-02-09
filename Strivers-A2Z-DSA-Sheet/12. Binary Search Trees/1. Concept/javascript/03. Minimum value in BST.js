/**QUESTION:**

Given a Binary Search Tree (BST), find the minimum value in it.

Example:


    8
   / 
  5
 / \
3   6 


BST for the given input looks like the above. The minimum value in this BST is `3`.

**APPROACH:**

To find the minimum value in a BST, we can traverse the left child nodes until we reach the leftmost leaf node, which will have the minimum value.

**COMPLEXITY ANALYSIS:**

Let 'n' be the number of nodes in the BST.

- Time Complexity: O(h), where 'h' is the height of the BST.
- Space Complexity: O(1) as we are not using any extra space.

**CODE:**/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function minVal(root) {
    if (!root) return -1;
    while (root.left)
        root = root.left;
    return root.data;
}

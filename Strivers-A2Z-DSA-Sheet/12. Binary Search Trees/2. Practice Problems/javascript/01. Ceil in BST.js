/**QUESTION:**

Given a Binary Search Tree (BST) and a number `X`, find the Ceil of `X`. Ceil(X) is a number that is either equal to `X` or is immediately greater than `X` in the BST.

If the Ceil of `X` could not be found, return `-1`.

**Example 1:**

Input:

      5
    /   \
   1     7
    \
     2 
      \
       3
X = 3

Output: 3

Explanation: We find 3 in the BST, so the ceil of 3 is 3.

**APPROACH:**

To find the Ceil of a given number `X`, we can perform a traversal of the BST and keep track of the node with the smallest value that is greater than or equal to `X`. 

**COMPLEXITY ANALYSIS:**

The time complexity of this approach is O(h), where `h` is the height of the BST.
The space complexity is O(1) since we are using a constant amount of extra space.

**CODE:**/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function solve(root, x, ansRef) {
    if (!root) return;
    if (root.data === x) {
        ansRef.val = root.data;
        return;
    } 
    if (root.data > x) {
        ansRef.val = root.data;
        return solve(root.left, x, ansRef);
    }
    return solve(root.right, x, ansRef);
}

function findCeil(root, input) {
    if (root === null) return -1;
    const ansRef = { val: -1 };
    solve(root, input, ansRef);
    return ansRef.val;
}

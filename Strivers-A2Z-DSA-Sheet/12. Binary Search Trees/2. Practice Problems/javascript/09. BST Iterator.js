/*
Question:
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

BSTIterator(TreeNode root) Initializes an object of the BSTIterator class.
boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer.
int next() Moves the pointer to the right, then returns the number at the pointer.

Approach:
- We are using a stack to keep track of the nodes during the in-order traversal of the BST.
- In the constructor, we initialize the stack by pushing all the leftmost nodes in the BST to the stack.

Time Complexity:
- The constructor takes O(h) time.
- The next() and hasNext() functions take O(1) time.

Space Complexity: O(h)
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(root) {
        this.st = [];
        this.pushLeft(root);
    }

    pushLeft(root) {
        while (root) {
            this.st.push(root);
            root = root.left;
        }
    }

    next() {
        const ans = this.st.pop();
        if (ans.right) {
            this.pushLeft(ans.right);
        }
        return ans.val;
    }

    hasNext() {
        return this.st.length > 0;
    }
}

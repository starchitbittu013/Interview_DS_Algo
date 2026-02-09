// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // Recursive Approach....

var isSymmetric = function(root) {
    return isMirror(root, root);

    function isMirror(node1, node2) {
        // Base case to exit the recursion
        if(node1 === null && node2 === null) return true;
        if(node1 === null || node2 === null) return false;

        // Compare the root node value and check if left subtree is mirror or right subtree
        if(node1.val === node2.val) {
            return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
        }
        return false;
    }
};


 // Iterative Approach....

 var isSymmetricIterative = function(root) {
    if(root === null) return true;
  let stack = [];

  stack.push(root.left);
  stack.push(root.right);

  while(stack.length > 0) {
      const node1 = stack.pop();
      const node2 = stack.pop();

      if(node1 === null && node2 === null) continue;
      if(node1 === null || node2 === null) return false;

      if(node1.val === node2.val) {
          stack.push(node1.left);
          stack.push(node2.right);
          stack.push(node1.right);
          stack.push(node2.left);
      } else return false;
  }
  return true;
};

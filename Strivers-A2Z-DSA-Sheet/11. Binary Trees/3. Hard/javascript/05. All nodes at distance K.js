/* QUESTION:

Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.


APPROACH:

To find the nodes that are at a distance k from the target node, we can perform a two-step process:
1. First, traverse the binary tree to build a map of each node to its parent node using BFS. This map will help us later to backtrack from the target node to its ancestors.
2. Next, perform a BFS from the target node to find all nodes at a distance k from it. While doing this, we also mark visited nodes to avoid revisiting the same nodes.

COMPLEXITY ANALYSIS:

Let `n` be the number of nodes in the binary tree.
- Time Complexity: The time complexity of this approach is O(n) since we need to traverse the entire binary tree to build the parent map and perform BFS from the target node.
- Space Complexity: The space complexity is O(n) for the parent map and O(k) for the queue used in BFS. In the worst case, when k approaches n, the space complexity becomes O(n).

CODE:
*/

function distanceK(root, target, k) {
    const ans = [];
    const parent = new Map();
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const si = queue.length;
        for (let i = 0; i < si; i++) {
            const top = queue.shift();

            if (top.left) {
                parent.set(top.left.val, top);
                queue.push(top.left);
            }

            if (top.right) {
                parent.set(top.right.val, top);
                queue.push(top.right);
            }
        }
    }

    const visited = new Map();
    queue.push(target);
    while (k-- > 0 && queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const top = queue.shift();

            visited.set(top.val, 1);

            if (top.left && !visited.has(top.left.val)) {
                queue.push(top.left);
            }

            if (top.right && !visited.has(top.right.val)) {
                queue.push(top.right);
            }

            if (parent.has(top.val) && !visited.has(parent.get(top.val).val)) {
                queue.push(parent.get(top.val));
            }
        }
    }

    while (queue.length > 0) {
        ans.push(queue.shift().val);
    }
    return ans;
}

/*
Question:
Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Approach:
- We can perform a level order traversal of the binary tree while keeping track of the horizontal distance (hd) of each node from the root.
- For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively.
- We can use a queue to perform the level order traversal. The queue will store objects of {hd, node}, where hd represents the horizontal distance and node represents the current node being processed.
- During the traversal, we maintain a Map to store the nodes at each horizontal distance. The key in the map is the horizontal distance (hd), and the value is an array of pairs representing the level and value of the nodes at that horizontal distance.
- After the traversal, we iterate over the keys in the map in ascending order and sort the nodes within each horizontal distance based on their levels. We then extract the values and add them to the result array.
- Finally, we return the result array containing the vertical order traversal.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used to store the nodes in the Map during the traversal.

Code:
*/

// NOTE:- we are keeping track of levels because of the question condition but if no such condition exists, then no need of level only hd will work.

function verticalTraversal(root) {
    if (!root) return [];

    const mp = new Map();
    let mini = 0, maxi = 0;
    const queue = [];
    queue.push({ hd: 0, node: root });

    let lvl = 0;
    while (queue.length > 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const { hd, node: curr } = queue.shift();
            
            if (curr.left) {
                mini = Math.min(mini, hd - 1);
                queue.push({ hd: hd - 1, node: curr.left });
            }
            if (curr.right) {
                maxi = Math.max(maxi, hd + 1);
                queue.push({ hd: hd + 1, node: curr.right });
            }
            
            if (!mp.has(hd)) {
                mp.set(hd, []);
            }
            mp.get(hd).push([lvl, curr.val]);
        }
        lvl++;
    }

    const ans = [];
    for (let i = mini; i <= maxi; i++) {
        const arr = mp.get(i);
        arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        const temp = arr.map(item => item[1]);
        ans.push(temp);
    }

    return ans;
}

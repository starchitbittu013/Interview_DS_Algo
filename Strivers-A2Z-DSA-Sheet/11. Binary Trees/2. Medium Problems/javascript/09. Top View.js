/*
Question:
Given a binary tree, print its top view.

Approach:
- We can perform a level order traversal of the binary tree while keeping track of the horizontal distance (hd) of each node from the root.
- For each node, if the horizontal distance is not present in the map, we add it to the map along with its value.
- Since we want to print the nodes in the order of their horizontal distance, we maintain the minimum and maximum horizontal distances (`mini` and `maxi`) during the traversal.
- Finally, we iterate over the range from `mini` to `maxi` and retrieve the corresponding values from the map, and add them to the result array.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used to store the nodes in the map during the traversal.

Code:
*/

function getTopView(root) {
    if (!root) return [];

    const mp = new Map();
    let mini = 0, maxi = 0;
    const queue = [];
    queue.push({ hd: 0, node: root });

    while (queue.length > 0) {
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
            mp.set(hd, curr.data);
        }
    }

    const ans = [];
    for (let i = mini; i <= maxi; i++) {
        ans.push(mp.get(i));
    }

    return ans;
}

/*
Question:
Given a binary tree, print its bottom view.

Approach:
- We can perform a level order traversal of the binary tree while keeping track of the horizontal distance (hd) and the level of each node from the root.
- For each node, we update its horizontal distance and level in the map.
- Since we want to print the nodes in the order of their horizontal distance, we maintain the minimum and maximum horizontal distances (`mini` and `maxi`) during the traversal.
- Finally, we iterate over the range from `mini` to `maxi` and retrieve the corresponding values from the map, and add them to the result array.

Complexity Analysis:
- Since we visit each node once and perform constant time operations for each node, the time complexity of this approach is O(N), where N is the number of nodes in the binary tree.
- The space complexity is O(N), where N is the number of nodes in the binary tree. This space is used to store the nodes in the map during the traversal.

Code:
*/

function getBottomView(root) {
    if (!root) return [];

    const mp = new Map();
    let mini = 0, maxi = 0;
    const queue = [];
    queue.push({ node: root, hd: 0, level: 0 });

    while (queue.length > 0) {
        const { node: curr, hd, level } = queue.shift();

        mp.set(hd, { data: curr.data, level: level });
        mini = Math.min(mini, hd);
        maxi = Math.max(maxi, hd);

        if (curr.left) {
            queue.push({ node: curr.left, hd: hd - 1, level: level + 1 });
        }
        if (curr.right) {
            queue.push({ node: curr.right, hd: hd + 1, level: level + 1 });
        }
    }

    const ans = [];
    for (let i = mini; i <= maxi; i++) {
        ans.push(mp.get(i).data);
    }

    return ans;
}

/*
QUESTION:
There are given N ropes of different lengths, we need to connect these ropes into one rope.
The cost to connect two ropes is equal to the sum of their lengths. The task is to connect
the ropes with the minimum cost.

Example:
Input: arr[] = {4, 3, 2, 6}
Output: 29
Explanation: The minimum cost is obtained by connecting ropes in the following order:
1. Connect ropes of length 2 and 3, cost = 2 + 3 = 5, resulting array = {4, 5, 6}
2. Connect ropes of length 4 and 5, cost = 4 + 5 = 9, resulting array = {9, 6}
3. Connect ropes of length 6 and 9, cost = 6 + 9 = 15, resulting array = {15}
Total cost = 5 + 9 + 15 = 29

APPROACH:
1. Use a priority queue (min heap) to store the lengths of the ropes.
2. Push all the rope lengths into the priority queue.
3. While the priority queue has more than one element:
   - Extract the two smallest ropes from the priority queue.
   - Add their lengths together to get the cost.
   - Push the sum back into the priority queue.
   - Update the total cost.
4. Return the total cost as the minimum cost of connecting the ropes.

COMPLEXITY ANALYSIS:
- Time complexity: O(n log n), where n is the number of ropes.
- Space complexity: O(n) to store the rope lengths in the priority queue.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    _bubbleDown(idx) {
        const n = this.heap.length;
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let smallest = idx;
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
function connectRopes(arr, n) {
    let ans = 0;
    const pq = new MinHeap();

    // Push all rope lengths into the priority queue
    for (let i = 0; i < n; i++) {
        pq.push(arr[i]);
    }

    // Connect ropes until only one rope remains
    while (pq.size() > 1) {
        const a = pq.pop();
        const b = pq.pop();
        const sum = a + b;
        ans += sum;

        // Push the sum back into the priority queue
        pq.push(sum);
    }

    return ans;
}

// Example usage:
// console.log(connectRopes([4, 3, 2, 6], 4)); // Output: 29
// console.log(connectRopes([1, 2, 3, 4, 5], 5)); // Output: 33


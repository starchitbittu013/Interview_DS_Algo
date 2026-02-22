/*
QUESTION:
Given K sorted arrays arranged in the form of a matrix of size K*K, the task is to
merge them into one sorted array.

APPROACH:
To merge K sorted arrays, we can use a min-heap (priority queue) to store the smallest
elements from each array.
1. Create a min-heap of size K to store the current smallest elements from each array.
2. Initialize the min-heap with the first element from each array.
3. While the min-heap is not empty, extract the smallest element from the min-heap,
   add it to the merged array, and replace it with the next element from the same array.
4. Repeat step 3 until all elements from all arrays are processed.

TIME COMPLEXITY:
The time complexity is O(K^2 log K), where K is the size of each array. Inserting elements
into the min-heap and extracting the minimum element take O(log K) time, and we do this
for K^2 elements.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K elements in the min-heap.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
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

    isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent].val <= this.heap[idx].val) break;
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
            if (left < n && this.heap[left].val < this.heap[smallest].val) smallest = left;
            if (right < n && this.heap[right].val < this.heap[smallest].val) smallest = right;
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

/**
 * @param {number[][]} arr - K sorted arrays
 * @param {number} K - Number of arrays
 * @return {number[]} - Merged sorted array
 */
function mergeKArrays(arr, K) {
    const pq = new MinHeap();

    // Initialize heap with first element from each array
    for (let i = 0; i < K; i++) {
        pq.push({ val: arr[i][0], row: i, col: 0 });
    }

    const mergedArray = [];

    while (!pq.isEmpty()) {
        const mini = pq.pop();
        mergedArray.push(mini.val);

        const row = mini.row;
        const col = mini.col;

        // If there's a next element in the same row, add it to heap
        if (col + 1 < K) {
            pq.push({ val: arr[row][col + 1], row: row, col: col + 1 });
        }
    }

    return mergedArray;
}

// Example usage:
// const arr = [
//     [1, 5, 9],
//     [2, 6, 10],
//     [3, 7, 11]
// ];
// console.log(mergeKArrays(arr, 3)); // Output: [1, 2, 3, 5, 6, 7, 9, 10, 11]


/*
QUESTION:
Given an array of integers arr, replace each element with its rank.

APPROACH:
To assign ranks to the elements in the array, we can use a min-heap (priority queue) to
sort the elements in ascending order along with their indices.
1. Create a min-heap to store pairs of (element, index) in ascending order.
2. Push each element along with its index into the min-heap.
3. Initialize the rank as 0 and the previous element as a value that never matches.
4. While the min-heap is not empty, extract the minimum element from the min-heap.
5. If the current element is different from the previous element, increment the rank.
6. Assign the rank to the element at its corresponding index in the result array.
7. Repeat steps 4-6 until all elements are processed.

TIME COMPLEXITY:
The time complexity is O(N log N), where N is the size of the array. Inserting elements
into the min-heap and extracting the minimum element take O(log N) time.

SPACE COMPLEXITY:
The space complexity is O(N) as we need to store N elements in the min-heap and the result array.
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
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
    const pq = new MinHeap();

    // Push each element with its index
    for (let i = 0; i < arr.length; i++) {
        pq.push({ val: arr[i], idx: i });
    }

    const ans = new Array(arr.length);
    let rank = 0;
    let prev = -Infinity; // an arbitrary value which never matches

    while (!pq.isEmpty()) {
        const top = pq.pop();
        if (top.val !== prev) {
            rank++;
        }
        ans[top.idx] = rank;
        prev = top.val;
    }

    return ans;
}

// Example usage:
// console.log(arrayRankTransform([40, 10, 20, 30])); // Output: [4, 1, 2, 3]
// console.log(arrayRankTransform([100, 100, 100])); // Output: [1, 1, 1]
// console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // Output: [5, 3, 4, 2, 8, 6, 7, 1, 3]


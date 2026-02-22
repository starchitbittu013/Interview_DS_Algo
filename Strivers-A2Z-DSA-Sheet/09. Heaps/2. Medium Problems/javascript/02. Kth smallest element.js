/*
QUESTION:
Given an array arr[] and an integer K, where K is smaller than the size of the array,
the task is to find the Kth smallest element in the given array. It is given that all
array elements are distinct.

APPROACH:
To find the Kth smallest element in the array, we can use a max-heap of size K.
1. Initialize a max-heap (priority queue) of size K.
2. Insert the first K elements of the array into the max-heap.
3. For the remaining elements in the array, if an element is smaller than the top element
   of the max-heap, replace the top element with the current element and heapify to
   maintain the max-heap property.
4. After processing all the elements, the top element of the max-heap will be the Kth
   smallest element in the array.

TIME COMPLEXITY:
The time complexity is O(N log K), where N is the size of the array. Inserting elements
into the max-heap and heapifying take O(log K) time.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K elements in the max-heap.
*/

class MaxHeap {
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

    top() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] >= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    _bubbleDown(idx) {
        const n = this.heap.length;
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let largest = idx;
            if (left < n && this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === idx) break;
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthSmallest(arr, k) {
    const pq = new MaxHeap();

    // Insert first k elements
    for (let i = 0; i < k; i++) {
        pq.push(arr[i]);
    }

    // For remaining elements, if smaller than top, replace
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < pq.top()) {
            pq.pop();
            pq.push(arr[i]);
        }
    }

    return pq.top();
}

// Example usage:
// console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(findKthSmallest([7, 10, 4, 20, 15], 4)); // Output: 15


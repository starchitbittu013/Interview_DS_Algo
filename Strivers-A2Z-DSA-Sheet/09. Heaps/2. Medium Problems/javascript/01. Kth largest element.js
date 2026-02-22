/*
QUESTION:
Given an integer array nums and an integer k, return the kth largest element in the array.

APPROACH:
To find the kth largest element in the array, we can use a min-heap of size k.
1. Initialize a min-heap (priority queue) of size k.
2. Insert the first k elements of the array into the min-heap.
3. For the remaining elements in the array, if an element is larger than the top element
   of the min-heap, replace the top element with the current element and heapify to
   maintain the min-heap property.
4. After processing all the elements, the top element of the min-heap will be the kth
   largest element in the array.

TIME COMPLEXITY:
The time complexity is O(N log k), where N is the size of the array. Inserting elements
into the min-heap and heapifying take O(log k) time, and we do this for N-k elements.

SPACE COMPLEXITY:
The space complexity is O(k) as we need to store k elements in the min-heap.
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

    top() {
        return this.heap.length > 0 ? this.heap[0] : null;
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const pq = new MinHeap();

    // Insert first k elements
    for (let i = 0; i < k; i++) {
        pq.push(nums[i]);
    }

    // For remaining elements, if larger than top, replace
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > pq.top()) {
            pq.pop();
            pq.push(nums[i]);
        }
    }

    return pq.top();
}

// Example usage:
// console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Output: 4


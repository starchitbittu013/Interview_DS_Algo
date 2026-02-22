/*
QUESTION:
Design a class to find the kth largest element in a stream. Note that it is the kth largest
element in the sorted order, not the kth distinct element.

Implement KthLargest class:
- KthLargest(int k, int[] nums): Initializes the object with the integer k and the stream of integers nums.
- int add(int val): Appends the integer val to the stream and returns the element representing
  the kth largest element in the stream.

Example:
Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output:
[null, 4, 5, 5, 8, 8]

APPROACH:
- Use a min heap (priority queue) to store the k largest elements.
- Initialize the min heap with the first k elements from the stream (nums) in the constructor.
- For each subsequent element in the stream, add it to the min heap.
- If the size of the min heap exceeds k, remove the smallest element.
- The top element of the min heap represents the kth largest element.

COMPLEXITY ANALYSIS:
- The time complexity of adding an element is O(log k).
- The space complexity is O(k) to store the k largest elements.
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

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.pq = new MinHeap();

        for (let i = 0; i < nums.length; i++) {
            this.pq.push(nums[i]);
            if (this.pq.size() > k) {
                this.pq.pop();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.push(val);
        if (this.pq.size() > this.k) {
            this.pq.pop();
        }
        return this.pq.top();
    }
}

// Example usage:
// const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));  // return 4
// console.log(kthLargest.add(5));  // return 5
// console.log(kthLargest.add(10)); // return 5
// console.log(kthLargest.add(9));  // return 8
// console.log(kthLargest.add(4));  // return 8


/*
QUESTION:
Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

APPROACH:
1. Create a frequency map to count the occurrences of each element in the array.
2. Use a min heap to store the k most frequent elements based on their frequencies.
3. Iterate through the frequency map and push elements into the min heap.
4. If the size of the min heap exceeds k, remove the element with the lowest frequency.
5. Finally, extract the elements from the min heap and return them.

COMPLEXITY ANALYSIS:
- Time complexity: O(N log K), where N is the size of the input array nums.
- Space complexity: O(N + K) for the frequency map and heap.
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

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent].freq <= this.heap[idx].freq) break;
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
            if (left < n && this.heap[left].freq < this.heap[smallest].freq) smallest = left;
            if (right < n && this.heap[right].freq < this.heap[smallest].freq) smallest = right;
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    // Build frequency map
    const mp = new Map();
    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    // Use min heap to keep k most frequent elements
    const pq = new MinHeap();
    for (const [num, freq] of mp) {
        pq.push({ freq, num });
        if (pq.size() > k) {
            pq.pop();
        }
    }

    // Extract elements from heap
    const ans = [];
    while (!pq.isEmpty()) {
        ans.push(pq.pop().num);
    }

    return ans.reverse();
}

// Example usage:
// console.log(topKFrequent([1,1,1,2,2,3], 2)); // Output: [1, 2]
// console.log(topKFrequent([1], 1)); // Output: [1]


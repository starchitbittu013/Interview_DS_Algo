/*
QUESTION:
The median is the middle value in an ordered integer list. If the size of the list is even,
there is no middle value, and the median is the mean of the two middle values.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far.

APPROACH:
1. Use two heaps: a max heap to store the smaller half and a min heap to store the larger half.
2. When adding a new number:
   - If max heap is empty or number is smaller than max heap's top, push to max heap.
   - Otherwise, push to min heap.
   - Balance the heaps so their sizes differ by at most 1.
3. When finding the median:
   - If sizes are equal, return average of both tops.
   - Otherwise, return top of the larger heap.

COMPLEXITY ANALYSIS:
- addNum: O(log N) for heap operations
- findMedian: O(1)
- Space: O(N)
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
        return this.heap[0];
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
        return this.heap[0];
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

class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap(); // stores smaller half
        this.minHeap = new MinHeap(); // stores larger half
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Add to appropriate heap
        if (this.maxHeap.size() === 0 || num < this.maxHeap.top()) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        // Balance the heaps
        const a = this.maxHeap.size();
        const b = this.minHeap.size();

        if (Math.abs(a - b) > 1) {
            if (a > b) {
                this.minHeap.push(this.maxHeap.pop());
            } else {
                this.maxHeap.push(this.minHeap.pop());
            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const a = this.maxHeap.size();
        const b = this.minHeap.size();

        if (a === b) {
            return (this.maxHeap.top() + this.minHeap.top()) / 2;
        }

        if (a > b) {
            return this.maxHeap.top();
        }

        return this.minHeap.top();
    }
}

// Example usage:
// const medianFinder = new MedianFinder();
// medianFinder.addNum(1);
// medianFinder.addNum(2);
// console.log(medianFinder.findMedian()); // 1.5
// medianFinder.addNum(3);
// console.log(medianFinder.findMedian()); // 2


/*
QUESTION:
Given two integer arrays A and B of size N each. A sum combination is made by adding one element
from array A and another element from array B. Return the maximum K valid distinct sum combinations
from all the possible sum combinations. Output array must be sorted in non-increasing order.

Example:
Input:
N = 2, K = 2
A[] = {3, 2}
B[] = {1, 4}
Output: {7, 6}
Explanation:
7 -> (A: 3) + (B: 4)
6 -> (A: 2) + (B: 4)

APPROACH:
1. Sort arrays A and B in non-decreasing order.
2. Use a max-heap to store sum combinations starting with largest possible sums.
3. Start with pairing each element of A with the largest element of B.
4. Extract max sum, add to result, and push next possible combination from same A element.
5. Continue until we have K sums.

COMPLEXITY ANALYSIS:
- Time complexity: O(N log N + K log N)
- Space complexity: O(N) for the heap
*/

class MaxHeap {
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
            if (this.heap[parent].sum >= this.heap[idx].sum) break;
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
            if (left < n && this.heap[left].sum > this.heap[largest].sum) largest = left;
            if (right < n && this.heap[right].sum > this.heap[largest].sum) largest = right;
            if (largest === idx) break;
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }
}

/**
 * @param {number} N
 * @param {number} K
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function maxCombinations(N, K, A, B) {
    const pq = new MaxHeap();

    // Sort both arrays
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // Initialize heap with each element of A paired with largest element of B
    for (let i = 0; i < N; i++) {
        pq.push({ sum: A[i] + B[N - 1], aIdx: i, bIdx: N - 1 });
    }

    const ans = [];

    while (!pq.isEmpty() && K > 0) {
        const top = pq.pop();
        ans.push(top.sum);
        K--;

        // Push next combination with same A element and previous B element
        if (top.bIdx > 0) {
            pq.push({
                sum: A[top.aIdx] + B[top.bIdx - 1],
                aIdx: top.aIdx,
                bIdx: top.bIdx - 1
            });
        }
    }

    return ans;
}

// Example usage:
// console.log(maxCombinations(2, 2, [3, 2], [1, 4])); // Output: [7, 6]
// console.log(maxCombinations(3, 3, [1, 4, 2], [2, 5, 3])); // Output: [9, 8, 8]


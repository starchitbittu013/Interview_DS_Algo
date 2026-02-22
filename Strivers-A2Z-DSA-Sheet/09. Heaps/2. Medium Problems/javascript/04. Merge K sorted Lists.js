/*
QUESTION:
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

APPROACH:
To merge K sorted linked lists, we can use a min-heap (priority queue) to store the smallest
nodes from each list.
1. Create a min-heap of size K to store the current smallest nodes from each list.
2. Initialize the min-heap with the head node from each list.
3. While the min-heap is not empty, extract the smallest node from the min-heap, add it to
   the merged linked list, and replace it with the next node from the same list.
4. Repeat step 3 until all nodes from all lists are processed.

TIME COMPLEXITY:
The time complexity is O(N log K), where N is the total number of nodes across all lists
and K is the number of linked lists. Inserting nodes into the min-heap and extracting the
minimum node take O(log K) time.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K nodes in the min-heap.
*/

// Definition for singly-linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    const pq = new MinHeap();

    // Initialize heap with head of each list
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            pq.push(lists[i]);
        }
    }

    const dummy = new ListNode();
    let current = dummy;

    while (!pq.isEmpty()) {
        const node = pq.pop();
        current.next = new ListNode(node.val);
        current = current.next;

        if (node.next) {
            pq.push(node.next);
        }
    }

    return dummy.next;
}

// Example usage:
// const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const list3 = new ListNode(2, new ListNode(6));
// const merged = mergeKLists([list1, list2, list3]);
// Output: 1->1->2->3->4->4->5->6


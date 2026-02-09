/*
Question:
Implement a Stack using one queue.

Approach:
- We use the class `QueueStack` to represent the stack.
- The stack is implemented using one queue `q`.
- The `push(int)` function inserts an element into `q`.
- The `pop()` function transfers `n-1` elements from front of `q` to it's back and returns the last element from `q` as the popped element.


Code:
*/

class QueueStack {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
    }

    pop() {
        if (this.q.length === 0) {
            return -1;
        }

        for (let i = 0; i < this.q.length - 1; i++) {
            const temp = this.q.shift();
            this.q.push(temp);
        }

        const popped = this.q.shift();
        return popped;
    }
}

/*
Complexity Analysis:
- The `push()` operation has a time complexity of O(1) since we only need to enqueue an element into `q`.
- The `pop()` operation has a time complexity of O(N) in the worst case, where N is the number of elements in `q`.
- The space complexity is O(N), where N is the total number of elements stored in the queue.
*/

// Export for module usage
module.exports = { QueueStack };

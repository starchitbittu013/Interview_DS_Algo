"""
Question:
Implement a Queue using two stacks s1 and s2.

Approach:
- We use the class `Queue` to represent the queue.
- The queue is implemented using two stacks `input` and `output`.
- The `enqueue(int)` function inserts an element into `input` stack.
- The `dequeue()` function transfers elements from `input` stack to `output` stack if `output` is empty, and returns the top element from `output` stack as the dequeued element.
- To transfer elements from `input` to `output`, we pop each element from the top of `input` and push it into `output`.
- After transferring elements, we pop the top element from `output` as the dequeued element.

Code:
"""


class Queue:
    def __init__(self):
        self.input = []
        self.output = []

    def enqueue(self, x: int) -> None:
        self.input.append(x)

    def dequeue(self) -> int:
        if len(self.input) == 0 and len(self.output) == 0:
            return -1

        if len(self.output) == 0:
            while len(self.input) > 0:
                temp = self.input.pop()
                self.output.append(temp)

        dequeued = self.output.pop()
        return dequeued


"""
Complexity Analysis:
- The `enqueue()` operation has a time complexity of O(1) since we only need to push an element into the `input` stack.
- The `dequeue()` operation has a time complexity of O(1) by amortized analysis.
- The space complexity is O(N), where N is the total number of elements stored in the two stacks.
"""

if __name__ == "__main__":
    # Test example
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(f"Dequeue: {queue.dequeue()}")  # 1
    print(f"Dequeue: {queue.dequeue()}")  # 2

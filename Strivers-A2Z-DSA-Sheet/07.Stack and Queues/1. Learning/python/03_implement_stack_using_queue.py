"""
Question:
Implement a Stack using one queue.

Approach:
- We use the class `QueueStack` to represent the stack.
- The stack is implemented using one queue `q`.
- The `push(int)` function inserts an element into `q`.
- The `pop()` function transfers `n-1` elements from front of `q` to it's back and returns the last element from `q` as the popped element.


Code:
"""

from collections import deque


class QueueStack:
    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)

    def pop(self) -> int:
        if len(self.q) == 0:
            return -1

        for _ in range(len(self.q) - 1):
            temp = self.q.popleft()
            self.q.append(temp)

        popped = self.q.popleft()
        return popped


"""
Complexity Analysis:
- The `push()` operation has a time complexity of O(1) since we only need to enqueue an element into `q`.
- The `pop()` operation has a time complexity of O(N) in the worst case, where N is the number of elements in `q`.
- The space complexity is O(N), where N is the total number of elements stored in the queue.
"""

if __name__ == "__main__":
    # Test example
    stack = QueueStack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(f"Pop: {stack.pop()}")  # 3
    print(f"Pop: {stack.pop()}")  # 2

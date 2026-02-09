"""
Question:
Implement a Queue using an Array. Queries in the Queue are of the following type:
(i) 1 x   (a query of this type means pushing 'x' into the queue)
(ii) 2     (a query of this type means to pop an element from the queue and print the popped element)

Approach:
- We use a class `MyQueue` to represent the queue.
- The queue is implemented using an array `arr`, a front variable to keep track of the front element, and a rear variable to keep track of the next available position to insert an element.
- The class provides two member functions: `push(int)` to push an element into the queue and `pop()` to pop an element from the front of the queue.
- The `push(int)` function inserts the element at the rear index and increments the rear.
- The `pop()` function checks if the queue is empty (rear == front), in which case it returns -1. Otherwise, it retrieves the element at the front index, increments the front, and returns the element.

Code:
"""


class MyQueue:
    def __init__(self):
        self.arr = [0] * 100005
        self.front = 0
        self.rear = 0

    def push(self, x: int) -> None:
        self.arr[self.rear] = x
        self.rear += 1

    def pop(self) -> int:
        if self.rear == self.front:
            return -1
        ans = self.arr[self.front]
        self.front += 1
        return ans


"""
Complexity Analysis:
- The time complexity of both `push()` and `pop()` operations is O(1) since they involve constant-time operations like accessing/modifying array elements and incrementing/decrementing front/rear indices.
- The space complexity is O(N) where N is the maximum number of elements that can be stored in the queue (in this case, 100005) since we use an array to store the queue elements.
"""

if __name__ == "__main__":
    # Test example
    queue = MyQueue()
    queue.push(1)
    queue.push(2)
    queue.push(3)
    print(f"Pop: {queue.pop()}")  # 1
    print(f"Pop: {queue.pop()}")  # 2

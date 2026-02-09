"""
Question:
Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack.

Approach:
- We use a class `MyStack` to represent the stack.
- The stack is implemented using an array `arr` and a top variable to keep track of the top element.
- The class provides two member functions: `push(int)` to push an element onto the stack and `pop()` to pop an element from the stack.
- The `push(int)` function increments the top and adds the element to the array at the current top index.
- The `pop()` function checks if the stack is empty (top = -1), in which case it returns -1. Otherwise, it retrieves the element at the top index, decrements the top, and returns the element.

Code:
"""


class MyStack:
    def __init__(self):
        self.arr = [0] * 1000
        self.top = -1

    def push(self, x: int) -> None:
        self.top += 1
        self.arr[self.top] = x

    def pop(self) -> int:
        if self.top == -1:
            return -1
        ans = self.arr[self.top]
        self.top -= 1
        return ans


"""
Complexity Analysis:
- The time complexity of both `push()` and `pop()` operations is O(1) since they involve constant-time operations like incrementing/decrementing the top and accessing/modifying the array elements.
- The space complexity is O(1) since the array has a fixed size and does not depend on the number of elements pushed into the stack.
"""

if __name__ == "__main__":
    # Test example
    stack = MyStack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(f"Pop: {stack.pop()}")  # 3
    print(f"Pop: {stack.pop()}")  # 2

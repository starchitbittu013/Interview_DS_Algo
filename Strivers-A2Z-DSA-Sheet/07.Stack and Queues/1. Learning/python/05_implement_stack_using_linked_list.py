"""
Question:
You have a linked list and you have to implement the functionalities push and pop of stack using this given linked list. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack.

Approach:
- We use the class `MyStack` to represent the stack implemented using a linked list.
- The stack is implemented using a singly linked list where each node represents an element in the stack.
- The `push(int)` function inserts an element at the top of the stack by creating a new node and updating the `next` pointer to point to the current top.
- The `pop()` function removes the top element from the stack by updating the `top` pointer to the next node and returning the data of the removed node.

Code:
"""


class StackNode:
    def __init__(self, x: int):
        self.data = x
        self.next = None


class MyStack:
    def __init__(self):
        self.top = None

    def push(self, x: int) -> None:
        temp = StackNode(x)
        temp.next = self.top
        self.top = temp

    def pop(self) -> int:
        if not self.top:
            return -1

        popped = self.top.data
        self.top = self.top.next

        return popped


"""
Complexity Analysis:
- The `push()` operation has a time complexity of O(1) since we only need to create a new node and update the `top` pointer.
- The `pop()` operation has a time complexity of O(1) since we only need to update the `top` pointer and delete the node.
- The space complexity is O(N), where N is the total number of elements stored in the stack (linked list).
"""

if __name__ == "__main__":
    # Test example
    stack = MyStack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(f"Pop: {stack.pop()}")  # 3
    print(f"Pop: {stack.pop()}")  # 2

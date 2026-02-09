"""
QUESTION:
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class.
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example:
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output:
[null,null,null,null,-3,null,0,-2]
Explanation:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

APPROACH:
- We can use an auxiliary stack to keep track of the difference of an element from the minimum element at each step.
- When pushing an element, we push the difference of an element from the minimum element at that time.
- When popping an element, we check stack top if it's -ve it means that this element is the minimum so we update the mini as we popping the current minimum.
- To get the top element, we add the current minimum to the top element of the main stack.
- To get the minimum element, we simply return the current minimum.

CODE:
"""


class MinStack:
    def __init__(self):
        self.st = []
        self.mini = -1
    
    def push(self, val: int) -> None:
        if len(self.st) == 0:
            self.st.append(0)
            self.mini = val
        else:
            self.st.append(val - self.mini)
            self.mini = min(val, self.mini)
    
    def pop(self) -> None:
        if self.st[-1] < 0:
            self.mini = self.mini - self.st[-1]
        self.st.pop()
    
    def top(self) -> int:
        ans = -1
        if self.st[-1] < 0:
            ans = self.mini
        else:
            ans = self.mini + self.st[-1]
        return ans
    
    def getMin(self) -> int:
        return self.mini


"""
COMPLEXITY ANALYSIS:
- All the operations (push, pop, top, getMin) have O(1) time complexity as we are performing constant-time operations on the stack.
- The space complexity is O(n) as we use an auxiliary stack to store the minimum elements.
"""

if __name__ == "__main__":
    # Test example
    min_stack = MinStack()
    min_stack.push(-2)
    min_stack.push(0)
    min_stack.push(-3)
    print(f"getMin: {min_stack.getMin()}")  # -3
    min_stack.pop()
    print(f"top: {min_stack.top()}")  # 0
    print(f"getMin: {min_stack.getMin()}")  # -2

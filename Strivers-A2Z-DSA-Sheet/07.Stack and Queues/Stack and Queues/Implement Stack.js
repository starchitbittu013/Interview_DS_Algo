// Implement Stack using Arrays

// Problem statement: Implement a stack using an array.

// Note: Stack is a data structure that follows the Last In First Out (LIFO) rule.

// Example:



// Explanation: 

// push(): Insert the element in the stack.

// pop(): Remove and return the topmost element of the stack.

// top(): Return the topmost element of the stack

// size(): Return the number of remaining elements in the stack.


class Stack {
    constructor() {
        this.size = 0;
        this.top = -1;
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
        this.size++;
        this.top++;
    }

    pop() {
        if (this.size === 0) return;
        this.size--;
        this.top--;
        return this.stack.pop();
    }

    getTop() {
        if(this.top === -1) return;
        return this.stack[this.top];
    }

    getSize() {
        return this.size;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(`Current Size: ${stack.getSize()}`);
console.log(`Current Stack Top: ${stack.getTop()}`);
console.log(`Popped Element: ${stack.pop()}`);
console.log(`Current Size: ${stack.getSize()}`);
console.log(`Current Stack Top: ${stack.getTop()}`);
stack.push(6);
console.log(`Current Size: ${stack.getSize()}`);
console.log(`Current Stack Top: ${stack.getTop()}`);



// ✅ Stack Using Linked List

// Node class for Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack class using Linked List
class Stack {
    constructor() {
        this.top = null; // head of linked list
        this.size = 0;
    }

    // Push element onto the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        const poppedValue = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    // Peek at the top element
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.top.data;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }
}
// ✅ Usage Example:

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log("Top Element:", stack1.peek()); // 30
console.log("Popped:", stack1.pop());       // 30
console.log("Top Element:", stack1.peek()); // 20
console.log("Size:", stack1.getSize());     // 2
// 🔁 Time Complexity
// Operation	Time
// push	O(1)
// pop	O(1)
// peek	O(1)
// isEmpty	O(1)

// This is a space-efficient and performant way to implement a stack.


// ✅ Stack Using Single Queue

class Stack {
    constructor(capacity) {
        this.top = -1;
        this.size = 0;
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = 0;
    }

    // enqueue element onto the Queue
    enqueue(data) {
        if(this.isFull()) {
            console.log('Queue is Full..');
            return;
        }
        this.queue[rear] = data;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;


    }

    // dequeue element from the Queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        const val = this.queue[this.front];
        this.size--;

        this.front = (this.front + 1) % this.capacity;
        return val;
    }

    push(x) {
        this.enqueue(x);

        // Rotate the queue (size - 1) times to move newly added element to front
        for (let i = 0; i < this.size - 1; i++) {
            const temp = this.dequeue();
            this.enqueue(temp);
        }
        console.log(`Pushed ${x}`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const popped = this.dequeue();
        console.log(`Popped ${popped}`);
        return popped;
    }

    // Peek at the top element
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue[this.front];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    isFull() {
        return this.size === this.capacity;
    }

    print() {
        let res = [];
        for (let i = 0; i < this.size; i++) {
            const index = (this.front + i) % this.capacity;
            res.push(this.queue[index]);
        }
        console.log("Stack Elements (top to bottom):", res.join(" "));
    }

}
// ✅ Usage Example:

const stack2 = new Stack();

stack2.push(10);
stack2.push(20);
stack2.push(30);

console.log("Top Element:", stack2.peek()); // 30
console.log("Popped:", stack2.pop());       // 30
console.log("Top Element:", stack2.peek()); // 20
console.log("Size:", stack2.getSize());     // 2
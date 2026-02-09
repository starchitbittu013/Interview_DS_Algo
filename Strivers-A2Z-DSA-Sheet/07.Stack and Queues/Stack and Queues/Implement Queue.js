// Problem Statement: Implement Queue Data Structure using Array with all functions like pop, push, top, size, etc.

// Example:

// Input: push(4)
//        push(14)
//        push(24)
//        push(34)
//        top()
//        size()
//        pop()

// Output: 

// The element pushed is 4
// The element pushed is 14
// The element pushed is 24
// The element pushed is 34
// The peek of the queue before deleting any element 4
// The size of the queue before deletion 4
// The first element to be deleted 4
// The peek of the queue after deleting an element 14
// The size of the queue after deleting an element 3


class Queue{
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.maxSize = capacity;
        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        if(this.isFull()) {
            console.log('Queue is Full');
            return;
        }
        this.queue[this.rear] = data;
        this.rear++;
        this.size++;
        console.log(`The element pushed is ${data}`);
        return;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }
        const data = this.queue[this.front];
        this.front++;
        this.size--;
        console.log(`The first element to be deleted ${data}`);
        return data;
    }

    getTop() {
        if(this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }
        return this.queue[this.front];
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.maxSize;
    }
}

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log("Current Queue Size: ", queue.getSize());
console.log("Current Queue Top: ", queue.getTop());

console.log("Popped Element: ", queue.dequeue());
console.log("Current Queue Size: ", queue.getSize());
console.log("Current Queue Top: ", queue.getTop());

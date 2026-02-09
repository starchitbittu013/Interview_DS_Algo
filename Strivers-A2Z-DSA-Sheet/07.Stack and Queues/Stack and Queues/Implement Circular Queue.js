// Problem Statement: Implement Circular Queue Data Structure using Array with all functions like pop, push, top, size, etc.


class CircularQueue{
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
        this.rear = (this.rear + 1) % this.maxSize;
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
        this.front = (this.front + 1) % this.maxSize;
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

    print() {
        let i = this.front;
        let count = this.size;
        let elements = [];

        while (count > 0) {
            elements.push(this.queue[i]);
            i = (i + 1) % this.maxSize;
            count--;
        }

        console.log("Queue Elements: ", elements.join(", "));
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
console.log("Current Queue Size: ", circularQueue.getSize());
console.log("Current Queue Top: ", circularQueue.getTop());

console.log("Popped Element: ", circularQueue.dequeue());
console.log("Current Queue Size: ", circularQueue.getSize());
console.log("Current Queue Top: ", circularQueue.getTop());
circularQueue.enqueue(6);
console.log("Current Queue Size: ", circularQueue.getSize());
console.log("Current Queue Top: ", circularQueue.getTop());
circularQueue.print();


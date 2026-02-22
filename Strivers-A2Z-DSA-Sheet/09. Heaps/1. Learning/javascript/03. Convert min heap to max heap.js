/*
QUESTION:
You are given an array arr of N integers representing a min Heap.
The task is to convert it to a max Heap.

A max-heap is a complete binary tree in which the value in each internal node
is greater than or equal to the values in the children of that node.

APPROACH:
To convert a min-heap to a max-heap, we need to rearrange the elements of the array
in such a way that the max-heap property is satisfied.
1. Start from the last internal node of the heap (N/2 - 1) and perform heapify on each internal node.
2. Heapify a node by comparing it with its left and right children and swapping if necessary.
3. Continue this process for all internal nodes until the entire heap is converted to a max-heap.

The heapify function is implemented to compare a node with its left and right children
and swap if necessary to satisfy the max-heap property.

The convertMinToMaxHeap function is the main function that converts the given min-heap
to a max-heap. It starts from the last internal node (N/2 - 1) and performs heapify on
each internal node.

TIME COMPLEXITY:
The time complexity of the convertMinToMaxHeap function is O(N), where N is the size of the array.
This is because we need to perform heapify on each internal node of the heap.

SPACE COMPLEXITY:
The space complexity is O(log N) due to recursive calls in heapify (can be O(1) with iterative approach).

CODE:-
*/

/**
 * Heapify function to maintain max-heap property
 * @param {number[]} arr - The input array
 * @param {number} node - Current node index to heapify
 * @param {number} n - Size of the array
 */
function heapify(arr, node, n) {
    const left = (2 * node) + 1;
    const right = (2 * node) + 2;
    let largest = node;

    // Check if left child exists and is greater than current largest
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child exists and is greater than current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not the current node, swap and recursively heapify
    if (largest !== node) {
        [arr[node], arr[largest]] = [arr[largest], arr[node]];
        heapify(arr, largest, n);
    }
}

/**
 * Function to convert min heap to max heap
 * @param {number[]} arr - The input array representing min heap
 * @param {number} n - Size of the array
 */
function convertMinToMaxHeap(arr, n) {
    // Start from the last internal node and heapify all internal nodes
    // Last internal node is at index (n/2 - 1)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

/**
 * Iterative heapify function (space optimized)
 * @param {number[]} arr - The input array
 * @param {number} node - Current node index to heapify
 * @param {number} n - Size of the array
 */
function heapifyIterative(arr, node, n) {
    while (true) {
        const left = (2 * node) + 1;
        const right = (2 * node) + 2;
        let largest = node;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest === node) {
            break;
        }

        [arr[node], arr[largest]] = [arr[largest], arr[node]];
        node = largest;
    }
}

// Example usage:
// const arr = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9];
// console.log("Min Heap:", arr);
// convertMinToMaxHeap(arr, arr.length);
// console.log("Max Heap:", arr);
// Output: Max Heap: [20, 18, 10, 12, 9, 9, 3, 5, 6, 8]


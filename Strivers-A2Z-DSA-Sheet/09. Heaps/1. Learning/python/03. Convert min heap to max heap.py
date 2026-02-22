"""
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

The convert_min_to_max_heap function is the main function that converts the given min-heap
to a max-heap. It starts from the last internal node (N/2 - 1) and performs heapify on
each internal node.

TIME COMPLEXITY:
The time complexity of the convert_min_to_max_heap function is O(N), where N is the size of the array.
This is because we need to perform heapify on each internal node of the heap.

SPACE COMPLEXITY:
The space complexity is O(log N) due to recursive calls in heapify (can be O(1) with iterative approach).

CODE:-
"""

from typing import List


def heapify(arr: List[int], node: int, n: int) -> None:
    """
    Heapify function to maintain max-heap property

    Args:
        arr: The input array
        node: Current node index to heapify
        n: Size of the array
    """
    left = (2 * node) + 1
    right = (2 * node) + 2
    largest = node

    # Check if left child exists and is greater than current largest
    if left < n and arr[left] > arr[largest]:
        largest = left

    # Check if right child exists and is greater than current largest
    if right < n and arr[right] > arr[largest]:
        largest = right

    # If largest is not the current node, swap and recursively heapify
    if largest != node:
        arr[node], arr[largest] = arr[largest], arr[node]
        heapify(arr, largest, n)


def convert_min_to_max_heap(arr: List[int], n: int) -> None:
    """
    Function to convert min heap to max heap

    Args:
        arr: The input array representing min heap
        n: Size of the array
    """
    # Start from the last internal node and heapify all internal nodes
    # Last internal node is at index (n/2 - 1)
    for i in range((n // 2) - 1, -1, -1):
        heapify(arr, i, n)


def heapify_iterative(arr: List[int], node: int, n: int) -> None:
    """
    Iterative heapify function (space optimized)

    Args:
        arr: The input array
        node: Current node index to heapify
        n: Size of the array
    """
    while True:
        left = (2 * node) + 1
        right = (2 * node) + 2
        largest = node

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest == node:
            break

        arr[node], arr[largest] = arr[largest], arr[node]
        node = largest


# Example usage:
# arr = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9]
# print("Min Heap:", arr)
# convert_min_to_max_heap(arr, len(arr))
# print("Max Heap:", arr)
# Output: Max Heap: [20, 18, 10, 12, 9, 9, 3, 5, 6, 8]


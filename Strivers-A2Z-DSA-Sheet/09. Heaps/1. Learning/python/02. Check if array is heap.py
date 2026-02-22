"""
QUESTION:
Given an array A of size N, the task is to check if the given array represents a Binary Max Heap.

APPROACH:
1. Start from the root node and recursively check if the current node satisfies the max-heap property.
2. The max-heap property states that every node should be greater than all of its descendants.
3. Check if the current node is greater than its left and right children.
4. Recursively check the max-heap property for the left and right subtrees.
5. If the current node is greater and the left and right subtrees also satisfy the max-heap property,
   then the array represents a binary max heap.

The solve function is implemented to recursively check the max-heap property for each node.
It checks if the current node is greater than its left and right children. If the current node
is greater and the left and right subtrees also satisfy the max-heap property, then the array
represents a binary max heap.

The is_max_heap function is the main function that calls the solve function with the root node
(index 0) and the size of the array. It returns True if the array represents a binary max heap,
and False otherwise.

TIME COMPLEXITY:
The time complexity of the is_max_heap function is O(N), where N is the size of the array.
This is because we need to check the max-heap property for each node in the array.

SPACE COMPLEXITY:
The space complexity is O(N) due to the recursive calls in the solve function.

CODE:-
"""

from typing import List


def solve(arr: List[int], node: int, n: int) -> bool:
    """
    Helper function to recursively check max-heap property

    Args:
        arr: The input array
        node: Current node index
        n: Size of the array

    Returns:
        True if subtree rooted at node satisfies max-heap property
    """
    # Base case: if node is out of bounds, return True
    if node >= n:
        return True

    left = (2 * node) + 1
    right = (2 * node) + 2

    # Check if left child exists and violates max-heap property
    if left < n and arr[node] < arr[left]:
        return False

    # Check if right child exists and violates max-heap property
    if right < n and arr[node] < arr[right]:
        return False

    # Recursively check left and right subtrees
    return solve(arr, left, n) and solve(arr, right, n)


def is_max_heap(arr: List[int], n: int) -> bool:
    """
    Function to check if array represents a max heap

    Args:
        arr: The input array
        n: Size of the array

    Returns:
        True if array represents a max heap
    """
    return solve(arr, 0, n)


def is_max_heap_iterative(arr: List[int], n: int) -> bool:
    """
    Iterative approach to check if array is max heap

    Args:
        arr: The input array
        n: Size of the array

    Returns:
        True if array represents a max heap
    """
    # Check all internal nodes (nodes with at least one child)
    for i in range((n - 2) // 2 + 1):
        left = (2 * i) + 1
        right = (2 * i) + 2

        # Check if left child is greater than parent
        if left < n and arr[i] < arr[left]:
            return False

        # Check if right child is greater than parent
        if right < n and arr[i] < arr[right]:
            return False

    return True


# Example usage:
# print(is_max_heap([90, 15, 10, 7, 12, 2], 6))  # Output: True
# print(is_max_heap([9, 15, 10, 7, 12, 11], 6))  # Output: False


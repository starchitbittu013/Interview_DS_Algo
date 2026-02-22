"""
QUESTION:
Implement a min heap with all the required methods.

APPROACH:
A min heap is a binary tree-based data structure where the value of each parent node
is less than or equal to the values of its children. The heapify operation is used to
maintain the heap property, where a node is compared with its children and swapped if necessary.

In the given code, the MinHeap class is implemented using a list to store the elements.
The heapify function is used to maintain the heap property by comparing the node with its
left and right children and swapping if necessary. The bottom_up_heapify function is used to
fix the heap property from a child node to its parent node.

The insert function adds an element to the heap by appending it to the list and performing
bottom-up heapification. The remove_min function removes the minimum element from the heap by
replacing it with the last element, removing the last element, and then performing heapify.
The min_element function returns the minimum element of the heap.

COMPLEXITY ANALYSIS:
- The heapify operation takes O(log n) time complexity, where n is the number of elements in the heap.
- The bottom_up_heapify operation also takes O(log n) time complexity.
- The insert operation takes O(log n) time complexity.
- The remove_min operation takes O(log n) time complexity.
- The min_element operation takes O(1) time complexity.

Overall, the time complexity of the MinHeap class methods is O(log n), where n is the number
of elements in the heap.

CODE:-
"""


class MinHeap:
    def __init__(self):
        self.pq = []

    def heapify(self, node: int) -> None:
        """Function to heapify the heap (top-down)"""
        left_child = (2 * node) + 1
        right_child = (2 * node) + 2
        smallest = node

        if left_child < len(self.pq) and self.pq[left_child] < self.pq[smallest]:
            smallest = left_child

        if right_child < len(self.pq) and self.pq[right_child] < self.pq[smallest]:
            smallest = right_child

        if smallest != node:
            # Swap elements
            self.pq[node], self.pq[smallest] = self.pq[smallest], self.pq[node]
            self.heapify(smallest)

    def bottom_up_heapify(self, node: int) -> None:
        """Function to heapify from bottom to top"""
        parent = (node - 1) // 2

        if parent >= 0 and self.pq[parent] > self.pq[node]:
            # Swap elements
            self.pq[parent], self.pq[node] = self.pq[node], self.pq[parent]
            self.bottom_up_heapify(parent)

    def insert(self, val: int) -> None:
        """Function to insert 'val' in the heap"""
        self.pq.append(val)
        self.bottom_up_heapify(len(self.pq) - 1)

    def remove_min(self) -> None:
        """Function to remove the minimum element"""
        if not self.pq:
            return

        self.pq[0] = self.pq[-1]
        self.pq.pop()

        if self.pq:
            self.heapify(0)

    def min_element(self) -> int:
        """Function to return the minimum element"""
        return -1 if not self.pq else self.pq[0]

    def size(self) -> int:
        """Function to get the size of the heap"""
        return len(self.pq)

    def is_empty(self) -> bool:
        """Function to check if heap is empty"""
        return len(self.pq) == 0


# Example usage:
# heap = MinHeap()
# heap.insert(10)
# heap.insert(5)
# heap.insert(20)
# heap.insert(2)
# print(heap.min_element())  # Output: 2
# heap.remove_min()
# print(heap.min_element())  # Output: 5


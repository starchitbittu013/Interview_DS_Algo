"""
QUESTION:
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

APPROACH:
To merge K sorted linked lists, we can use a min-heap (priority queue) to store the smallest
nodes from each list.
1. Create a min-heap of size K to store the current smallest nodes from each list.
2. Initialize the min-heap with the head node from each list.
3. While the min-heap is not empty, extract the smallest node from the min-heap, add it to
   the merged linked list, and replace it with the next node from the same list.
4. Repeat step 3 until all nodes from all lists are processed.

TIME COMPLEXITY:
The time complexity is O(N log K), where N is the total number of nodes across all lists
and K is the number of linked lists. Inserting nodes into the min-heap and extracting the
minimum node take O(log K) time.

SPACE COMPLEXITY:
The space complexity is O(K) as we need to store K nodes in the min-heap.
"""

import heapq
from typing import List, Optional


# Definition for singly-linked list
class ListNode:
    def __init__(self, val: int = 0, next: 'ListNode' = None):
        self.val = val
        self.next = next

    # Required for heap comparison
    def __lt__(self, other):
        return self.val < other.val


def merge_k_lists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    """
    Merge K sorted linked lists using min-heap

    Args:
        lists: Array of K sorted linked lists

    Returns:
        Head of merged sorted linked list
    """
    pq = []

    # Initialize heap with head of each list
    for i, node in enumerate(lists):
        if node:
            # Use index as tiebreaker to avoid comparison issues
            heapq.heappush(pq, (node.val, i, node))

    dummy = ListNode()
    current = dummy
    counter = len(lists)  # Used as unique identifier for tiebreaking

    while pq:
        val, _, node = heapq.heappop(pq)
        current.next = ListNode(val)
        current = current.next

        if node.next:
            heapq.heappush(pq, (node.next.val, counter, node.next))
            counter += 1

    return dummy.next


# Example usage:
# list1 = ListNode(1, ListNode(4, ListNode(5)))
# list2 = ListNode(1, ListNode(3, ListNode(4)))
# list3 = ListNode(2, ListNode(6))
# merged = merge_k_lists([list1, list2, list3])
# Output: 1->1->2->3->4->4->5->6


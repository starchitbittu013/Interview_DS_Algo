// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.

// To delete the middle node of a linked list, we can use the "Runner Technique" with two pointers. We'll use a slow pointer that moves one step at a time and a fast pointer that moves two steps at a time. When the fast pointer reaches the end of the list, the slow pointer will be pointing to the middle node.

// Here's the algorithm to delete the middle node:

// Initialize two pointers, slow and fast, both pointing to the head of the linked list.
// Traverse the linked list with the fast pointer moving two steps at a time, and the slow pointer moving one step at a time.
// Keep track of the previous node of the slow pointer to update the next pointer after deletion.
// When the fast pointer reaches the end of the list (fast.next is null or fast.next.next is null), the slow pointer will be pointing to the middle node.
// Delete the middle node by updating the next pointer of the previous node to skip the slow pointer.
// Return the head of the modified linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(data) {
        this.value = data,
        this.next = null
    }
};

const head = new ListNode(10);
let current = head;

current.next = new ListNode(3);
current = current.next;

current.next = new ListNode(4);
current = current.next;

current.next = new ListNode(7);
current = current.next;

current.next = new ListNode(1);
current = current.next;

current.next = new ListNode(2);
current = current.next;

current.next = new ListNode(6);
current = current.next;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) {
        // If the list is empty or has only one node, return the null as it has no middle node to delete
        return null;
    }

    // Two Pointer Approach, slow at x steps and fast at 2x step. slow will reach middle. Both start from head.
    // Also, track previous pointer of slow pointer

    let fast = head;
    let slow = head;
    let prev = null

    while (fast && fast.next) {    
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if (prev) {
        prev.next = slow.next;
    } else {
        head = head.next;
    }
    return head;
};

// TC: O(n)
// SC: O(1)

console.log(JSON.stringify(head));
console.log(deleteMiddle(head));
console.log(JSON.stringify(head));
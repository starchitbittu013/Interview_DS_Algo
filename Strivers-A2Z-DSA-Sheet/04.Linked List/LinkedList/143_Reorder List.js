// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 
// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let prev = null;
    let current = head;
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let curr = slow.next;

    while(curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // Reversed second Half of the list
    console.log(prev);

    slow.next = null;

    while(prev) {
        let currentNext = current.next;
        let prevNext = prev.next;
        current.next = prev;
        prev.next = currentNext;
        prev = prevNext;
        current = currentNext;
    }
    return head;
};

/*
Find the middle node and reverse the second half of the list
1->2->3->4->5

1->2->3->null

4->5->null

Reverse second half
5->4->null

1 x 2 x 3
|  /|  /
5   4

1->5->2->4->3-> null (Answer)
*/
// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) {
        return head.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

console.log(removeNthFromEnd(head, 2));
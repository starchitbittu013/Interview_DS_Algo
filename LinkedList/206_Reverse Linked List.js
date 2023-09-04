// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

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

const head = new ListNode(1);
let current = head;

current.next = new ListNode(2);
current = current.next;

current.next = new ListNode(3);
current = current.next;

current.next = new ListNode(4);
current = current.next;

current.next = new ListNode(5);
current = current.next;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;    
    let current = head;    

    while (current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;        
    }    
    return prev;
};

console.log(JSON.stringify(head));
console.log(JSON.stringify(reverseList(head)));


// TC: O(n)
// SC: O(1)
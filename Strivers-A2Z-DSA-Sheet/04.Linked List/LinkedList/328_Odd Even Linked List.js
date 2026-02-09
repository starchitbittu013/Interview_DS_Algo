// 328. Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]



class ListNode {
    constructor(data) {
        this.value = data,
        this.next = null
    }
}

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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) { 
    if (!head || !head.next) {
        return head;
    }   

    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
};

//console.log(JSON.stringify(head));
console.log(oddEvenList(head));
console.log(JSON.stringify(head));

// TC: O(n)
// SC: O(1)
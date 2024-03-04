// 725. Split Linked List in Parts

// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

// Return an array of the k parts.

 

// Example 1:


// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].
// Example 2:


// Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
// Output: [[1,2,3,4],[5,6,7],[8,9,10]]
// Explanation:
// The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
var splitListToParts = function(head, k) {
    // Create an array of ListNode pointers to store the k parts.
    const parts = new Array(k).fill(null);

    // Calculate the length of the linked list.
    let len = 0;
    let current = head;
    while (current) {
        len++;
        current = current.next;
    }

    // Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
    const n = Math.floor(len / k); // Length of each part
    let r = len % k; // Extra Nodes

    // Reset the pointer to the beginning of the linked list.
    current = head;
    let prev = null; // prev node will help to cut the linked list by making prev.next -> null

    // Loop through each part.
    for (let i = 0; current && i < k; i++, r--) {
        // Store the current node as the start of the current part.
        parts[i] = current;

        // Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
        // Otherwise, traverse only n nodes.
        for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
            prev = current;
            current = current.next;
        }

        // Disconnect the current part from the rest of the list by setting prev.next to null.
        if (prev) {
            prev.next = null;
        }
    }

    // Return the array of k parts.
    return parts;
};
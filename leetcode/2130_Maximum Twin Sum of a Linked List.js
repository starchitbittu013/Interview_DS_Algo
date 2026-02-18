// 2130. Maximum Twin Sum of a Linked List
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

 

// Example 1:


// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 


class ListNode {
    constructor(data) {
        this.value = data,
        this.next = null
    }
};

const head = new ListNode(5);
let current = head;

current.next = new ListNode(4);
current = current.next;

current.next = new ListNode(2);
current = current.next;

current.next = new ListNode(1);
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
 * @return {number}
 */
var pairSum = function(head) {
    let maxSum = 0;
    let current = head;
    let arr = [];

    while (current !==null) {
        arr.push(current.value);
        current = current.next;
    }
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        maxSum = Math.max(maxSum, sum);
        i++;
        j--;
    }
    return maxSum;
};

console.log(JSON.stringify(head));
console.log(pairSum(head));

/*
Solution: 1
// prev node is used but we have singly linked list

var pairSum = function(head) {
    let maxSum = 0;
    let left = head;
    let right = head;

    while (right.next !==null) {
        right = right.next;
    }

    while (left !== right && left.prev !== right) {
        let sum = left.value + right.value;
        maxSum = Math.max(maxSum, sum);
        left = left.next;
        right = right.prev;
    }
    return maxSum
};

*/

/*
Solution 2: Using an array to store all the value and use Two-pointer approach
But, Space Complexity is O(n) because of additional array.
var pairSum = function(head) {
    let maxSum = 0;
    let current = head;
    let arr = [];

    while (current !==null) {
        arr.push(current.value);
        current = current.next;
    }
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        maxSum = Math.max(maxSum, sum);
        i++;
        j--;
    }
    return maxSum;
};
*/
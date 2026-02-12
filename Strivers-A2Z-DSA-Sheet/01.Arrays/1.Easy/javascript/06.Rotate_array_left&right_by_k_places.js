/*
QUESTION:-

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/*
APPROACH:-
To rotate the array k places to right follow below steps
-> Reverse first n-k elements
-> Reverse last k elements
-> Reverse the entire array

To rotate the array k places to left follow below steps
-> Reverse first k elements
-> Reverse last n-k elements
-> Reverse the entire array
*/

// CODE:-

function reverse(arr, start, end) {
    while (start < end) {
        // Swap arr[start] and arr[end]
        // Using destructuring assignment to swap values
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// RIGHT ROATATE:-
function rightRotate(arr, n, k) {
    k = k % n; // to keep k within the range
    // First reverse first n-k elements and then reverse last k elements and then reverse the entire array
    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - 1);

    // OR we can also do like this
    // First reverse the entire array and then reverse first k elements and then reverse last n-k elements
    // reverse(arr, 0, n - 1);    
    // reverse(arr, 0, k - 1);
    // reverse(arr, k, n - 1);
}

// LEFT ROATATE:-
function leftRotate(arr, n, k) {
    k = k % n; // to keep k within the range
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);

    // OR we can also do like this
    // reverse(arr, 0, n - 1);
    // reverse(arr, 0, n - k - 1);
    // reverse(arr, n - k, n - 1);
}

// TIME COMPLEXITY = O(N)
// SPACE COMPLEXITY = O(1)

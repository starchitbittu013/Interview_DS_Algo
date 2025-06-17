/* Left Rotate the Array by One

Problem Statement: Given an array of N integers, left rotate the array by one place.

N = 5, array[] = {1,2,3,4,5}

function solve(arr, n) {
  let temp = arr[0]; // storing the first element of the array in a variable
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp; // assign the value of the variable at the last index
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}



*/

function leftRotateByOne(nums) {
    let n = nums.length;

    function reverse(start, end) {
        while(start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    reverse(1, n - 1);
    reverse(0, n - 1);
    return nums;
}

console.log(leftRotateByOne([1,2,3,4,5]));
console.log(leftRotateByOne([2]));

/* 189. Rotate Array

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

// 1. Brute Force (Using Extra Array)
// Idea:
// Use an extra array to place each element at its new position.

// Steps:

// Create a new array of the same size.
// For each element at index i, place it at (i + k) % n.
// Copy the new array back to the original array

function rotateArrayBruteForce(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > n
    let rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    // Copy back to original array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }

    return nums;
}

// Example:
console.log(rotateArrayBruteForce([1, 2, 3, 4, 5, 6, 7], 3));  // Output: [5, 6, 7, 1, 2, 3, 4]


// 2. Reversal Algorithm (In-Place, No Extra Space)
// Idea:
// Reverse parts of the array to achieve the rotation without extra space.

// Steps:

// Reverse the whole array.
// Reverse the first k elements.
// Reverse the remaining n - k elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
     
    let reverse = function(start, end){
     while(start < end){
         let temp = nums[start];
         nums[start] = nums[end];
         nums[end] = temp;
         start++;
         end--;
     }
    }
    
     reverse(0, nums.length-1); // reverse entire array
     reverse(0, k-1) // reverse first part till k
     reverse(k, nums.length-1) // reverse after k
     
 };
 
 
 // TC: O(n)
 // SC: O(1)


// 3. Cyclic Replacements (In-Place, Efficient)
// Idea:
// Rotate the array by moving elements to their final positions one by one in cycles.

// Steps:

// Start from the first element and move it to its correct position.
// Follow the cycle until all elements are placed correctly.

 function rotateArrayCyclic(nums, k) {
    let n = nums.length;
    k = k % n;
    let count = 0; // To keep track of moved elements

    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];

        do {
            let next = (current + k) % n;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }

    return nums;
}

// Example:
console.log(rotateArrayCyclic([1, 2, 3, 4, 5, 6, 7], 3));  // Output: [5, 6, 7, 1, 2, 3, 4]

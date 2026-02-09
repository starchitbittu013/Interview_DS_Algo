// Count Occurrences in Sorted Array

// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

// Examples :

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: target = 4 is not present in the given array so the output is 0.




// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    // Function to count the occurrences of x in the array.
    countFreq(arr, target) {
        let count = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                count++;
            }
        }
        return count;
    }
}
// TC: O(n)

// Optimal Approach(Binary Search): 
// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate 
// half to eliminate, thereby reducing the search space by half. It does this by determining a specific 
// condition that ensures that the target is not present in that half.

// Total number of occurrences = last occurrence - first occurrence + 1

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    // Function to count the occurrences of x in the array.
    countFreq(arr, target) {
        let count = 0;
        let n = arr.length;
        let low = 0, high = n - 1;
        
        // Find First occurrence
        let first = -1;
        
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if(arr[mid] >= target) {
                if(arr[mid] === target) {
                    first = mid;
                }
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        // Find last occurrence
        let last = -1;
        low = 0, high = n - 1;
        
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if(arr[mid] <= target) {
                if(arr[mid] === target) {
                    last = mid;
                }
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return first === -1 ? 0 : last - first + 1;
    }
}

// TC: O(logn)


function firstOccurrence(arr, n, k) {
    let low = 0, high = n - 1;
    let first = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] === k) {
            first = mid;
            // look for smaller index on the left
            high = mid - 1;
        }
        else if (arr[mid] < k) {
            low = mid + 1; // look on the right
        }
        else {
            high = mid - 1; // look on the left
        }
    }
    return first;
}

function lastOccurrence(arr, n, k) {
    let low = 0, high = n - 1;
    let last = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] === k) {
            last = mid;
            // look for larger index on the right
            low = mid + 1;
        }
        else if (arr[mid] < k) {
            low = mid + 1; // look on the right
        }
        else {
            high = mid - 1; // look on the left
        }
    }
    return last;
}

function firstAndLastPosition(arr, n, k) {
    let first = firstOccurrence(arr, n, k);
    if (first === -1) return [-1, -1];
    let last = lastOccurrence(arr, n, k);
    return [first, last];
}

function count(arr, n, x) {
    let [first, last] = firstAndLastPosition(arr, n, x);
    if (first === -1) return 0;
    return last - first + 1;
}

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let n = 8, x = 8;
let ans = count(arr, n, x);
console.log("The number of occurrences is:", ans);
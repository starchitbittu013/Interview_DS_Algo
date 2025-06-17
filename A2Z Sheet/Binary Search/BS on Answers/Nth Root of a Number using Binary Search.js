// Nth Root of a Number using Binary Search
// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.


// You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.

// Examples :

// Input: n = 2, m = 9
// Output: 3
// Explanation: 32 = 9
// Input: n = 3, m = 9
// Output: -1
// Explanation: 3rd root of 9 is not integer.
// Input: n = 1, m = 14
// Output: 14

function nthRoot(n, m) {
    let low = n, high = m;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        let value = Math.pow(mid, n);
        
        if(value === m) return mid;
        
        if(value < m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
// Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.

// Example 1:
// Input Format
// : N = 6, array[] = {9, -3, 3, -1, 6, -5}
// Result
// : 5


/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    maxLen(arr) {
        // code here
        let maxLength = 0;
        let n = arr.length;
        let map = new Map(); // To store prefix sum and its earliest index
        let sum = 0;
        for(let i = 0; i < n; i++) {
            sum += arr[i];
            
            if(sum === 0) {
                maxLength = i + 1;
            } else {
                if(map.has(sum)) {
                    maxLength = Math.max(maxLength, i - map.get(sum));
                } else {
                    map.set(sum, i);
                }
            }
        }
        return maxLength;
    }
}



/*
function maxLen(arr) {
    // code here
    let maxLength = 0;
    let n = arr.length;
    
    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let j = i; j < n; j++) {
            sum += arr[j];
            if(sum === 0) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
}
// TC: O(n^2)
*/
// Longest Subarray with sum K | [Postives and Negatives]
// Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
// Example 1:
// Input Format:
//  N = 3, k = 5, array[] = {2,3,5}
// Result:
//  2
// Explanation:
//  The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format
// : N = 3, k = 1, array[] = {-1, 1, 1}
// Result:
//  3
// Explanation:
//  The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.

function longestSubarray(arr, k) {
    let length = 0;

    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            
            if(sum === k) {
                length = Math.max(length, j - i + 1);
            }
        }
    }
    return length;
}

// TLE

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x-k
        // If there exists a subarray with sum k ending at current 'i'
        // then there should be x - k exists. PrefixSum is x till current 'i'
        //  -----------------i
        //             ------k
        //       x-k   ------k
        // x here is represented as sum, if rem exists in our map, then 
        // there is a subarray ending at i
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // finally, update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

// Works for both positive, 0 and negative numbers. Optimal Solution

// let a = [-1, 1, 1];
// let k = 1;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);



// Longest Subarray with given Sum K(Positives)

// Intuition: We are using two pointers i.e. left and right. 
// The left pointer denotes the starting index of the subarray and the right pointer denotes the ending index. 
// Now as we want the longest subarray, we will move the right pointer in a forward direction every time adding 
// the element i.e. a[right] to the sum. But when the sum of the subarray crosses k, we will move the left pointer
//  in the forward direction as well to shrink the size of the subarray as well as to decrease the sum. 
//  Thus, we will consider the length of the subarray whenever the sum becomes equal to k.
// The below dry run will clarify the intuition.

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
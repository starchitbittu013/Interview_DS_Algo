// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


// Solution 1:
// Brute Force Approach: 
// The extremely naive solution, we can think of, involves the use of an extra array. 
// The algorithm is as follows.

// Algorithm:
// Suppose, there are N-X zeros and X non-zero elements in the array. 
// We will first copy those X non-zero elements from the original array to a temporary array. 
// Then, we will copy the elements from the temporary array one by one and 
// fill the first X places of the original array. 
// The last N-X places of the original array will be then filled with zero. Now, our task is completed.

function moveZeros(n, a) {
    // Temporary array
    let temp = [];
    
    // Copy non-zero elements from original array to temp array
    for (let i = 0; i < n; i++) {
        if (a[i] !== 0) {
            temp.push(a[i]);
        }
    }
    
    // Number of non-zero elements
    let nz = temp.length;
    
    // Copy elements from temp and fill the first nz fields of the original array
    for (let i = 0; i < nz; i++) {
        a[i] = temp[i];
    }
    
    // Fill the rest of the cells with 0
    for (let i = nz; i < n; i++) {
        a[i] = 0;
    }
    
    return a;
}

// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans.join(' '));

// Time Complexity: O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements,
// X = no. of non-zero elements, and N-X = total no. of zeros.
// Reason: O(N) for copying non-zero elements from the original to the temporary array. 
// O(X) for again copying it back from the temporary to the original array. 
// O(N-X) for filling zeros in the original array. So, the total time complexity will be O(2*N).

// Space Complexity: O(N)


// Optimal Approach(Using 2 pointers): 

// First, using a loop, we will place the pointer j. If we don’t find any 0, 
// we will not perform the following steps.
// After that, we will point i to index j+1 and start moving the pointer using a loop.
// While moving the pointer i, we will do the following:
// If a[i] != 0 i.e. a[i] is a non-zero element: We will swap a[i] and a[j]. 
// Now, the current j is pointing to the non-zero element a[i]. 
// So, we will shift the pointer j by 1 so that it can again point to the first zero.
// Finally, our array will be set in the right manner.


function moveZeros(n, a) {
    let j = -1;
    
    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    
    // No non-zero elements
    if (j === -1) return a;
    
    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }
    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let gap = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            gap++;
        }
        else {
            [nums[i-gap], nums[i]] = [nums[i], nums[i-gap]]
        }
    }
};
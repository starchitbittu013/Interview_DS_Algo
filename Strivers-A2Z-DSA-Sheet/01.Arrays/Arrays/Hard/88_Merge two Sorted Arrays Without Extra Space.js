// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

// TC: O(n)
// SC: O(1)

// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

// Example 1:
// Input:
 
// n = 4, arr1[] = [1 4 8 10] 
// m = 5, arr2[] = [2 3 9]

// Output:
 
// arr1[] = [1 2 3 4]
// arr2[] = [8 9 10]

// This gap method is based on a sorting technique called shell sort. The intuition of this method is simple. 

// Approach:
// The steps are as follows:

// First, assume the two arrays as a single array and calculate the gap value i.e. ceil((size of arr1[] + size of arr2[]) / 2).
// We will perform the following operations for each gap until the value of the gap becomes 0:
// Place two pointers in their correct position like the left pointer at index 0 and the right pointer at index (left+gap).
// Again we will run a loop until the right pointer reaches the end i.e. (n+m). Inside the loop, there will be 3 different cases:
// If the left pointer is inside arr1[] and the right pointer is in arr2[]: We will compare arr1[left] and arr2[right-n] and swap them if arr1[left] > arr2[right-n].
// If both the pointers are in arr2[]: We will compare arr1[left-n] and arr2[right-n] and swap them if arr1[left-n] > arr2[right-n].
// If both the pointers are in arr1[]: We will compare arr1[left] and arr2[right] and swap them if arr1[left] > arr2[right].
// After the right pointer reaches the end, we will decrease the value of the gap and it will become ceil(current gap / 2). 
// Finally, after performing all the operations, we will get the merged sorted array.

function swapIfGreater(arr1, arr2, ind1, ind2) {
    if (arr1[ind1] > arr2[ind2]) {
      [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
  }
  
  function merge(arr1, arr2, n, m) {
    const len = n + m;
    let gap = Math.ceil(len / 2);
  
    while (gap > 0) {
      let left = 0;
      let right = left + gap;
  
      while (right < len) {
        if (left < n && right >= n) {
          swapIfGreater(arr1, arr2, left, right - n);
        } else if (left >= n) {
          swapIfGreater(arr2, arr2, left - n, right - n);
        } else {
          swapIfGreater(arr1, arr1, left, right);
        }
        left++, right++;
      }
  
      if (gap == 1) break;
  
      gap = Math.ceil(gap / 2);
    }
  }
  
  const arr1 = [1, 4, 8, 10];
  const arr2 = [2, 3, 9];
  const n = 4, m = 3;
  
  merge(arr1, arr2, n, m);
  
  console.log("The merged arrays are:");
  console.log(`arr1[] = ${arr1.join(" ")}`);
  console.log(`arr2[] = ${arr2.join(" ")}`);



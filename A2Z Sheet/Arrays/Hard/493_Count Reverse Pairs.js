// Count Reverse Pairs


// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
 

// Example 1:

// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:

// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1


function merge(arr, low, mid, high) {
    let temp = []; // temporary array
    let left = low; // starting index of left half of arr
    let right = mid + 1; // starting index of right half of arr
  
    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
  
    // if elements on the left half are still left
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
  
    // if elements on the right half are still left
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
  
    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
  
  function countPairs(arr, low, mid, high) {
    let right = mid + 1;
    let cnt = 0;
    for (let i = low; i <= mid; i++) {
      while (right <= high && arr[i] > 2 * arr[right]) right++;
      cnt += right - (mid + 1);
    }
    return cnt;
  }
  
  function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;
    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid); // left half
    cnt += mergeSort(arr, mid + 1, high); // right half
    cnt += countPairs(arr, low, mid, high); // Modification
    merge(arr, low, mid, high); // merging sorted halves
    return cnt;
  }
  
  function reversePairs(skill, n) {
    return mergeSort(skill, 0, n - 1);
  }
  
  let a = [4, 1, 2, 3, 1];
  let n = 5;
  let cnt = reversePairs(a, n);
  console.log("The number of reverse pair is: " + cnt);
 

// Time Complexity: O(2N*logN), where N = size of the given array.
// Reason: Inside the mergeSort() we call merge() and countPairs() except mergeSort() itself. Now, inside the function countPairs(), though we are running a nested loop, we are actually iterating the left half once and the right half once in total. That is why, the time complexity is O(N). And the merge() function also takes O(N). The mergeSort() takes O(logN) time complexity. Therefore, the overall time complexity will be O(logN * (N+N)) = O(2N*logN).

// Space Complexity: O(N), as in the merge sort We use a temporary array to store elements in sorted order.
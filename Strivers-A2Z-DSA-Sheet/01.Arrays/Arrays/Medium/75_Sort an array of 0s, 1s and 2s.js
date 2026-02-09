// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?


// Better Approach.

// Intuition: Since in this case there are only 3 distinct values in the array so 
// it's easy to maintain the count of all, Like the count of 0, 1, and 2. 
// This can be followed by overwriting the array based on the frequency(count) of the values.


// Optimal Approach

// This problem is a variation of the popular Dutch National flag algorithm. 
// This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.  The rules are the following:

// arr[0….low-1] contains 0. [Extreme left part]
// arr[low….mid-1] contains 1.
// arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array
// The middle part i.e. arr[mid….high] is the unsorted segment. 

// variation of the popular Dutch National flag algorithm. 
var sortColors = function(nums) {
    let n = nums.length;
    let low = 0, mid = 0, high = n - 1;

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }
        else if(nums[mid] === 1) {            
            mid++;
        }
        else if(nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;            
        }        
    }
};
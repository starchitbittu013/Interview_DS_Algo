// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

function findMin(arr) {
    let low = 0, high = arr.length - 1;
    let ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        //search space is already sorted
        //then arr[low] will always be
        //the minimum in that search space:
        if (arr[low] <= arr[high]) {
            ans = Math.min(ans, arr[low]);
            break;
        }
        
        // If left part is sorted:
        if (arr[low] <= arr[mid]) {
            // Keep the minimum:
            ans = Math.min(ans, arr[low]);

            // Eliminate left half:
            low = mid + 1;
        } else { // If right part is sorted:
            // Keep the minimum:
            ans = Math.min(ans, arr[mid]);

            // Eliminate right half:
            high = mid - 1;
        }
    }
    return ans;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findMin(arr);
console.log("The minimum element is: " + ans);


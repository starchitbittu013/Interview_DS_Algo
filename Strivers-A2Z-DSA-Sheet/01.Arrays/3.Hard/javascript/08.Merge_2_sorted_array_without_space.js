/*
QUESTION:
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for merged array nums1
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            [nums1[i], nums1[k]] = [nums1[k], nums1[i]];
            i--;
            k--;
        } else {
            [nums2[j], nums1[k]] = [nums1[k], nums2[j]];
            j--;
            k--;
        }
    }
    
    // Copy remaining elements from nums2 to nums1 if any
    while (j >= 0) {
        [nums2[j], nums1[k]] = [nums1[k], nums2[j]];
        j--;
        k--;
    }
}

/*
TIME COMPLEXITY: O(m + n), where m and n are the lengths of nums1 and nums2 respectively.
SPACE COMPLEXITY: O(1)
*/

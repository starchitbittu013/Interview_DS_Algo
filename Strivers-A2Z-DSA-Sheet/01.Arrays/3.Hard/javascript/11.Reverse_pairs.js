/*
QUESTION:
Given an integer array nums, return the number of reverse pairs in the array.
A reverse pair is a pair (i, j) where:
0 <= i < j < nums.length and
nums[i] > 2 * nums[j].

Example:
Input: nums = [1,3,2,3,1]
Output: 2
*/

let rev_pair = 0;

function merge(start, mid, end, nums) {
    const left_size = mid - start + 1;
    const right_size = end - mid;
    const left = [];
    const right = [];

    for (let i = 0; i < left_size; i++) {
        left[i] = nums[start + i];
    }
    for (let i = 0; i < right_size; i++) {
        right[i] = nums[mid + 1 + i];
    }

    // main logic resides here
    let m = 0;
    for (let i = 0; i < left_size; i++) {
        while (m < right_size && left[i] > 2 * right[m]) {
            m++;
        }
        rev_pair += m;
    }

    let i = 0, j = 0, k = start;
    while (i < left_size && j < right_size) {
        if (left[i] > right[j]) {
            nums[k++] = right[j++];
        }
        else {
            nums[k++] = left[i++];
        }
    }
    while (i < left_size) {
        nums[k++] = left[i++];
    }
    while (j < right_size) {
        nums[k++] = right[j++];
    }
}

function mergesort(start, end, nums) {
    if (start >= end)
        return;
    const mid = start + Math.floor((end - start) / 2);
    mergesort(start, mid, nums);
    mergesort(mid + 1, end, nums);
    merge(start, mid, end, nums);
}

function reversePairs(nums) {
    rev_pair = 0;
    mergesort(0, nums.length - 1, nums);
    return rev_pair;
}

/*
TIME COMPLEXITY: O(n log n), where n is the size of the array.
SPACE COMPLEXITY: O(n), where n is the size of the array.
*/

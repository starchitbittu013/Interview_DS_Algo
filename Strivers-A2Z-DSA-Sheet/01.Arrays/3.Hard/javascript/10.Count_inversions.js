/*
QUESTION:
Given an array of integers. Find the Inversion Count in the array.

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted.
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

Example 1:
Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
*/

let inv_cnt = 0;

function merge(start, mid, end, arr) {
    const leftsize = mid - start + 1;
    const rightsize = end - mid;
    const left = [];
    const right = [];
    
    for (let i = 0; i < leftsize; i++) {
        left[i] = arr[start + i];
    }
    for (let i = 0; i < rightsize; i++) {
        right[i] = arr[mid + 1 + i];
    }
    
    let i = 0, j = 0, k = start;
    while (i < leftsize && j < rightsize) {
        if (left[i] > right[j]) {
            inv_cnt += leftsize - i;
            arr[k++] = right[j++];
        } else {
            arr[k++] = left[i++];
        }
    }
    while (i < leftsize) {
        arr[k++] = left[i++];
    }
    while (j < rightsize) {
        arr[k++] = right[j++];
    }
}

function mergesort(start, end, arr) {
    if (start >= end)
        return;
    const mid = start + Math.floor((end - start) / 2);
    mergesort(start, mid, arr);
    mergesort(mid + 1, end, arr);
    merge(start, mid, end, arr);
}

function inversionCount(arr, N) {
    inv_cnt = 0;
    mergesort(0, N - 1, arr);
    return inv_cnt;
}

/*
TIME COMPLEXITY: O(N log N), where N is the size of the array.
SPACE COMPLEXITY: O(N).
*/

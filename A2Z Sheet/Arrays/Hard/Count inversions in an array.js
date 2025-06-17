// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

// What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].


class Solution {
    // Function to count inversions in the array.
    inversionCount(arr) {
        // your code here
        let n = arr.length;
        
        return this.mergeSort(arr, 0, n -1);
    }
    
    mergeSort(arr, low, high) {
        if(low >= high) return 0;
        let count = 0;
        
        let mid = Math.floor((low + high)/2);
        
        count += this.mergeSort(arr, low, mid);
        count += this.mergeSort(arr, mid + 1, high);
        count += this.merge(arr, low, mid, high);
        
        return count;
    }
    
    merge(arr, low, mid, high) {
        let temp = [];
        
        let left = low;
        let right = mid + 1;
        let inversion = 0;
        
        while(left <= mid && right <= high) {
            if(arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                inversion += mid - left + 1;
                temp.push(arr[right]);
                right++
            }
        }
        
        while(left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        
        while(right <= high) {
            temp.push(arr[right]);
            right++;
        }
        
        for(let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
        return inversion;
    }
}
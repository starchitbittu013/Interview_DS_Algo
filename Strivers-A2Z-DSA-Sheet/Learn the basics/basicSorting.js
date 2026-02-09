// Selection Sort Algorithm : Select minimum

// Approach:

// The algorithm steps are as follows:

// First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.
// The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on.
// (Initially, the range will be the whole array starting from the first index.)
// Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
// After that, we will swap the minimum element with the first element of the selected range(in step 1). 
// Finally, after each iteration, we will find that the array is sorted up to the first index of the range. 
// Note: Here, after each iteration, the array becomes sorted up to the first index of the range. That is why the starting index of the range increases by 1 after each iteration. This increment is achieved by the outer loop and the starting index is represented by variable i in the following code. And the inner loop(i.e. j) helps to find the minimum element of the range [i…..n-1].

// Dry run:

// The following dry run will clarify the concepts:

// Assume the given array is: {7, 5, 9, 2, 8}

// Outer loop iteration 1:
// The range will be the whole array starting from the 1st index as this is the first iteration. The minimum element of this range is 2(found using the inner loop).


// Outer loop iteration 2:
// The range will be from the [2nd index to the last index] as the array is sorted up to the first index. The minimum element of this range is 5(found using the inner loop).


// Outer loop iteration 3:
// The range will be from the [3rd index to the last index]. The minimum element of this range is 7(found using the inner loop).


// Outer loop iteration 4:
// The range will be from the [4th index to the last index]. The minimum element of this range is 8(found using the inner loop).


// So, after 4 iterations(i.e. n-1 iterations where n = size of the array), the given array is sorted.
// It brings minimum in front 

// Time complexity: O(N2) Best, Average, worst
// console.log(selectionSort([13, 46, 24, 52, 20, 9]));
// console.log(selectionSort([4, 1, 3, 9, 7]));

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        let currentMin = Infinity;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < currentMin) {
                currentMin = arr[j];
                min = j;
            }
        }
        if(arr[min] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// Bubble Sort Algorithm : Push the maximum to the last by adjacent swapping

// Bubble Sort repeatedly steps through the list, compares adjacent elements, 
// and swaps them if they are in the wrong order. It pushes the maximum at the end.
// This process is repeated until the list is sorted.

// Time Complexity:
// Worst and Average Case: O(n²)
// Best Case (when the array is already sorted): O(n) due to the optimization with the swapped flag.


// console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
// console.log(bubbleSort([4, 1, 3, 9, 7]));
// console.log(bubbleSort([1, 5, 6, 9, 10]));

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        // If no two elements were swapped in inner loop, the array is sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

function bubbleSortRecursion(arr, n) {
    // Base Case: range == 1.
    if (n == 1) return;

    let didSwap = 0;
    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            didSwap = 1;
        }
    }

    // if no swapping happens.
    if (didSwap == 0) return;

    //Range reduced after recursion:
    bubbleSortRecursion(arr, n - 1);
}


// Insertion Sort Algorithm: Takes an element and places it in its correct order

// Insertion Sort works by building a sorted portion of the array one element at a time. 
// For each element in the array, 
// it compares it to the elements before it and inserts it into the correct position.

// Time complexity: O(N2), (where N = size of the array), for the worst, and average cases.
// Reason: If we carefully observe, we can notice that the outer loop, 
// say i, is running from 0 to n-1 i.e. n times, and for each i, the inner loop j runs from i to 1 
// i.e. i times. For, i = 1, the inner loop runs 1 time, for i = 2, the inner loop runs 2 times, and so on. 
// So, the total steps will be approximately the following: 1 + 2 + 3 +......+ (n-2) + (n-1). 
// The summation is approximately the sum of the first n natural numbers i.e. (n*(n+1))/2. 
// The precise time complexity will be O(n2/2 + n/2). Previously, 
// we have learned that we can ignore the lower values as well as the constant coefficients. 
// So, the time complexity is O(n2). Here the value of n is N i.e. the size of the array.

// Space Complexity: O(1)

// Best Case Time Complexity: 

// The best case occurs if the given array is already sorted. 
// And if the given array is already sorted, the outer loop will only run and the inner loop will run for 0 times.
//  So, our overall time complexity in the best case will boil down to O(N), where N = size of the array.

// console.log(insertionSort([13, 46, 24, 52, 20, 9]));
// console.log(insertionSort([4, 1, 3, 9, 7]));
// console.log(insertionSort([1, 5, 6, 9, 10]));

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let j = i;

        while(j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            j--;
        }
    }
    return arr;
}

/* Merge Sort Algorithm: Divide and Merge

Divide: Split the array into two halves.
Conquer: Recursively sort each half.
Combine: Merge the sorted halves back together.

Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and 
then merges the 2 sorted parts. 
There are 2 main functions :
merge(): This function is used to merge the 2 halves of the array. 
It assumes that both parts of the array are sorted and merges both of them.

mergeSort(): This function divides the array into 2 parts. low to mid and mid+1 to high where,
 low = leftmost index of the array
 high = rightmost index of the array
 mid = Middle index of the array 
We recursively split the array, and go from top-down until all sub-arrays size becomes 1.

Base Case: if(low >= high) return;

Psuedo Code:

mergeSort(arr, low, high) {
    //Base case
    if(low >= high) return;
    
    mid = (low+high) / 2;

    // Left Half
    mergeSort(arr, low, mid);

    // right half
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
}

Time Complexity:
Best, Average, and Worst Case: O(n log n)
Reason: At each step, we divide the whole array, for that logn 
and we assume n steps are taken to get a sorted array, so overall time complexity will be nlogn
Space Complexity: O(n) due to the additional arrays used during merging.
Reason: We are using a temporary array to store elements in sorted order.



console.log(performMergeSort([13, 46, 24, 52, 20, 9]));
console.log(performMergeSort([4, 1, 3, 9, 7]));
console.log(performMergeSort([1, 5, 6, 9, 10]));

*/ 

function performMergeSort(arr) {
    let n = arr.length;
    mergeSort(arr, 0, n - 1);
    
    return arr;
}

function mergeSort(arr, low, high) {
    // Base case
    if(low >= high) return;

    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid); // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high); // merging sorted halves
}

function merge(arr, low, mid, high) {
    let temp = [];
    // [low........mid]
    // [mid+1.....high]
    let left = low;
    let right = mid + 1;

    // Merge the two sorted halves
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    // If there are some elements left on left array, add them to result
    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // If there are some elements left on right array, add them to result
    while(right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Copy the sorted elements back to the original array
    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}


/* Quick Sort Algorithm

Quick Sort is a divide-and-conquer algorithm like the Merge Sort. 
But unlike Merge sort, this algorithm does not use any extra array for 
sorting(though it uses an auxiliary stack space). So, from that perspective, Quick sort is 
slightly better than Merge sort.

This algorithm is basically a repetition of two simple steps that are the following:

Pick a pivot and place it in its correct place in the sorted array.
Shift smaller elements(i.e. Smaller than the pivot) on the left of the pivot and larger ones to the right.

Pseudocode:

quickSort(arr, low, high) {
    if(low < high) {
        pIndex = partition(arr, low, high);

        // left subarray
        quickSort(arr, low, pIndex - 1);

        // right subarray
        quickSort(arr, pIndex + 1, high);
    }
}

Time Complexity: O(N*logN), where N = size of the array.

Reason: At each step, we divide the whole array, for that logN and n steps are taken for the partition() function, so overall time complexity will be N*logN.

The following recurrence relation can be written for Quick sort : 

F(n) = F(k) + F(n-1-k) 

Here k is the number of elements smaller or equal to the pivot and n-1-k denotes elements greater than the pivot.

There can be 2 cases :

Worst Case – This case occurs when the pivot is the greatest or smallest element of the array. If the partition is done and the last element is the pivot, then the worst case would be either in the increasing order of the array or in the decreasing order of the array. 

Recurrence:
F(n) = F(0)+F(n-1)  or  F(n) = F(n-1) + F(0) 

Worst Case Time complexity: O(n2) 

Best Case – This case occurs when the pivot is the middle element or near to middle element of the array.
Recurrence :
F(n) = 2F(n/2)

Time Complexity for the best and average case: O(N*logN)

Space Complexity: O(1) + O(N) auxiliary stack space.


*/

console.log(quickSort([13, 46, 24, 52, 20, 9]));
console.log(quickSort([4, 1, 3, 9, 7]));
console.log(quickSort([1, 5, 6, 9, 10]));


function quickSort(arr) {
    qs(arr, 0, arr.length - 1);
    return arr;
}


function qs(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        qs(arr, low, pIndex - 1);
        qs(arr, pIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[low]; // 1st element of array is chosen as Pivot here
    let i = low;
    let j = high;

    while (i < j) {
        //  the pointer i will move forward and find the first element that is greater than the pivot
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        // the pointer j will move backward and find the first element that is smaller than the pivot

        // Here, we need to add some checks like i <= high-1 and j >= low+1. 
        // Because it might happen that i is standing at high and trying to proceed 
        // or j is standing at low and trying to exceed.
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }

        // Once we find such elements i.e. arr[i] > pivot and arr[j] < pivot, and i < j, we will swap arr[i] and arr[j].
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Once j becomes smaller than i, we will swap the pivot element
    // (i.e. arr[low]) with arr[j] and will return the index j i.e. the partition index.

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

// Note: In the function, we have kept the elements equal to the pivot on the left side. 
// If you choose to place them on the right, check 1 will be arr[i] < pivot and check 2 will be arr[j] >= pivot.


/* Counting Sort Algorithm

Counting Sort is an efficient, non-comparison-based sorting algorithm. 
It works best when dealing with non-negative integers within a limited range.


Explanation of Counting Sort Steps:
Find Maximum Element:

The algorithm first identifies the maximum element in the array to define the range.
Initialize Count Array:

A count array is created, with its size equal to the maximum element plus one. All elements in this array are initialized to zero.
Count Frequencies:

Traverse the input array and increment the count at the corresponding index in the count array.
Reconstruct the Sorted Array:

Using the count array, reconstruct the sorted array by placing elements based on their frequencies.

Example Walkthrough:
Initial Array: [4, 2, 2, 8, 3, 3, 1]

Finding Maximum Element:

max = 8
Count Array After Counting Frequencies:

count = [0, 1, 2, 2, 1, 0, 0, 0, 1]
(Index represents the number, value represents its count)
Reconstructing Sorted Array:

[1, 2, 2, 3, 3, 4, 8]

Time and Space Complexity:
Time Complexity:

O(n + k), where n is the number of elements in the array and k is the range of the input (max value in the array).
Space Complexity:

O(k), as additional space is required for the count array.


When to Use Counting Sort:
Best for sorting non-negative integers in a small range.
Not suitable for sorting floating-point numbers or large range numbers.
Stable Sort: It preserves the order of duplicate elements.


*/

function countingSort(arr) {
    if (arr.length === 0) return arr;

    // Find the maximum element in the array
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Initialize the count array with zeros
    let count = new Array(max + 1).fill(0);

    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Reconstruct the sorted array
    let index = 0;
    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }

    return arr;
}

// Example usage:
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array:", arr);
console.log("Sorted Array:", countingSort(arr));

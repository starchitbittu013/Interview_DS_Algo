// Binary Search: Explained

// A real-life example of Binary Search:
// Problem statement: Assume there is a dictionary and we have to find the word “raj”.

// Method 1: One of the many ways is to check every possible page of the entire dictionary and see if we can find the word “raj”. This technique is known as linear search.
// Basically, we can traverse from the first till the end to find the target value in the search space i.e. the entire dictionary in our example.

// Method 2: In this case, we will optimize our search by using the property of a dictionary i.e. a dictionary is always in the sorted order.

// We will first try to open the dictionary in such a way that it is roughly divided into two parts. Then, we will check the left page. Now, assume the words on the left page starts with ‘s’. We can certainly say that our target word i.e. “raj” definitely comes before the words start with ‘s’. So, now, we need not search in the entire dictionary rather we will only search in the left half.
// Now, we will do the same thing with the left half. First, we will divide it into 2 halves and then try to locate which half contains the word “raj”. Eventually, after certain steps, we will end up finding the word “raj”.
// This is a typical real-life example of binary search. 

// Note:

// Binary search is only applicable in a sorted search space. The sorted search space does not necessarily have to be a sorted array. It can be anything but the search space must be sorted.
// In binary search, we generally divide the search space into two equal halves and then try to locate which half contains the target. According to that, we shrink the search space size.
// Coding problem example:
// Problem statement: You are given a sorted array of integers and a target, your task is to search for the target in the given array. Assume the given array does not contain any duplicate numbers.

// Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;

    return binarySearch(nums, 0, n - 1, target);
};

function binarySearch(nums, low, high, target) {
    if (low > high) return -1;

    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
        return binarySearch(nums, mid + 1, high, target);
    } else {
        return binarySearch(nums, low, mid - 1, target);
    }
}


// Iterative implementation:
// Initially, the pointers low and high will be 0 and n-1(where n = size of the given array) respectively.
// Now inside a loop, we will perform the 3 steps discussed above in the algorithm section.
// The loop will run until either we fount the target or any of the pointers crosses the other.

function binarySearch(nums, target) {
    let n = nums.length; // size of the array
    let low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// let a = [3, 4, 6, 7, 9, 12, 16, 17];
// let target = 6;
// let ind = binarySearch(a, target);
// if (ind === -1) console.log("The target is not present.");
// else console.log("The target is at index:", ind);


// Time Complexity:
// In the algorithm, in every step, we are basically dividing the search space into 2 equal halves. This is actually equivalent to dividing the size of the array by 2, every time. After a certain number of divisions, the size will reduce to such an extent that we will not be able to divide that anymore and the process will stop. The number of total divisions will be equal to the time complexity.

// Let’s derive the number of divisions mathematically,

// If a number n can be divided by 2 for x times:
// 	2^x = n
// Therefore, x = logn (base is 2)
// So the overall time complexity is O(logN), where N = size of the given array.
// Search Single Element in a sorted array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

// Naive Approach(Brute force): 
function singleNonDuplicate(arr) {
    var n = arr.length; // Size of the array
    if (n === 1) return arr[0];

    for (var i = 0; i < n; i++) {
        // Check for first index
        if (i === 0) {
            if (arr[i] !== arr[i + 1])
                return arr[i];
        }
        // Check for last index
        else if (i === n - 1) {
            if (arr[i] !== arr[i - 1])
                return arr[i];
        }
        else {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1])
                return arr[i];
        }
    }

    // Dummy return statement
    return -1;
}

var arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
var ans = singleNonDuplicate(arr);
console.log("The single element is: " + ans);

// Naive Approach(Using XOR): 

// We can simplify the above approach using the XOR operation. We need to remember 2 important properties of XOR:

// a ^ a = 0, XOR of two same numbers results in 0.
// a ^ 0 = a, XOR of a number with 0 always results in that number.
// Now, if we XOR all the array elements, all the duplicates will result in 0 and we will be left with a single element.

function singleNonDuplicate(arr) {
    let n = arr.length; // Size of the array
    let ans = 0;
    // XOR all the elements
    for (let i = 0; i < n; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);

// Optimal Approach(Using Binary Search): 

// If arr[mid] != arr[mid-1] and arr[mid] != arr[mid+1]: If this condition is true for arr[mid], we can conclude arr[mid] is the single element.

// If (i % 2 == 0 and arr[i] == arr[i+1]) or (i%2 == 1 and arr[i] == arr[i-1]), we are in the left half.
// If (i % 2 == 0 and arr[i] == arr[i-1]) or (i%2 == 1 and arr[i] == arr[i+1]), we are in the right half.


function singleNonDuplicate(arr) {
    let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the single element:
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }

        // We are in the left:
        if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
                || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    // Dummy return statement:
    return -1;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);


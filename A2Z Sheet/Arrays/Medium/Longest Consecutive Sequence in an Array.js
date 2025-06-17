// Longest Consecutive Sequence in an Array

// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Example 1:
// Input:
//  [100, 200, 1, 3, 2, 4]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 1, 2, 3, and 4.

// Input:
//  [3, 8, 5, 7, 6]

// Output:
//  4

// Brute-force Approach: 
// A straightforward but basic solution is to examine consecutive sequences 
// for each element in the given array. For every element x, we will try to find the consecutive elements, 
// x+1, x+2, x+3, and so on using the linear search algorithm. 
// Thus, we will check the length of the longest consecutive subsequence 
// we can build for every element x. Among all the lengths we will consider the maximum one.

function linearSearch(arr, num) {
    let n = arr.length; // size of array
    for (let i = 0; i < n; i++) {
        if (arr[i] === num)
            return true;
    }
    return false;
}

function longestSuccessiveElements(arr) {
    let n = arr.length; // size of array
    let longest = 1;
    // pick an element and search for its
    // consecutive numbers:
    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let cnt = 1;
        // search for consecutive numbers
        // using linear search:
        while (linearSearch(arr, x + 1) === true) {
            x += 1;
            cnt += 1;
        }

        longest = Math.max(longest, cnt);
    }
    return longest;
}

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestSuccessiveElements(arr);
// console.log("The longest consecutive sequence is", ans);

// Better Approach(Using sorting): 
// We can simply sort the array and run a for loop to find the longest consecutive sequence.

function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestSuccessiveElements(arr);
// console.log("The longest consecutive sequence is", ans);


// Optimal Approach(Using Set data structure): 
// Algorithm:
// We will declare 2 variables, 

// ‘cnt’ → (to store the length of the current sequence), 
// ‘longest’ → (to store the maximum length).
// First, we will put all the array elements into the set data structure.
// For every element, x, that can be a starting number(i.e. x-1 does not exist in the set) we will do the following:
// We will set the length of the current sequence(cnt) to 1.
// Then, again using the set, we will search for the consecutive elements such as x+1, x+2, and so on, and find the maximum possible length of the current sequence. This length will be stored in the variable ‘cnt’.
// After that, we will compare ‘cnt’ and ‘longest’ and update the variable ‘longest’ with the maximum value (i.e. longest = max(longest, cnt)).
// Finally, we will have the answer i.e. ‘longest’.

function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let a = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(a);
console.log("The longest consecutive sequence is", ans);

// Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
// Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).

// Space Complexity: O(N), as we are using the set data structure to solve this problem.
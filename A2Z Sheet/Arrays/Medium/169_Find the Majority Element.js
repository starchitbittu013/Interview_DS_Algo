// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Naive Approach: 
// Approach:
// The steps are as follows:

// We will run a loop that will select the elements of the array one by one.
// Now, for each element, we will run another loop and count its occurrence in the given array.
// If any element occurs more than the floor of (N/2), we will simply return it.


// Solution 2 (Better):
// Intuition:
// Use a better data structure to reduce the number of look-up operations and hence the time complexity. Moreover, we have been calculating the count of the same element again and again - so we have to reduce that also.

// Approach: 
// Use a hashmap and store as (key, value) pairs. (Can also use frequency array based on the size of nums) 
// Here the key will be the element of the array and the value will be the number of times it occurs. 
// Traverse the array and update the value of the key. Simultaneously check if the value is greater than the floor of N/2. 
// If yes, return the key 
// Else iterate forward.

// Optimal Approach: Boyer Moore’s Voting Algorithm:
// Intuition:
// If the array contains a majority element, its occurrence must be greater than the floor(N/2). 
// Now, we can say that the count of minority elements and majority elements is equal up to a certain point 
// in the array. So when we traverse through the array we try to keep track of the count of elements and the 
// element itself for which we are tracking the count. 

// After traversing the whole array, we will check the element stored in the variable. 
// If the question states that the array must contain a majority element, 
// the stored element will be that one but if the question does not state so, then we need to 
// check if the stored element is the majority element or not. If not, then the array does not contain 
// any majority element.

// Approach: 
// Initialize 2 variables:
// Count –  for tracking the count of element
// Element – for which element we are counting
// Traverse through the given array.
// If Count is 0 then store the current element of the array as Element.
// If the current element and Element are the same increase the Count by 1.
// If they are different decrease the Count by 1.
// The integer present in Element should be the result we are expecting 


function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);

// Leaders in an Array
// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

// Example 1:
// Input:

//  arr = [4, 7, 1, 0]
// Output
// :
//  7 1 0
// Explanation:

//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

// Example 2:
// Input:

//  arr = [10, 22, 12, 3, 0, 6]
// Output:

//  22 12 6


function leaders(a) {
    let ans = [];
    let n = a.length;
    let rightMax = a[n- 1];
    
    for(let i = n - 1; i >= 0; i--) {
        if(a[i] >= rightMax) {
            ans.push(a[i]);
            rightMax = a[i];
        }
    }
    return ans.reverse();
}
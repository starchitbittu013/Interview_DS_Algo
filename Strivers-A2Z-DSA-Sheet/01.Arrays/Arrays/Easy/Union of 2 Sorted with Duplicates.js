/* Union of 2 Sorted with Duplicates
Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.
Examples:

Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
Output: 1 2 3 4 5 6 7
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
Output: 1 2 3 4 5
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.
Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
Output: 1 2
Explanation: Distinct elements including both the arrays are: 1 2.

*/

console.log(findUnion([-8, -3, -3, -2, 0, 1, 2, 2, 6], [-9, -9, 0]));

function findUnion(a, b) {
    let m = a.length;
    let n = b.length;
    
    let i = 0, j = 0;
    let result = [];
    
    while(i < m && j < n) {
        while(a[i] === a[i + 1] && i < m - 1) {
            i++;
        }
        while(b[j] === b[j + 1] && j < n - 1) {
            j++;
        }
        
        
        if(a[i] < b[j]) {
            result.push(a[i]);
            i++;
        }
        else if(b[j] < a[i]) {
            result.push(b[j]);
            j++;
        }
        else {
            result.push(a[i]);
            i++;
            j++;
        }
    }
    
    while(i < m) {
        while(a[i] === a[i + 1] && i < m - 1) {
            i++;
        }
        
        result.push(a[i]);
        i++;
    }
    
    while(j < n) {
        while(b[j] === b[j + 1] && j < n - 1) {
            j++;
        }
        result.push(b[j]);
        j++;
    }
     
    return result;
};

// Optimize the code duplicates

console.log(findUnionOptimized([-8, -3, -3, -2, 0, 1, 2, 2, 6], [-9, -9, 0]));

// Time Complexity: 𝑂(𝑚+𝑛) (since we traverse both arrays once)
// Space Complexity: 𝑂(𝑚+𝑛) (for storing the result)

function findUnionOptimized(a, b) {
    let m = a.length;
    let n = b.length;
    
    let i = 0, j = 0;
    let result = [];
    
    while(i < m && j < n) {
        if(a[i] < b[j]) {
            if(result.length === 0 || result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }
            i++;
        }
        else if(b[j] < a[i]) {
            if(result.length === 0 || result[result.length - 1] !== b[j]) {
                result.push(b[j]);
            }
            j++;
        }
        else {
            if(result.length === 0 || result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }
            i++;
            j++;
        }
    }
    
    while(i < m) {
        if(result[result.length - 1] !== a[i]) {
            result.push(a[i]);
        }
        i++;
    }
    
    while(j < n) {
         if(result[result.length - 1] !== b[j]) {
            result.push(b[j]);
        }
        j++;
    }
     
    return result;
}

// Time Complexity: 𝑂(𝑚+𝑛) (since we traverse both arrays once)
// Space Complexity: 𝑂(𝑚+𝑛) (for storing the result)
// Rearrange Array Elements by Sign
// Variety-1

// Problem Statement:

// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// Note: Start the array with positive elements.

// Example 1:

// Input:
// arr[] = {1,2,-4,-5}, N = 4
// Output:
// 1 -4 2 -5

// Example 2:
// Input:
// arr[] = {1,2,-3,-1,-2,-3}, N = 6
// Output:
// 1 -3 2 -1 3 -2

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
    let i = 0, j = 0, idx = 0;
    let result = [];

    while(i < n && j < n) {
        while(nums[i] < 0 && i < n) {
            i++;
        }
        while(nums[j] > 0 && j < n) {
            j++;
        }
        result.push(nums[i]);
        result.push(nums[j]);
        i++;
        j++;
    }
    return result;
};

function RearrangebySign(A) {

    let n = A.length;
  
    // Define an array for storing the answer separately.
    let ans = new Array(n).fill(0);
  
    // Positive elements start from 0 and negative from 1.
    let posIndex = 0, negIndex = 1;
    for (let i = 0; i < n; i++) {
  
      // Fill negative elements in odd indices and increment by 2.
      if (A[i] < 0) {
        ans[negIndex] = A[i];
        negIndex += 2;
      }
  
      // Fill positive elements in even indices and increment by 2.
      else {
        ans[posIndex] = A[i];
        posIndex += 2;
      }
    }
  
    return ans;
  }

//   Variety-2
// Problem Statement:
// There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.

// Note: Start the array with positive elements.


// In this variety, the number of positive and negative numbers shall not necessarily be equal 
// to each other in the given array. So, there can be two cases possible: either the positive elements 
// exceed the negatives or the negatives exceed the positives. So, instead of using the optimal solution 
// discussed for the variety-1 above, we’ll fall back to the brute force solution where we create separate 
// arrays for storing positives and negatives and then put them back into the array alternatively. 
// The remaining negative or positive elements are added to the array at last.


function RearrangebySign(A) {
    
    let n = A.length;
    
    // Define 2 arrays, one for storing positive 
    // and other for negative elements of the array.
    let pos = [];
    let neg = [];
    
    // Segregate the array into positives and negatives.
    for(let i=0;i<n;i++){
        
        if(A[i]>0) pos.push(A[i]);
        else neg.push(A[i]);
    }
    
    // If positives are lesser than the negatives.
    if(pos.length < neg.length){
        
      // First, fill array alternatively till the point 
      // where positives and negatives are equal in number.
      for(let i=0;i<pos.length;i++){
        
        A[2*i] = pos[i];
        A[2*i+1] = neg[i];
      }
      
      // Fill the remaining negatives at the end of the array.
      let index = pos.length*2;
      for(let i = pos.length;i<neg.length;i++){
          
          A[index] = neg[i];
          index++;
      }
    }
    
    // If negatives are lesser than the positives.
    else{
        
        // First, fill array alternatively till the point 
        // where positives and negatives are equal in number.
        for(let i=0;i<neg.length;i++){
        
        A[2*i] = pos[i];
        A[2*i+1] = neg[i];
    }
      
      // Fill the remaining positives at the end of the array.
      let index = neg.length*2;
      for(let i = neg.length;i<pos.length;i++){
          
          A[index] = pos[i];
          index++;
      }
    }
    return A;
      
  }

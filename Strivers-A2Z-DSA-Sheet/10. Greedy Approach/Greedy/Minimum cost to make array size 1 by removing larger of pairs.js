// Minimum cost to make array size 1 by removing larger of pairs

// Given an array of n integers. We need to reduce size of array to one. We are allowed to select a pair of integers and remove the larger one of these two. This decreases the array size by 1. Cost of this operation is equal to value of smallest one. Find out minimum sum of costs of operations needed to convert the array into a single element.

// Examples: 

// Input: arr[]= [4 ,3 ,2 ]
// Output: 4
// Explanation: Choose (4, 2) so 4 is removed, new array = {2, 3}. Now choose (2, 3) so 3 is removed.  So total cost = 2 + 2 = 4.

// Input: arr[]=[ 3, 4 ]
// Output: 3
// Explanation: choose (3, 4) so cost is 3. 


class Solution {
    cost(arr) {
        // your code here
        if (arr.length === 1) return 0;
        
        let length = arr.length;
        let min = Infinity;
        for(let i = 0; i < length; i++) {
            min = Math.min(arr[i], min);
        }
        
        return min * (length - 1);
    }
}

// Greedy Approach - Time O(n) and Space O(1)
// The idea is to always pick the minimum value as part of the pair and remove larger value. This minimizes cost of reducing array to size 1.

// function to calculate the minimum cost
function cost(a) {
    // Minimum cost is (size - 1) multiplied with minimum element.
    const n = a.length;
    return (n - 1) * Math.min(...a);
}

const a = [4, 3, 2];
console.log(cost(a));
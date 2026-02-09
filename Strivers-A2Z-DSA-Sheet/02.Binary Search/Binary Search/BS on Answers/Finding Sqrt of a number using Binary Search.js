// Finding Sqrt of a number using Binary Search
// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of 'sqrt(n)'.

// Note: The question explicitly states that if the given number, n, is not a perfect square, our objective is to find the maximum number, x, such that x squared is less than or equal to n (x*x <= n). In other words, we need to determine the floor value of the square root of n.

// Example 1:
// Input Format:
//  n = 36
// Result:
//  6
// Explanation:
//  6 is the square root of 36.

// Example 2:
// Input Format:
//  n = 28
// Result:
//  5
// Explanation:
//  Square root of 28 is approximately 5.292. So, the floor value will be 5.

// Naive Approach(Using linear search): 

function floorSqrt(n) {
    let ans = 0;
    // linear search on the answer space
    for (let i = 1; i <= n; i++) {
        let val = i * i;
        if (val <= n) {
            ans = i;
        } else {
            break;
        }
    }
    return ans;
}



// First Approach(Using in-built sqrt() function): 
function floorSqrt(n) {
    let ans = Math.floor(Math.sqrt(n));
    return ans;
}
// Time Complexity: O(logN), N = size of the given array.


// Optimal Approach(Using binary search): 


function floorSqrt(n) {
    let ans;
    let low = 1, high = n;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let value = mid * mid;
        
        if(value <= n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

let n = 28;
let ans = floorSqrt(n);
console.log("The floor of square root of " + n + " is: " + ans);

// Print 1 To N Without Loop
// console.log(printNos2(10));

function printNos(n) {
    let count = 0;
    let str = ''
    function print() {        
        if (count === n) return;
        count++;
        str += count + ' ';
        print();
    }
    
    print();
    console.log(str);
}

function printNos1(n) {
    let str = ''
    function print(count) {        
        if (count > n) return;        
        str += count + ' ';
        print(count + 1);
    }
    
    print(1);
    console.log(str);
}
// Backtracking (Backward recursion)
function printNos2(n) {
    let str = ''
    function print(count) {        
        if (count < 1) return;  
        print(count - 1);      
        str += count + ' ';        
    }
    
    print(10);
    console.log(str);
}

// Print Name N times using Recursion

// class Recursion {
    
//     static void func(int i, int n){
        
//             // Base Condition.
//             if(i>n) return;
//             System.out.println("Raj");

//             // Function call to print till i increments.
//             func(i+1,n);

//     }
//     public static void main(String[] args) {

//        // Here, let’s take the value of n to be 4.
//        int n = 4;
//        func(1,n);
//     }
// }

// Print N to 1 using Recursion
// console.log(printNos4(10));

function printNos4(n) {
    let str = ''
    function print(count) {        
        if (count < 1) return;             
        str += count + ' ';     
        print(count - 1);   
    }
    
    print(10);
    console.log(str);
}

// Sum of first N Natural Numbers

// Recursive way of calculating the sum of first N Natural Numbers:

// Parameterized Way
// Functional Way

// 1. Parameterized way

// In this approach, instead of using a global variable for calculating the sum, 
// we pass the sum in the parameters of the function each time we add an integer to it during the function call. 
// The sum gets incremented by an ith integer and i get decremented by 1 in each function call. 
// At the end when i becomes less than 1, we simply return the calculated sum until that point. 

// void func(i,sum)
// {
//    if(i<1)
//    {
//      print(sum);
//      return;
//    }

// func(i-1,sum+i);

// }

// main()
// {
//    input(n);
//    func(n,0);

// }

// We can clearly see in this pseudocode that we first call the function when the value of sum is 0 and 
// then we increment the value of sum by i (initially i is n) and decrement i by 1 inside the 
// parameter of the function and make a call again. But, we know that this will go on forever as i 
// will be decreasing continuously after every function call. So, to avoid this we put a base condition that 
// if i is less than 1, 
// then simply terminate the current recursive call and return the calculated sum.

// class Recursion {
    
//     static void func(int i, int sum){
        
//             // Base Condition.
//             if(i<1){
                
//                 System.out.println(sum);
//                 return;
//             }
            
//             // Function call to increment sum by i till i decrements to 1.
//             func(i-1,sum+i);
            

//     }
//     public static void main(String[] args) {

//        // Here, let’s take the value of n to be 3.
//        int n = 3;
//        func(n,0);
//     }
// }

// 2. Functional way

// This approach is a lot simpler than the parameterized recursion. We can visualize the sum of n natural numbers in the following way as shown below:

// sumOfNaturalNumbers(N) = N + sumOfNaturalNumbers(N-1);
// The Sum of N natural numbers would just be the Nth integer added to the Sum of (N-1) natural numbers. The base case can be visualized as if n decreases to 0, then we return 0 because the sum of 0 natural numbers is 0 only. Here, we’ve just broken the problem into 2 subparts and the answers of both these subparts would be added and stored in the Sum(n) function which would then be printed at last.

// To understand this functional approach better, let us have a look at the pseudocode given below:

// int func(n)
// {
//    if(n == 0)
//    {
//      return 0;
//    }

// return n + func(n-1);

// }

// main()
// {
//    input(n);
//    func(n);

// }

// class Recursion {
    
//     static int func(int n){
        
//             // Base Condition.
//             if(n == 0){
                
//                 return 0;
//             }
            
//             // Problem broken down into 2 parts and then combined.
//             return n + func(n-1);
            

//     }
//     public static void main(String[] args) {

//        // Here, let’s take the value of n to be 3.
//        int n = 3;
//        System.out.println(func(n));
//     }
// }

// Sum of first n terms

// Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

// Examples:

// Input: n = 5
// Output: 225
// Explanation: 13 + 23 + 33 + 43 + 53 = 225

// console.log(sumOfSeries(10));

function sumOfSeries(n) {
    function sum(i) {
        if(i > n) return 0;
        sum = Math.pow(i, 3) + sum(i + 1);
        return sum;
    }
    return sum(1);
}

// Factorial of a Number : Iterative and Recursive

// Iterative Solution below: 

// public class Main {
//     static int factorial(int X) {
//        int ans = 1;
//        for (int i = 1; i <= X; i++) {
//           ans = ans * i;
//        }
//        return ans;
//     }
//     public static void main(String[] args) {
 
//        int X = 5;
//        int result = factorial(X);
//        System.out.println("The factorial of " + X + " is " + result);
//     }
//  }

function factorialIterative(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// console.log(factorialDP2(5));

// Recursive Solution below: 

function factorial(n) {
    if(n === 0) return 1;

    return n * factorial(n - 1);
}

// DP Solution below: 

function factorialDP(n) {
    let map = new Map();

    function factorial(num) {
        if(num === 0 || num === 1) return 1;

        if(map.has(num)) return map.get(num);

        let fact = num * factorial(num - 1);

        map.set(num, fact);
        return fact;
    }
    
    return factorial(n);
}

// Use Array to store memoized value for faster access.
// Map takes O(log n) in worst case and average O(1)
// Best Use Case: Array ->	When storing values contiguously
// Map -> When values are non-contiguous
// Map is inefficient for factorials since we don't have random access patterns; 
// all factorials are computed one after another hence array is best.


function factorialDP1(n) {
    let dp = new Array(n + 1);
    dp[0] = dp[1] = 1;

    function factorial(num) {
        if(num === 0 || num === 1) return 1;

        if(dp[num]) return dp[num];

        let fact = num * factorial(num - 1);

        dp[num] = fact;
        return dp[num];
    }
    
    return factorial(n);
}

function factorialDP2(n) {
    let dp = new Array(n + 1);
    dp[0] = 1; 
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] * i;
    }

    return dp[n];
}

// Factorial using DP
// Top-Down and Bottom-Up Approaches for Factorial
// Both approaches have their use cases in dynamic programming and recursive algorithms. Here's how we can apply each to factorial computation:

// 1. Top-Down Approach (Memoization)
// This approach is recursive and uses memoization (caching results) to avoid recalculating values that have already been computed.

// Steps:
// Start from the number n.
// Recursively calculate the factorial of n-1 and multiply by n.
// Use a cache (dp array) to store results of previously computed factorials.
// Code Example:

// function factorialTopDown(n) {
//     let dp = new Array(n + 1);

//     // Helper function to calculate factorial recursively
//     function factorial(num) {
//         // Base cases
//         if (num === 0 || num === 1) return 1;

//         // Check cache (memoization)
//         if (dp[num] !== undefined) return dp[num];

//         // Recurse and store the result in dp
//         dp[num] = num * factorial(num - 1);
//         return dp[num];
//     }

//     return factorial(n);
// }

// // Example usage:
// console.log(factorialTopDown(5)); // Output: 120
// console.log(factorialTopDown(10)); // Output: 3628800
// 2. Bottom-Up Approach (Tabulation)
// This approach builds the solution iteratively, starting from the smallest base case (0! = 1) and calculating larger factorials step by step.

// Steps:
// Start from 0! = 1.
// Iteratively calculate the factorial for all numbers from 1 to n.
// Store results in an array dp[] as you go.
// Code Example:
// js
// Copy
// Edit
// function factorialBottomUp(n) {
//     let dp = new Array(n + 1);
//     dp[0] = 1; // Base case for factorial(0)

//     for (let i = 1; i <= n; i++) {
//         dp[i] = dp[i - 1] * i; // Calculate factorial iteratively
//     }

//     return dp[n];
// }

// // Example usage:
// console.log(factorialBottomUp(5)); // Output: 120
// console.log(factorialBottomUp(10)); // Output: 3628800
// Comparison:
// Approach	Top-Down (Memoization)	                                         Bottom-Up (Tabulation)
// Technique	Recursion with caching (memoization)	                 Iterative approach, build the solution step by step
// Time Complexity	O(n) (because of memoization)	                    O(n) (no recursion overhead)
// Space Complexity	O(n) (for the recursion stack + cache)	        O(n) (for the dp[] array)
// When to Use	Useful when you have overlapping subproblems and recursion	Preferred when you need to avoid recursion or when building solutions iteratively
// Both approaches provide optimal time complexity (O(n)) for factorial calculation, but the Bottom-Up approach can be more efficient in terms of memory usage as it avoids recursion overhead.

// Factorials Less than or Equal to n

// A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
// Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

// console.log(factorialNumbers(5));

function factorialNumbers(n) {
    let str = '';
    function factorial(i, fact) {
        if(fact > n) return;
        str += fact + " ";
        factorial(i + 1, fact * (i + 1));
    }
    factorial(1, 1);
    console.log(str);
}

function factorialNumbers(n) {
    
    let result = [];
    function factorial(i, fact) {
        if(fact > n) return;
        result.push(fact);
        factorial(i + 1, fact * (i + 1));
    }
    factorial(1, 1);
    return result;
}

// Reverse a given Array

// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, 
// the second element occupies the fourth position and so on.

// console.log(reverseArray([5,4,3,2,1]));

function reverseArray(arr) {
    let n = arr.length;    
    function reverseArr(start, end) {
        if(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            reverseArr(start + 1, end - 1);
        }

    }

    reverseArr(0, n - 1);
    return arr;
}

// Check if the given String is Palindrome or not
// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// console.log(isPalindrome1('ABCDCBA'));
// console.log(isPalindrome1('ABCDDDDCBA'));
// console.log(isPalindrome1('TAKE U FORWARD'));

// One approach is 2 Pointer in a while loop

// Recursive Approach

function isPalindrome(str) {
    let n = str.length;

    function checkPalindrome(start, end) {
        if (start < end) {
            if(str[start] !== str[end]) {
                return false;
            }
            return checkPalindrome(start + 1, end - 1);
        }
        return true;
    }
    return checkPalindrome(0, n - 1);
}

function isPalindrome1(str) {
    let n = str.length;

    function checkPalindrome(i) {
        if (i >= n / 2) return true;
        if(str[i] !== str[n - i - 1]) return false
        return checkPalindrome(i + 1);
    }
    return checkPalindrome(0);
}

// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase 
// letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let n = s.length;
    let i = 0, j = n - 1;
    while(i < j) {
        if(!isAlphaNumeric(s[i].charCodeAt(0))) {
            i++;
            continue;
        }

        if(!isAlphaNumeric(s[j].charCodeAt(0))) {
            j--;
            continue;
        }

        let leftChar = s[i];
        let rightChar = s[j];

        if(isUpperCase(s[i].charCodeAt(0))) {
            leftChar = convertUpperCaseToLower(leftChar);            
        }

        if(isUpperCase(s[j].charCodeAt(0))) {
            rightChar = convertUpperCaseToLower(rightChar);
        }

        if(leftChar !== rightChar) return false;
        i++;
        j--;
    }
    return true;       
};

function isAlphaNumeric(charCode) {
    return (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0) 
            || charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0) 
            || charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0));
}

function isUpperCase(charCode) {
    return charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0);             
}

function convertUpperCaseToLower(char) {
    let code = (char.charCodeAt(0) - 'A'.charCodeAt(0)) + 'a'.charCodeAt(0);
    return String.fromCharCode(code);
}

// using Built-in functions

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // check for invalid input; return false
    if (s.length < 1) return false;
    
    //convert string to lowercase
    s = s.toLowerCase(); 
	
	//strip string of non-alphanumeric characters
	s = s.replace(/[^a-z0-9]/gi, ""); 
	
    // iterate through string s, comparing both ends of string s and evaluating if each character matches
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1] ) {
            return false;
        }
    }

    return true;
};

// Print Fibonacci Series up to Nth term

// Example 1:
// Input: N = 5
// Output: 0 1 1 2 3 5
// Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

// console.log(fibonacci(5));

function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Time Complexity: O(n)

// Space Complexity: O(n)

// Another Solution: Space optimized, 
// For calculating the ith term we only need the last and second last term i.e (i-1)th and (i-2)th term, 
// so we don't need to maintain the whole array.
// Take two variables last and secondLast for storing (i-1)th and (i-2)th term.
// Now iterate from 2 to n and calculate the ith term. ith term is last + secondLast term.
// Then update secondLast term to the last term and the last term to ith term as we iterate.


// console.log(fibonacci(5));

function fibonacci(n) {
    let secondLastValue = 0;
    let lastValue = 1;
    let currentValue = 0;

    let str = '';
    str += secondLastValue + ' ' +  lastValue;

    for(let i = 2; i <= n; i++) {
        currentValue = lastValue + secondLastValue;
        secondLastValue = lastValue;
        lastValue = currentValue;
        str += ' ' + currentValue;
    }
    return str;
}

// Another Approach : Recursion

// Time Complexity: O(2^N) { This problem involves two function calls for each iteration 
// which further expands to 4 function calls and so on which makes worst-case time complexity to be exponential 
// in nature }.

// Space Complexity: O(N) { At maximum there could be N function calls waiting in the 
// recursion stack since we need to calculate the Nth Fibonacci number for 
// which we also need to calculate (N-1) Fibonacci numbers before it }.

// console.log(findFibonacci(5));
// console.log(findFibonacci(6));
// console.log(findFibonacci(7));

function findFibonacci(n) {
    function fibonacci(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;

        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fibonacci(n);
}

// Another Approach : Recursion + Memoization = DP - Top down approach

console.log(findFibonacciMemoization(5));
console.log(findFibonacciMemoization(6));
console.log(findFibonacciMemoization(7));
console.log(findFibonacciMemoization(8));

function findFibonacciMemoization(n) {
    let result = [];
    function fibonacci(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;

        if(result[n]) return result[n];

        result[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return result[n];
    }
    return fibonacci(n);
}
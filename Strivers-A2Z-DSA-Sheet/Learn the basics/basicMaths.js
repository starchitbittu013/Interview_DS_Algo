// Count digits in a number

// Problem Statement: Given an integer N, return the number of digits in N.

// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.
// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

function countDigit(N) {
    let count = 0;
    if(N === 0) return 1;
    N = Math.abs(N);

    while(N > 0) {        
        count++;
        N = Math.floor(N / 10);
    }
    return count;
}

// console.log(countDigit(123456));

// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let isNegative = x < 0;
    x = Math.abs(x);

    while(x > 0) {
        let digit = x % 10;

        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    } 

    if(reverse > 2147483648) return 0;
    
    return isNegative ? -reverse : reverse;
};

// Efficient Approach:

// Time Complexity: O(log(x))
// Auxiliary Space: O(1)

var reverse = function (x) {
    let rev = 0;
    while (x !== 0) {
        let pop = x % 10;
        x = (x - pop) / 10;
        if (
            rev > Math.pow(2, 31) / 10 ||
            (rev == Math.pow(2, 31) / 10 && pop > 7)
        )
            return 0;
        if (
            rev < Math.pow(-2, 31) / 10 ||
            (rev == Math.pow(-2, 31) / 10 && pop < -8)
        )
            return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};

//console.log(reverse(123));


// Check if a number is Palindrome or Not

// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. 
// For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x);
   let y = x.split('').reverse().join('');

   if ( x === y )
       return true;
   else
       return false;
};

var isPalindrome = function(x) {
    x = String(x);
    
    let i = 0, j = x.length - 1;

    while(i < j) {
        if(x[i] !== x[j]) return false;
        i++;
        j--;

    }
    return true;
};
// Optimized Approach (Without String Conversion)

var isPalindrome1 = function(x) {
    if( x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let revNum = 0;
    let original = x;

    while(x > 0) {
        let digit = x % 10;
        revNum = revNum * 10 + digit;
        x = Math.floor(x / 10);
    }    
    return original === revNum ? true : false;
};

// Important to check for x = 0, 10 or 100, 200..
// 0 is a palindrome
// console.log(isPalindrome1(100));


// Find GCD of two numbers

// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// Example 1:
// Input:N1 = 9, N2 = 12
                
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.


function findGCD(n1, n2) {
    while (n2 !== 0) {  
        let remainder = n1 % n2;
        n1 = n2;  
        n2 = remainder;
    }
    return n1;
}


// Algorithm / Intuition
// The Euclidean Algorithm is a method for finding the greatest common divisor of two numbers. It operates on the principle that the GCD of two numbers remains the same even if the smaller number is subtracted from the larger number.

// To find the GCD of n1 and n2 where n1 > n2:

// Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
// Once one of them becomes 0, the other number is the GCD of the original numbers.
// Eg, n1 = 20, n2 = 15:

// gcd(20, 15) = gcd(20-15, 15) = gcd(5, 15)

// gcd(5, 15) = gcd(15-5, 5) = gcd(10, 5)

// gcd(10, 5) = gcd(10-5, 5) = gcd(5, 5)

// gcd(5, 5) = gcd(5-5, 5) = gcd(0, 5)

// Hence, return 5 as the gcd.

// console.log(findGCD1(24, 36));
// console.log(findGCD1(2, 3));
// console.log(findGCD1(2, 0));
// console.log(findGCD1(98, 56));

function findGCD1(n1, n2) {
    if (n2 === 0) return n1;
    return findGCD1(n2, n1 % n2);
}

// Print all Divisors of a given Number

// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

// console.log(printAllDivisors(36));
// console.log(printAllDivisors(100));
// console.log(printAllDivisors(0));

function printAllDivisors(n) {
    let result = [];
    if (n === 0) return [0];
    
    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            result.push(i);

            if(i !== n / i) {
                result.push(n / i);
            }
            
        }
    }
    return result;
}

// Check if a number is prime or not
// Problem Statement: Given an integer N, check whether it is prime or not. 
// A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// console.log(checkPrime(0));
// console.log(checkPrime(3));
// console.log(checkPrime(7));
// console.log(checkPrime(10));
// console.log(checkPrime(79));

function checkPrime(n) {
    let count = 0;

    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            count++;
            if(i !== n / i) {
                count++;
            }    
        }
    }
    return count === 2 ? true : false;
}


// Check if a number is Armstrong Number or not

// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power 
// of the number of digits.

// console.log(checkArmstrongNumber(153));
// console.log(checkArmstrongNumber(371));
// console.log(checkArmstrongNumber(0));

function checkArmstrongNumber(n) {
    let sum = 0;
    let original = n;
    let length = 0;
    
    while(n > 0) {
        length++;
        n = Math.floor(n / 10);
    }

    n = original;

    while(n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, length);
        n = Math.floor(n / 10);
    }
    return original === sum ? true : false;
}


// Minimum Jumps
// You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

// For example:

// If arr[i] = 3, you can jump 1 step, 2 steps, or 3 steps forward from position i.
// If arr[i] = 0, you cannot jump forward from that position.
// Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

// Note:  Return -1 if you can't reach the end of the array.

// Examples : 

// Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 
// Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last. 

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
console.log(minJumps([1, 4, 3, 2, 6, 7]));
console.log(minJumps([0, 10, 20]));

function minJumps(arr) {
    let minJump = arr[0] === 0 ? -1 : 0;
    let maxJump = 0, currentEnd = 0;
    
    for(let i = 0; i < arr.length - 1; i++) {
       maxJump = Math.max(maxJump, i + arr[i]);
       
       if(i === currentEnd) {
           minJump++;
           currentEnd = maxJump;
       }
       if(currentEnd >= arr.length - 1) return minJump;
    }
    return -1;
}
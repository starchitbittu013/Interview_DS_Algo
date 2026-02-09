/*
QUESTION:
Given an unsorted array Arr of size N of positive integers. One number 'A' from set {1, 2,....,N} is missing and one number 'B' occurs twice in the array. Find these two numbers.

Example:
Input:
N = 2
Arr[] = {2, 2}
Output: 2 1
Explanation: Repeating number is 2 and the smallest positive missing number is 1.
*/

function findTwoElement(arr, N) {
    const n = BigInt(N);
    const optSum = n * (n + 1n) / 2n; // Sum if all elements are present once
    const opt2Sum = n * (n + 1n) * (2n * n + 1n) / 6n; // Optimum sum of squares
    let actSum = 0n; // Actual sum of the given array
    let act2Sum = 0n; // Actual sum of squares
    
    for (const num of arr) {
        actSum += BigInt(num);
        act2Sum += BigInt(num) * BigInt(num);
    }
    
    const xMinusY = optSum - actSum;
    const x2MinusY2 = opt2Sum - act2Sum;
    const xPlusY = x2MinusY2 / xMinusY;
    
    const x = (xPlusY + xMinusY) / 2n;
    const y = xPlusY - x;
    
    return [Number(y), Number(x)];
}

/*
TIME COMPLEXITY: O(N), where N is the size of the array.
SPACE COMPLEXITY: O(1).
*/

"""
QUESTION:
Given an unsorted array Arr of size N of positive integers. One number 'A' from set {1, 2,....,N} is missing and one number 'B' occurs twice in the array. Find these two numbers.

Example:
Input:
N = 2
Arr[] = {2, 2}
Output: 2 1
Explanation: Repeating number is 2 and the smallest positive missing number is 1.
"""
from typing import List

def findTwoElement(arr: List[int], N: int) -> List[int]:
    n = N
    optSum = n * (n + 1) // 2  # Sum if all elements are present once
    opt2Sum = n * (n + 1) * (2 * n + 1) // 6  # Optimum sum of squares
    actSum = 0  # Actual sum of the given array
    act2Sum = 0  # Actual sum of squares
    
    for num in arr:
        actSum += num
        act2Sum += num * num
    
    xMinusY = optSum - actSum
    x2MinusY2 = opt2Sum - act2Sum
    xPlusY = x2MinusY2 // xMinusY
    
    x = (xPlusY + xMinusY) // 2
    y = xPlusY - x
    
    return [y, x]

"""
TIME COMPLEXITY: O(N), where N is the size of the array.
SPACE COMPLEXITY: O(1).
"""

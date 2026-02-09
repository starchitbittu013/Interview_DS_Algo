"""
QUESTION:-
Union of two arrays can be defined as the common and distinct elements in the two arrays.
Given two sorted arrays of size n and m respectively, find their union.


Example 1:

Input:
n = 5, arr1[] = {1, 2, 3, 4, 5}
m = 3, arr2 [] = {1, 2, 3}
Output: 1 2 3 4 5
Explanation: Distinct elements including
both the arrays are: 1 2 3 4 5.


Example 2:

Input:
n = 5, arr1[] = {2, 2, 3, 4, 5}
m = 5, arr2[] = {1, 1, 2, 3, 4}
Output: 1 2 3 4 5
Explanation: Distinct elements including
both the arrays are: 1 2 3 4 5.
"""

"""
APPROACH:-
-> Take two pointer i and j where i is for arr1 and j is for arr2 and traverse
-> While travsersing 3 cases arises
    -> arr1[ i ] == arr2[ j ]
        Here we found a common element, so insert only one element in the union.
        Let's insert arr[i] in union and whenever we insert element we increment pointer while pointer is not equal to the inserted element
    -> arr1[i]<arr2[j]
        Here insert arr[i]
    -> arr1[i]>arr2[j]
        Here insert arr2[j]
-> Now check if elements of any array is left to traverse then traverse that array
"""

# CODE:-
from typing import List

def findUnion(arr1: List[int], arr2: List[int], n: int, m: int) -> List[int]:
    i = 0  # i to keep track in arr1
    j = 0  # j to keep track in arr2
    ans = []

    while i < n and j < m:

        if arr1[i] < arr2[j]:
            ans.append(arr1[i])
            i += 1
            while i < n and arr1[i] == arr1[i - 1]:
                i += 1
        elif arr2[j] < arr1[i]:
            ans.append(arr2[j])
            j += 1
            while j < m and arr2[j] == arr2[j - 1]:
                j += 1
        # means arr1[i] = arr2[j] in that case we can insert anyone
        else:
            ans.append(arr1[i])
            i += 1
            j += 1
            while i < n and arr1[i] == arr1[i - 1]:
                i += 1
            while j < m and arr2[j] == arr2[j - 1]:
                j += 1

    while i < n:
        ans.append(arr1[i])
        i += 1
        while i < n and arr1[i] == arr1[i - 1]:
            i += 1
    while j < m:
        ans.append(arr2[j])
        j += 1
        while j < m and arr2[j] == arr2[j - 1]:
            j += 1

    return ans

# TIME COMPLEXITY = O(N+M)
# SPACE COMPLEXITY = O(1)

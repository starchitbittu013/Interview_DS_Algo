"""
QUESTION:
Given an array 'A' consisting of 'N' integers and an integer 'B', find the number of subarrays of array 'A' whose bitwise XOR of all elements is equal to 'B'.

Example:
Input: 'N' = 4, 'B' = 2
'A' = [1, 2, 3, 2]
Output: 3
Explanation: Subarrays have bitwise xor equal to '2' are: [1, 2, 3, 2], [2], [2].
"""
from typing import List

def subarraysWithSumK(a: List[int], b: int) -> int:
    pref_xr = 0
    ans = 0
    mp = {}
    
    for i in range(len(a)):
        pref_xr = pref_xr ^ a[i]
        
        if pref_xr == b:
            ans += 1
        
        if pref_xr ^ b in mp:
            ans += mp[pref_xr ^ b]
        
        mp[pref_xr] = mp.get(pref_xr, 0) + 1
    
    return ans

"""
TIME COMPLEXITY: O(n), where n is the size of the input array a.
SPACE COMPLEXITY: O(n), as we are using a hashmap to store the prefix XOR values and their corresponding counts.
"""

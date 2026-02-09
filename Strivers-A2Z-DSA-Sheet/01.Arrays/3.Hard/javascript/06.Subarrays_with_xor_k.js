/*
QUESTION:
Given an array 'A' consisting of 'N' integers and an integer 'B', find the number of subarrays of array 'A' whose bitwise XOR of all elements is equal to 'B'.

Example:
Input: 'N' = 4, 'B' = 2
'A' = [1, 2, 3, 2]
Output: 3
Explanation: Subarrays have bitwise xor equal to '2' are: [1, 2, 3, 2], [2], [2].
*/

function subarraysWithSumK(a, b) {
    let pref_xr = 0;
    let ans = 0;
    const mp = new Map();
    
    for (let i = 0; i < a.length; i++) {
        pref_xr = pref_xr ^ a[i];
        
        if (pref_xr === b)
            ans++;
        
        if (mp.has(pref_xr ^ b)) {
            ans += mp.get(pref_xr ^ b);
        }
        
        mp.set(pref_xr, (mp.get(pref_xr) || 0) + 1);
    }
    
    return ans;
}

/*
TIME COMPLEXITY: O(n), where n is the size of the input array a.
SPACE COMPLEXITY: O(n), as we are using a hashmap to store the prefix XOR values and their corresponding counts.
*/

"""
QUESTION:
Given two strings 's' and 't' of lengths 'm' and 'n' respectively, find the minimum window substring of 's' that contains all the characters of 't' (including duplicates). If there is no such substring, return an empty string.

EXAMPLE:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string 't'.

APPROACH:
We can solve this problem using a sliding window approach.

1. Create a function, minWindow, that takes 's' and 't' as parameters.
   - Initialize a dictionary, mp, to store the frequency of characters in 't'.
   - Iterate over 't' and update the frequencies in the map.
   - Initialize 'count' to the number of unique characters in 't'.
   - Initialize 'start' to 0 and 'minlen' to float('inf').
   - Initialize 'substrBegin' to 0, which represents the starting index of the minimum window substring.
   - Iterate over 's' from left to right:
     - Decrement the frequency of the current character in the map.
     - If the frequency becomes 0, decrement 'count'.
     - Check if 'count' becomes 0, indicating that we have found a window containing all characters of 't'.
       - If the current window length is smaller than 'minlen', update 'minlen' and 'substrBegin' to the current window length and starting index respectively.
       - Move the 'start' pointer to the right, increment the frequency of the character at 'start' in the map, and increment 'count' if the frequency becomes greater than 0.
   - Return the minimum window substring by slicing 's' with 'substrBegin' and 'minlen'.
   - If 'minlen' is still float('inf'), return an empty string.

COMPLEXITY ANALYSIS:
- Time complexity: O(m + n), where m is the length of 's' and n is the length of 't'. We iterate over both strings once using the sliding window approach.
- Space complexity: O(n), as the space used by the dictionary is proportional to the number of unique characters in 't', which can be at most 'n'.
"""

def minWindow(s: str, t: str) -> str:
    mp = {}

    for char in t:
        mp[char] = mp.get(char, 0) + 1

    count = len(mp)
    start = 0
    minlen = float('inf')
    substrBegin = 0

    for i in range(len(s)):
        if s[i] in mp:
            mp[s[i]] -= 1

            if mp[s[i]] == 0:
                count -= 1

        while count == 0:
            if i - start + 1 < minlen:
                substrBegin = start
                minlen = i - start + 1

            if s[start] in mp:
                mp[s[start]] += 1

                if mp[s[start]] > 0:
                    count += 1

            start += 1

    return "" if minlen == float('inf') else s[substrBegin:substrBegin + minlen]


"""
===================================================================================
QUESTION: Minimum Window Subsequence (LeetCode 727 - Premium)
===================================================================================

Given strings s1 and s2, return the minimum contiguous substring part of s1,
such that s2 is a subsequence of the part.

If there is no such window in s1 that covers all characters in s2, return the
empty string "". If there are multiple such minimum-length windows, return the
one with the left-most starting index.

A subsequence is a sequence that can be derived from another sequence by deleting
some or no elements without changing the order of the remaining elements.

Example 1:
Input: s1 = "abcdebdde", s2 = "bde"
Output: "bcde"
Explanation:
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of s2 in the window must occur
in order.

Example 2:
Input: s1 = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", s2 = "u"
Output: ""

Constraints:
- 1 <= s1.length <= 2 * 10^4
- 1 <= s2.length <= 100
- s1 and s2 consist of lowercase English letters.

===================================================================================
"""


"""
===================================================================================
BRUTE FORCE APPROACH
===================================================================================

APPROACH EXPLANATION:
- We try every possible starting position in s1.
- For each starting position, we check if s2 is a subsequence starting from there.
- To check if s2 is a subsequence, we use two pointers:
  - One pointer (j) for s2, starting at 0.
  - One pointer (i) for s1, starting at current position.
  - Move through s1, and whenever s1[i] matches s2[j], increment j.
  - If j reaches len(s2), we found s2 as a subsequence.
- Track the ending position when s2 is fully matched.
- Calculate window length and update minimum if smaller.
- Return the minimum window found.

TIME COMPLEXITY: O(n * m) - For each of n starting positions, we may traverse up to m characters.
                 Where n = length of s1, m = length of s2.
SPACE COMPLEXITY: O(1) - Only constant extra space used.
"""


def min_window_brute(s1: str, s2: str) -> str:
    n = len(s1)
    m = len(s2)

    min_len = float('inf')
    start_index = -1

    # Try each starting position in s1
    for start in range(n - m + 1):
        # Only start when first character matches
        if s1[start] != s2[0]:
            continue

        j = 0  # Pointer for s2
        end = start

        # Find if s2 is a subsequence starting from 'start'
        while end < n and j < m:
            if s1[end] == s2[j]:
                j += 1
            end += 1

        # If all characters of s2 were found
        if j == m:
            window_len = end - start
            if window_len < min_len:
                min_len = window_len
                start_index = start

    return "" if start_index == -1 else s1[start_index:start_index + min_len]


"""
===================================================================================
OPTIMAL APPROACH (Two Pointer - Forward and Backward)
===================================================================================

APPROACH EXPLANATION:
- Key Insight: After finding s2 as a subsequence ending at position 'end',
  we can optimize by going BACKWARD from 'end' to find the smallest window.

- Algorithm:
  1. Use a forward pass to find s2 as a subsequence in s1.
     - Start with j = 0 (pointer for s2).
     - Move through s1 with pointer i.
     - When s1[i] == s2[j], increment j.
     - When j == m, we've found all characters of s2.

  2. Use a backward pass to minimize the window.
     - Start from the end position and go backward.
     - Find each character of s2 in reverse order.
     - This gives us the rightmost valid starting position for this ending.

  3. Calculate window length and update minimum if smaller.

  4. Continue searching from the position after the new start.

- Why backward pass helps:
  - Forward pass finds the first occurrence of each character.
  - But there might be a later occurrence of earlier characters that gives smaller window.
  - Backward pass finds the optimal (rightmost) start for given end.

TIME COMPLEXITY: O(n * m) - In worst case, we might traverse s2 multiple times.
SPACE COMPLEXITY: O(1) - Only constant extra space used.
"""


def min_window_optimal(s1: str, s2: str) -> str:
    n = len(s1)
    m = len(s2)

    min_len = float('inf')
    start_index = -1

    i = 0  # Pointer for s1

    while i < n:
        j = 0  # Pointer for s2

        # Forward pass: find s2 as subsequence starting from i
        while i < n and j < m:
            if s1[i] == s2[j]:
                j += 1
            i += 1

        # If s2 was not found as subsequence
        if j < m:
            break

        # 'i' is now one past the end of the window
        end = i - 1

        # Backward pass: minimize the window
        # Start from end and find s2 characters in reverse
        j = m - 1
        while j >= 0:
            if s1[end] == s2[j]:
                j -= 1
            end -= 1

        # 'end' is now one before the start of optimal window
        start = end + 1

        # Calculate window length
        window_len = i - start

        if window_len < min_len:
            min_len = window_len
            start_index = start

        # Move i to start + 1 for next iteration
        # This ensures we don't miss any potential smaller windows
        i = start + 1

    return "" if start_index == -1 else s1[start_index:start_index + min_len]


"""
===================================================================================
EXAMPLE WALKTHROUGH:

For s1 = "abcdebdde", s2 = "bde":

Initial: i = 0, min_len = inf, start_index = -1

--- First Forward Pass ---
i=0 (a): j=0, s2[0]='b', no match
i=1 (b): j=0, s2[0]='b', MATCH! j=1
i=2 (c): j=1, s2[1]='d', no match
i=3 (d): j=1, s2[1]='d', MATCH! j=2
i=4 (e): j=2, s2[2]='e', MATCH! j=3 ✓ ALL MATCHED!

i = 5, j = 3 (complete)
end = 4 (i - 1)

--- First Backward Pass ---
Start from end=4, find s2="bde" in reverse
end=4 (e): j=2, s2[2]='e', MATCH! j=1, end=3
end=3 (d): j=1, s2[1]='d', MATCH! j=0, end=2
end=2 (c): j=0, s2[0]='b', no match, end=1
end=1 (b): j=0, s2[0]='b', MATCH! j=-1, end=0

start = end + 1 = 1
Window: s1[1:5] = "bcde", length = 5 - 1 = 4
min_len = 4, start_index = 1

i = start + 1 = 2

--- Second Forward Pass ---
i=2 (c): j=0, s2[0]='b', no match
i=3 (d): j=0, s2[0]='b', no match
i=4 (e): j=0, s2[0]='b', no match
i=5 (b): j=0, s2[0]='b', MATCH! j=1
i=6 (d): j=1, s2[1]='d', MATCH! j=2
i=7 (d): j=2, s2[2]='e', no match
i=8 (e): j=2, s2[2]='e', MATCH! j=3 ✓ ALL MATCHED!

i = 9, j = 3 (complete)
end = 8 (i - 1)

--- Second Backward Pass ---
Start from end=8, find s2="bde" in reverse
end=8 (e): j=2, s2[2]='e', MATCH! j=1, end=7
end=7 (d): j=1, s2[1]='d', MATCH! j=0, end=6
end=6 (d): j=0, s2[0]='b', no match, end=5
end=5 (b): j=0, s2[0]='b', MATCH! j=-1, end=4

start = end + 1 = 5
Window: s1[5:9] = "bdde", length = 9 - 5 = 4
4 is NOT < min_len (4), don't update

i = start + 1 = 6

--- Third Forward Pass ---
i=6 (d): j=0, s2[0]='b', no match
i=7 (d): j=0, s2[0]='b', no match
i=8 (e): j=0, s2[0]='b', no match
i=9: out of bounds, j < m, break

End of loop.

Answer: s1[1:5] = "bcde"
===================================================================================
"""


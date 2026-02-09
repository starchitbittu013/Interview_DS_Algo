"""QUESTION:
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

APPROACH:
To find the sum of the minimums of all subarrays, we can use the concept of previous smaller and next smaller elements for each element in the array.
1. Define two helper functions:
   - `prev_smaller(arr)`: Returns an array that contains the index of the previous smaller element for each element in `arr`. If no smaller element exists, the index is set to -1.
   - `next_smaller(arr)`: Returns an array that contains the index of the next smaller element for each element in `arr`. If no smaller element exists, the index is set to the length of the array.
2. Initialize a variable `ans` to 0 to store the final sum.
3. Iterate over each element `arr[i]` in the array:
   a. Calculate the number of subarrays in which `arr[i]` is the minimum element.
      - The number of subarrays with `arr[i]` as the minimum element on the left side is `i - prevS[i]`.
      - The number of subarrays with `arr[i]` as the minimum element on the right side is `nextS[i] - i`.
   b. Add `(leftElements * rightElements * arr[i]) % mod` to `ans`, where `mod` is `1e9 + 7`.
4. Return the final value of `ans` as the sum of minimums of all subarrays modulo `1e9 + 7`.

CODE:"""

from typing import List


def prev_smaller(arr: List[int]) -> List[int]:
    st = []
    ans = [-1] * len(arr)
    for i in range(len(arr)):
        while st and arr[st[-1]] > arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


def next_smaller(arr: List[int]) -> List[int]:
    st = []
    ans = [len(arr)] * len(arr)
    for i in range(len(arr) - 1, -1, -1):
        while st and arr[st[-1]] >= arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


def sum_subarray_mins(arr: List[int]) -> int:
    prev_s = prev_smaller(arr)
    next_s = next_smaller(arr)
    ans = 0
    mod = int(1e9 + 7)

    for i in range(len(arr)):
        left_elements = i - prev_s[i]
        right_elements = next_s[i] - i
        # this formula is arrived by mathematical calculation
        ans += ((left_elements % mod) * (right_elements % mod) * (arr[i] % mod)) % mod

    return ans % mod


"""
COMPLEXITY ANALYSIS:
- The time complexity of this approach is O(N), where N is the number of elements in the array `arr`. We iterate through the array twice to calculate the previous smaller and next smaller elements.
- The space complexity is O(N) as we use additional space to store the previous smaller and next smaller elements.
"""

if __name__ == "__main__":
    # Test example
    arr = [3, 1, 2, 4]
    print(f"Input: arr = {arr}")
    print(f"Output: {sum_subarray_mins(arr)}")

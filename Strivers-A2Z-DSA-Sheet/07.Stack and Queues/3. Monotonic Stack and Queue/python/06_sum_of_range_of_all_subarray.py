"""QUESTION:
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of nums.

APPROACH:
To find the sum of all subarray ranges, we can use the concept of previous smaller, next smaller, previous greater, and next greater elements for each element in the array.
1. Define four helper functions:
   - `prev_smaller(arr)`: Returns an array that contains the index of the previous smaller element for each element in `arr`. If no smaller element exists, the index is set to -1.
   - `next_smaller(arr)`: Returns an array that contains the index of the next smaller element for each element in `arr`. If no smaller element exists, the index is set to the length of the array.
   - `prev_greater(arr)`: Returns an array that contains the index of the previous greater element for each element in `arr`. If no greater element exists, the index is set to -1.
   - `next_greater(arr)`: Returns an array that contains the index of the next greater element for each element in `arr`. If no greater element exists, the index is set to the length of the array.
2. Initialize a variable `ans` to 0 to store the final sum.
3. Iterate over each element `arr[i]` in the array:
   a. Calculate the number of subarrays where `arr[i]` is the minimum element:
      - The number of subarrays with `arr[i]` as the minimum element on the left side is `i - prevS[i]`.
      - The number of subarrays with `arr[i]` as the minimum element on the right side is `nextS[i] - i`.
   b. Calculate the number of subarrays where `arr[i]` is the maximum element:
      - The number of subarrays with `arr[i]` as the maximum element on the left side is `i - prevG[i]`.
      - The number of subarrays with `arr[i]` as the maximum element on the right side is `nextG[i] - i`.
   c. Update `ans` by adding `(maxleftElements * maxrightElements * arr[i]) - (minleftElements * minrightElements * arr[i])`.
4. Return the final value of `ans` as the sum of all subarray ranges.

CODE:"""

from typing import List


# NOTE:- The code could be more concise if done in double traversal but I find this more intuitive
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


def prev_greater(arr: List[int]) -> List[int]:
    st = []
    ans = [-1] * len(arr)
    for i in range(len(arr)):
        while st and arr[st[-1]] < arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


def next_greater(arr: List[int]) -> List[int]:
    st = []
    ans = [len(arr)] * len(arr)
    for i in range(len(arr) - 1, -1, -1):
        while st and arr[st[-1]] <= arr[i]:
            st.pop()
        if st:
            ans[i] = st[-1]
        st.append(i)
    return ans


def sub_array_ranges(arr: List[int]) -> int:
    prev_s = prev_smaller(arr)
    next_s = next_smaller(arr)
    prev_g = prev_greater(arr)
    next_g = next_greater(arr)
    ans = 0

    for i in range(len(arr)):
        min_left_elements = i - prev_s[i]
        min_right_elements = next_s[i] - i
        max_left_elements = i - prev_g[i]
        max_right_elements = next_g[i] - i
        ans += (max_left_elements * max_right_elements * arr[i]) - (min_left_elements * min_right_elements * arr[i])
    return ans


"""
COMPLEXITY ANALYSIS:
- The time complexity of this approach is O(N), where N is the number of elements in the array `arr`. We iterate through the array multiple times to calculate the previous smaller, next smaller, previous greater, and next greater elements.
- The space complexity is O(N) as we use additional space to store the previous smaller, next smaller, previous greater, and next greater elements.
"""

if __name__ == "__main__":
    # Test example
    arr = [1, 2, 3]
    print(f"Input: arr = {arr}")
    print(f"Output: {sub_array_ranges(arr)}")

"""
Question:
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Approach:
- We can solve this problem using a stack and a hashmap.
- First, we iterate through the `nums2` array from right to left.
- For each element, we pop elements from the stack that are smaller than or equal to the current element and store the next greater element for each popped element in the hashmap.
- Finally, we iterate through the `nums1` array and retrieve the next greater element from the hashmap if it exists, otherwise assign -1.

Code:
"""

from typing import List


def next_g_stack(nums: List[int], mp: dict) -> None:
    st = []
    for i in range(len(nums) - 1, -1, -1):
        while st and st[-1] <= nums[i]:
            st.pop()
        if st:
            mp[nums[i]] = st[-1]
        st.append(nums[i])


def next_greater_element(nums1: List[int], nums2: List[int]) -> List[int]:
    mp = {}
    next_g_stack(nums2, mp)

    ans = [-1] * len(nums1)

    for i in range(len(nums1)):
        if nums1[i] in mp:
            ans[i] = mp[nums1[i]]
    return ans


"""
Complexity Analysis:
- The time complexity of the `next_greater_element` function is O(N + M), where N is the size of `nums1` and M is the size of `nums2`.
- The `next_g_stack` function has a time complexity of O(M), where M is the size of `nums2`.
- The space complexity is O(N), where N is the size of `nums1`, to store the result in the `ans` vector and the `mp` hashmap.
"""

if __name__ == "__main__":
    # Test example
    nums1 = [4, 1, 2]
    nums2 = [1, 3, 4, 2]
    print(f"Input: nums1 = {nums1}, nums2 = {nums2}")
    print(f"Output: {next_greater_element(nums1, nums2)}")

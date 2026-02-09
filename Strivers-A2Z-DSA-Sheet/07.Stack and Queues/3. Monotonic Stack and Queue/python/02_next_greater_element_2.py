"""QUESTION:
Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.

The next greater number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

Example:

Input: `nums = [1,2,1]`
Output: `[2,-1,2]`
Explanation: The first 1's next greater number is 2. The number 2 doesn't have a next greater number. The second 1's next greater number needs to be searched circularly, which is also 2.

APPROACH:
To find the next greater number for each element in a circular array, we can utilize a stack. 
We iterate through the array in reverse order to handle the circular nature of the array. 
For each element, we compare it with the elements in the stack. 
If an element in the stack is smaller than or equal to the current element, we pop it from the stack since it cannot be the next greater number.
The top of the stack at each iteration will hold the next greater element for the corresponding element in the array.

CODE:"""

from typing import List


# NOTE:- we could also implement this via two for loops from n-1 to 0, instead of a single loop of 2*n to 0; cause the complexity remains the same

def next_greater_elements(nums: List[int]) -> List[int]:
    ans = [-1] * len(nums)
    st = []

    for i in range(2 * len(nums) - 1, -1, -1):
        while st and nums[st[-1]] <= nums[i % len(nums)]:
            st.pop()
        
        if st:
            ans[i % len(nums)] = nums[st[-1]]
        
        st.append(i % len(nums))

    return ans


"""
COMPLEXITY ANALYSIS:
- The time complexity of this approach is O(N), where N is the size of the input array `nums`. We iterate through the array twice: once to find the next greater element in the first pass and once to handle the circular nature of the array in the second pass.
- The space complexity is O(N) as we use a stack to store the indices of elements.
"""

if __name__ == "__main__":
    # Test example
    nums = [1, 2, 1]
    print(f"Input: nums = {nums}")
    print(f"Output: {next_greater_elements(nums)}")

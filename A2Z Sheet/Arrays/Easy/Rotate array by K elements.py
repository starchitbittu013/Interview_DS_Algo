# Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

from typing import List
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums_size = len(nums)
        k = k % nums_size
        
        obj = Solution()
        obj.reverse_list(nums, 0, nums_size - 1)
        obj.reverse_list(nums, 0, k -1)
        obj.reverse_list(nums, k, nums_size - 1)

    def reverse_list(self, nums: List[int], start: int, end: int) -> None:
        while start < end:
            temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start += 1
            end -= 1


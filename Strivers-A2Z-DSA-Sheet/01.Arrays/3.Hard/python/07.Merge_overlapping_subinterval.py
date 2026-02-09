"""
QUESTION:
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
"""
from typing import List

def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort()
    ans = []
    ans.append(intervals[0])
    
    for i in range(1, len(intervals)):
        if ans[-1][1] >= intervals[i][0]:
            ans[-1][1] = max(ans[-1][1], intervals[i][1])
        else:
            ans.append(intervals[i])
    
    return ans

"""
TIME COMPLEXITY: O(nlogn), where n is the number of intervals in the input.
SPACE COMPLEXITY: O(n), where n is the number of intervals in the input.
"""

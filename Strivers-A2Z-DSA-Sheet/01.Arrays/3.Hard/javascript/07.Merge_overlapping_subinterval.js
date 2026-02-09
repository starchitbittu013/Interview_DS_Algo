/*
QUESTION:
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [];
    ans.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        if (ans[ans.length - 1][1] >= intervals[i][0]) {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
        }
        else {
            ans.push(intervals[i]);
        }
    }
    
    return ans;
}

/*
TIME COMPLEXITY: O(nlogn), where n is the number of intervals in the input.
SPACE COMPLEXITY: O(n), where n is the number of intervals in the input.
*/

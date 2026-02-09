// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


// Approach:
// The steps are as follows:

// First, we will group the closer intervals by sorting the given array of intervals(if it is not already sorted).
// After that, we will start traversing the array using a loop(say i) and insert the first element into our 
// answer list(as the answer list is empty).
// Now, while traversing we will face two different cases:

// Case 1: If the current interval can be merged with the last inserted interval of the answer list:
// In this case, we will update the end of the last inserted interval with the maximum(current interval’s end, 
// last inserted interval’s end) and continue moving afterward. 

// Case 2: If the current interval cannot be merged with the last inserted interval of the answer list:
// In this case, we will insert the current interval in the answer array as it is. And after this insertion, 
// the last inserted interval of the answer list will obviously be updated to the current interval.
// Thus the answer list will be updated with the merged intervals and finally, we will return the answer list.

// Intuition: Since we have sorted the intervals, the intervals which will be merging are bound to be adjacent. 
// We kept on merging simultaneously as we were traversing through the array and when the element was non-overlapping we simply inserted the element in our answer list.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    let n = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < n; i++) {
        if(result.length === 0 || intervals[i][0] > result[result.length - 1][1]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        }
    }
    return result;
};

// Time Complexity: O(N*logN) + O(N), where N = the size of the given array.
// Reason: Sorting the given array takes  O(N*logN) time complexity. Now, after that, we are just using a single loop that runs for N times. So, the time complexity will be O(N).

// Space Complexity: O(N), as we are using an answer list to store the merged intervals. Except for the answer array, we are not using any extra space.












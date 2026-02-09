/*
QUESTION:
Given an array of integers nums and a sliding window of size k, we need to find the maximum element in each sliding window as it moves from left to right.

APPROACH:
To solve this problem, we can use a deque (double-ended queue) to store the indices of elements in the current sliding window.
1. We iterate through the first k elements and keep track of the maximum element by maintaining the following property:
   - The deque stores the indices of elements in non-increasing order of their corresponding values in the nums array.
   - If the current element is greater than or equal to the element at the back of the deque, we remove elements from the back until this condition is satisfied.
   - This ensures that the front element of the deque is always the maximum element in the sliding window.
2. After processing the first k elements, we start from the (k+1)th element and continue the following steps:
   - If the index at the front of the deque is less than or equal to i-k, it means the maximum element in the previous sliding window is no longer valid. So, we remove it from the deque.
   - Similar to step 1, we remove elements from the back of the deque until the current element is greater than or equal to the element at the back.
   - Add the index of the current element to the deque.
   - Add the maximum element (front of the deque) to the result for the current sliding window.
3. Repeat step 2 until we process all elements in the nums array.

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]

CODE:
*/

function maxSlidingWindow(nums, k) {
    const dq = []; // deque storing indices
    const ans = [];
    
    for (let i = 0; i < k; i++) {
        while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
            dq.pop();
        }
        dq.push(i);
    }
    
    ans.push(nums[dq[0]]);
    
    for (let i = k; i < nums.length; i++) {
        if (dq[0] <= i - k) {
            dq.shift();
        }
        
        while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
            dq.pop();
        }
        
        dq.push(i);
        ans.push(nums[dq[0]]);
    }
    
    return ans;
}

/*
COMPLEXITY ANALYSIS:
- Let n be the number of elements in the nums array.
- The time complexity of the solution is O(n) because we iterate through each element once.
- The space complexity is O(k) because the deque stores at most k elements at any given time.
*/

// Export for module usage
module.exports = { maxSlidingWindow };

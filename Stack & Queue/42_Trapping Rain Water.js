// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9


// using 2 array to store leftMax and rightMax

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let leftMax = [];
    let rightMax = [];
    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];
    let trap = 0;

    for(let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    for(let i = n - 2; i >=0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    for(let i = 0; i < n; i++) {
        trap += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return trap;
}

// TC: O(n)
// SC: O(n)


// using constant space

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let leftMax = 0;
    let rightMax = 0;
    let trap = 0;

    let left = 0;
    let right = n - 1;

    while(left < right) {
        if(height[left] <= height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            trap += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            trap += rightMax - height[right];
            right--;
        }
    }
    return trap;
}

// TC: O(n)
// SC: O(1)

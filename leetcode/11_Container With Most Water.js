// 11. Container With Most Water

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let i = 0;
    const n = height.length;
    let j = n - 1; 

    while (i < j) {
        const width = j - i;
        maxArea = Math.max(maxArea, (Math.min(height[i], height[j]) * width));
        console.log(`area: ${maxArea}`);

        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,1]));
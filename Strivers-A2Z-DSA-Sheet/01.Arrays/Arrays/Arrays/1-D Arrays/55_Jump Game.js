// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    let n = nums.length;

    let maxReach = 0;

    for(let i = 0; i < n; i++) {
        if(i > maxReach) return false;

        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
};

// Greedy approach 


/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    let n = nums.length;

    let goal = n - 1;

    for(let i = n - 1; i >= 0; i--) {
        if(nums[i] + i >= goal) {
            goal = i;
        }        
    }
    return goal === 0;
};

// DP Approach 
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //jump[i] is the jumps required to reach from first element of aray to i'th position
    const jump = new Array(nums.length).fill(Infinity);
    jump[0] = 0; //Since we are already at index 0 initially

    //Outer loop to calculate & store minimum jumps to  reach position i
    for( let i = 1; i < nums.length; i++) {
        /** Inner loop will run from 0'th index to i-1 index, We need to figure out
        * if we can jump directly from j'th position to i'th position, 
        * if we can, then minimum jump to reach index i will be minimum of jump[i], jump[j]+1
        * Here "+1" in "jump[j] + 1" is for one more jump from j'th index
        **/
        for (let j = 0; j < i; j++) {
            if(nums[j] >= i-j) {
               jump[i] = Math.min(jump[i], jump[j]+1);
               }
        }
    }
    return jump[nums.length-1];
}
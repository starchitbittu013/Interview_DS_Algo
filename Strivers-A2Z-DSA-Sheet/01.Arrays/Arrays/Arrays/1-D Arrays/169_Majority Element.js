// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let majority = Math.floor(n / 2);

    let frequencyMap = new Map();

    for(let i = 0; i < n; i++) {
        frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);       
    }

    for(const [key, value] of frequencyMap) {
        if(value > majority) return key;
    }            
};

console.log(majorityElement([2,2,1,1,1,2,2]));

// TC: O(n)
// SC: O(n)

/*

The Boyer-Moore Voting Algorithm solves this problem by treating it like a voting process. 
The algorithm maintains a counter for the majority candidate, and for each element in the array, 
the counter is either increased, if the element is the current candidate, or decreased if it's not. 
This ensures that if a majority element exists, it will be the final candidate when we traverse the whole list.

we start by initializing the counter and the candidate. Then we iterate over the list. 
For each number, we check if the counter is zero, and if so, we set the current number as the new candidate. 
Then we increment the counter if the current number is the same as our candidate, and decrement it otherwise. 
Finally, we return the candidate which will be the majority element as per the problem's constraints.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    // Boyer-Moore Voting Algorithm
    
    let count = 0, candidate = 0;
    
    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    
    return candidate;
};

// TC: O(n)
// SC: O(1)


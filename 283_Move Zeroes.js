// 283. Move Zeroes
// Given an integer array nums, move all 0's
// to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// const moveZeros = function(nums) {
//     let j = 0;
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//         if (nums[j] === 0) {
//             console.log(nums);
//             nums.splice(j, 1);            
//             nums.push(0);
//             console.log(`nums: ${nums}`);
//         } else {
//             j++;
//         }        
//     }
//     console.log(nums);
// };

const moveZeros = function(nums) {
    let gap = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        console.log(i);
        if (nums[i] === 0) {
            gap++;
        } else {
            [nums[i - gap], nums[i]] = [nums[i], nums[i - gap]]; 
            console.log(nums);
        }        
    }
    console.log(nums);
};

console.log(moveZeros([0,1,0,3,12]));
//console.log(moveZeros([0,0,1]));


// TC: O(n)
// SC: O(1)
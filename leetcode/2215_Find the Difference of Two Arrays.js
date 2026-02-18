// 2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// var findDifference = function(nums1, nums2) {
//     // Solving by brute force method first
//     let answer = new Array(2);

//     nums1 = [...new Set(nums1)];
//     nums2 = [...new Set(nums2)];

//     let nonMatching1 = [];
//     let nonMatching2 = [];

//     for (let i = 0; i < nums1.length; i++) {
//         let foundMatch = false;
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] === nums2[j]) {
//                 foundMatch = true;
//                 break;
//             }
//         }
//         if (!foundMatch) {
//             nonMatching1.push(nums1[i]);
//         }
//     }

//     for (let i = 0; i < nums2.length; i++) {
//         let foundMatch = false;
//         for (let j = 0; j < nums1.length; j++) {
//             if (nums2[i] === nums1[j]) {
//                 foundMatch = true;
//                 break;
//             }
//         }
//         if (!foundMatch) {
//             nonMatching2.push(nums2[i]);
//         }
//     }

//     answer[0] = nonMatching1;
//     answer[1] = nonMatching2;

//     return answer;
// };

var findDifference = function(nums1, nums2) {
   let set1 = new Set(nums1);
   let set2 = new Set(nums2);

   let nonMatching1 = [];
   let nonMatching2 = [];

   for (const num of set1) {
    if (!set2.has(num)) {
        nonMatching1.push(num);
    }    
   }

   for (const num of set2) {
    if (!set1.has(num)) {
        nonMatching2.push(num);
    }    
   }
   return [nonMatching1, nonMatching2];
};

console.log(findDifference([1,2,3], [2,4,6]));
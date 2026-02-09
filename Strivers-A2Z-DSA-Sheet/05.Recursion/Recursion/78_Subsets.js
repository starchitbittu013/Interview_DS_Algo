// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];

    function solve(current, index) {
        console.log(current, index);
        if(index === nums.length) {
            result.push([...current]);
            return;
        }

        current.push(nums[index]);
        solve(current, index + 1);

        console.log("Pop");
        console.log(current, index);

        current.pop();
        solve(current, index + 1);
    }

    solve([], 0);
    
    return result;
};

// [] 0
// [ 1 ] 1
// [ 1, 2 ] 2
// [ 1, 2, 3 ] 3
// Pop
// [ 1, 2, 3 ] 2
// [ 1, 2 ] 3
// Pop
// [ 1, 2 ] 1
// [ 1 ] 2
// [ 1, 3 ] 3
// Pop
// [ 1, 3 ] 2
// [ 1 ] 3
// Pop
// [ 1 ] 0
// [] 1
// [ 2 ] 2
// [ 2, 3 ] 3
// Pop
// [ 2, 3 ] 2
// [ 2 ] 3
// Pop
// [ 2 ] 1
// [] 2
// [ 3 ] 3
// Pop
// [ 3 ] 2
// [] 3


// Problem Statement: Given a string, find all the possible subsequences of the string.

// Examples:

// Example 1:
// Input: str = "abc"
// Output: a ab abc ac b bc c
// Explanation: Printing all the 7 subsequence for the string "abc".


function generateSubsequences(str) {
    let result = [];

    function recurse(index, current) {
        // Base case: if we've reached the end of the string
        if (index === str.length) {
            if (current !== "") result.push(current);
            return;
        }

        // Include current character
        recurse(index + 1, current + str[index]);

        // Exclude current character
        recurse(index + 1, current);
    }

    recurse(0, "");
    return result;
}

    //                          ""
    //                  /               \
    //               "a"                 ""
    //            /      \             /     \
    //        "ab"      "a"         "b"     ""
    //       /   \      / \         / \     / \
    //   "abc" "ab" "ac" "a"     "bc" "b" "c" ""

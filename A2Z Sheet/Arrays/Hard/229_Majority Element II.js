
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    // let extras = 0;
    let e1, e2;
    let c1 = 0, c2 = 0; 
    let result = [];


    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === e1) {
            c1++;
        } else if(nums[i] === e2) {
            c2++;
        } else if(c1 === 0) {
            e1 = nums[i];
            c1 = 1;
        } else if(c2 === 0) {
            e2 = nums[i];
            c2 = 1;
        }  else {
            c1--;
            c2--;
        }
    }

    // for(let i = 0; i < nums.length; i++) {
    //     if(c1 === 0) {
    //         e1 = nums[i];
    //         c1 = 1;
    //     } else if(c2 === 0) {
    //         e2 = nums[i];
    //         c2 = 1;
    //     } else if(nums[i] === e1) {
    //         c1++;
    //     } else if(nums[i] === e2) {
    //         c2++;
    //     } else {
    //         c1--;
    //         c2--;
    //     }

    //     // if(extras > 0) {
    //     //     if(c1 >= 0) {
    //     //         c1 = c1 - extras;
    //     //         if(c1 < 0) c1 = 0;
    //     //     }

    //     //     if(c2 >= 0) {
    //     //         c2 = c2 - extras;
    //     //         if(c2 < 0) c2 = 0;
    //     //     }
    //     // }
    // }
    let count1 = 0;
    let count2 = 0;

    for (let num of nums) {
        if (num === e1) count1++;
        else if (num === e2) count2++;
    }

    if (count1 > Math.floor(n / 3)) result.push(e1);
    if (count2 > Math.floor(n / 3)) result.push(e2);

    return result;
};



function majorityElement(v) {
    let n = v.length; // size of the array

    let cnt1 = 0, cnt2 = 0; // counts
    let el1 = -Infinity; // element 1
    let el2 = -Infinity; // element 2

    // applying the Extended Boyer Moore's Voting Algorithm:
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== v[i]) {
            cnt1 = 1;
            el1 = v[i];
        }
        else if (cnt2 === 0 && el1 !== v[i]) {
            cnt2 = 1;
            el2 = v[i];
        }
        else if (v[i] === el1) cnt1++;
        else if (v[i] === el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

    let ls = []; // list of answers

    // Manually check if the stored elements in
    // el1 and el2 are the majority elements:
    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (v[i] === el1) cnt1++;
        if (v[i] === el2) cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) ls.push(el1);
    if (cnt2 >= mini) ls.push(el2);

    // Uncomment the following line
    // if it is told to sort the answer array:
    // ls.sort(); // TC --> O(2*log2) ~ O(1);

    return ls;
}

let arr = [11, 33, 33, 11, 33, 11];
let ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));
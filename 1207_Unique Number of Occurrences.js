// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in 
// the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    let i = 0;
    while (i < arr.length) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
        i++;   
    }
    console.log(map);
    let mapValuesArray = [...map.values()];
    console.log(mapValuesArray);

    const lengthOfMapValuesArray = mapValuesArray.length;

    let mapValuesSet = [...new Set(mapValuesArray)];
    const lengthOfMapValuesSet = mapValuesSet.length

    if (lengthOfMapValuesArray === lengthOfMapValuesSet) {
        return true;
    } else {
        return false;
    }
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));


// More optimized solution below--

// var uniqueOccurrences = function(arr) {
//     const frequencySet = new Set();
//     const frequencyMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//     }

//     for (const frequency of frequencyMap.values()) {
//         if (frequencySet.has(frequency)) {
//             return false;
//         }
//         frequencySet.add(frequency);
//     }

//     return true;
// };



// TC: O(n)
// SC: O(m)
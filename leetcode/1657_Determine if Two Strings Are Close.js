// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();

    for(char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for(char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    console.log(map1);
    console.log(map2);
    
    set1 = [...map1.values()];
    set2 = [...map2.values()];

    console.log(set1);
    console.log(set2);

    set1.sort((a, b) => a - b);
    set2.sort((a, b) => a - b);

    console.log(set1);
    console.log(set2);

    arrayKeys1 = [...map1.keys()];
    arrayKeys2 = [...map2.keys()];

    arrayKeys1.sort();
    arrayKeys2.sort();

    console.log(arrayKeys1);
    console.log(arrayKeys2);

    if (JSON.stringify(set1) === JSON.stringify(set2) && JSON.stringify(arrayKeys1) === JSON.stringify(arrayKeys2)) {
        return true;
    } else return false;
};

console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));

// TC: O(nlog(n))
// SC: O(n)
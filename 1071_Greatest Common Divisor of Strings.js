/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    console.log(str1, str2);
    if(str1 + str2 !== str2 + str1) return "";
 
    if(str1 === str2) return str1;
 
    if(str1.length > str2.length) {
        return gcdOfStrings(str1.slice(str2.length), str2);
    } else {
        return gcdOfStrings(str2.slice(str1.length), str1);
    }
 };
 
 // Recursive Solution
 // Time Complexity: O(n) where is n is length of the longer string
 // Space Complexity: O(n) where is n is length of the longer string

 // In each recursive call, the function reduces the length of one of the strings by the length of the other string
 // until the strings become equal or empty. The maximum number of recursive calls is equal to the length of the
 // longer string, which is max(str1.length, str2.length).

// Therefore, the time complexity of the function can be expressed as O(max(str1.length, str2.length)).

// The space complexity of the function is determined by the recursion stack. Since the function is recursive,
// the space complexity depends on the maximum depth of the recursion, which is the same as the maximum number
// of recursive calls. As mentioned before, the maximum number of recursive calls is equal to the length of the
// longer string, which is max(str1.length, str2.length).

// Therefore, the space complexity of the function is also O(max(str1.length, str2.length)).

/*
// Iterative Solution, improves memory

var gcdOfStrings = function(str1, str2) {
    while (str1 + str2 !== str2 + str1) {
       if (str1.length > str2.length) {
          str1 = str1.slice(str2.length);
       } else {
          str2 = str2.slice(str1.length);
       }
    }
    
    return str1; // or str2 (since they are equal at this point)
 };

 */
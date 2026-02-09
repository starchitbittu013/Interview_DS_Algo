// 131. Palindrome Partitioning

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];

    findPalindromePartition(0, [], s, result);
    return result;
};


function findPalindromePartition(index, path, s, result) {
    if(index === s.length) {
        result.push([...path]);
        return;
    }

    for(let i = index; i < s.length; i++) {
        if(isPalindrome(index, i, s)) {
            // path.push(s.slice(index, i + 1)); // Avoid slice

            let temp = '';
            for(let j = index; j <= i; j++) {
                temp += s[j];
            }
            path.push(temp);
            findPalindromePartition(i + 1, path, s, result);
            path.pop(); // backtrack
        }
    }
}

function isPalindrome(start, end, str) {
    while(start < end) {
        if(str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}


// ✅ Recursive Version Without for Loop
// We introduce a helper function to simulate the loop over possible partition endpoints using recursive calls.


var partition = function(s) {
    let result = [];
    findPalindromePartition(0, [], s, result);
    return result;
};

function findPalindromePartition(index, path, s, result) {
    if (index === s.length) {
        result.push([...path]);
        return;
    }

    tryAllEnds(index, index, path, s, result);
}

// Simulates for (let end = start; end < s.length; end++)
function tryAllEnds(start, end, path, s, result) {
    if (end === s.length) return;

    if (isPalindrome(s, start, end)) {
        let temp = "";
        for (let i = start; i <= end; i++) {
            temp += s[i];
        }

        path.push(temp);
        findPalindromePartition(end + 1, path, s, result);
        path.pop(); // backtrack
    }

    tryAllEnds(start, end + 1, path, s, result);
}

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
// 🔍 How it Works
// findPalindromePartition() recursively builds partitions from index 0.

// Instead of a for loop, tryAllEnds(start, end, ...) recurses with end + 1 to explore all partition sizes.

// At each step, if s[start...end] is a palindrome, it’s added to the current path.

// 🧪 Example
// For input "aab", this still returns:


// [["a", "a", "b"], ["aa", "b"]]
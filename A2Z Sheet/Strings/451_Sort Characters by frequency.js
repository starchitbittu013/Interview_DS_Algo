// Sort Characters by frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    // Step 2: Convert map to array of [char, frequency]
    let charArray = [];
    for (let [ch, freq] of map.entries()) {
        charArray.push([ch, freq]);
    }

    // Step 3: Sort by frequency descending
    charArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Build result
    let result = '';
    for (let i = 0; i < charArray.length; i++) {
        let [ch, count] = charArray[i];
        for (let j = 0; j < count; j++) {
            result += ch;
        }
    }

    return result;
    
};


var frequencySort = function(s) {
    // Step 1: Frequency map using plain object
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Step 2: Create buckets where index = frequency
    let buckets = Array(s.length + 1).fill(0).map(() => []);

    for (let ch in freq) {
        let count = freq[ch];
        buckets[count].push(ch);
    }

    // Step 3: Build result string from highest frequency to lowest
    let result = '';
    for (let i = buckets.length - 1; i >= 0; i--) {
        let chars = buckets[i];
        for (let j = 0; j < chars.length; j++) {
            let ch = chars[j];
            for (let k = 0; k < i; k++) {
                result += ch;
            }
        }
    }

    return result;
};


var frequencySort = function(s) {
    // Step 1: Build frequency array
    let freq = new Array(128).fill(0); // ASCII chars range

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i)]++;
    }

    // Step 2: Build array of characters that appeared
    let chars = [];
    for (let i = 0; i < 128; i++) {
        if (freq[i] > 0) {
            chars.push(i); // store charCode
        }
    }

    // Step 3: Sort chars by their frequency (descending)
    chars.sort((a, b) => freq[b] - freq[a]);

    // Step 4: Build result
    let result = '';
    for (let i = 0; i < chars.length; i++) {
        let chCode = chars[i];
        let count = freq[chCode];
        for (let j = 0; j < count; j++) {
            result += String.fromCharCode(chCode);
        }
    }

    return result;
};


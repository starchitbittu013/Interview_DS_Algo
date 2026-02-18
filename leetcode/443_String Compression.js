// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
    console.log(chars);
    let count = 1;
    let i = 0;
    let j = 1;
    const n = chars.length;

    if (n == 1) {
        return 1;
    }

    for (let j = 1; j <= n; j++) {
        if (j < n && chars[j - 1] === chars[j]) {                        
            count++;                        
        } else {
            chars[i] = chars[j - 1];
            i++;
            if (count >= 2) {
                count = count.toString().split('');
                count.forEach(element => {
                    chars[i] = element;
                    i++;
                });                              
            }
                  
            count = 1;         
        }                
    }
    return i;
};

//console.log(compress(["a","a","b","b","c","c","c"]));
//console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));

// TC: O(n)
// SC: O(1)
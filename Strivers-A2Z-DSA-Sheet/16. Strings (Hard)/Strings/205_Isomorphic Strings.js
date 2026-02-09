/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sToT = {};
    const tToS = {};
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        if (!(sChar in sToT) && !(tChar in tToS)) {
            sToT[sChar] = tChar;
            tToS[tChar] = sChar;
        } else if (sToT[sChar] !== tChar || tToS[tChar] !== sChar) {
            return false;
        }
    }
    return true;
    
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = new Map();
    let mapTS = new Map();

    if(s.length !== t.length) return false;

    let i = 0;

    while(i < s.length) {
        if(mapST.has(s[i])) {
            if(mapST.get(s[i]) !== t[i]) {
                return false;
            }
        }

        if(mapTS.has(t[i])) {
            if(mapTS.get(t[i]) !== s[i]) {
                return false;
            }
        }
        mapST.set(s[i], t[i]);
        mapTS.set(t[i], s[i]);
         
        i++;
    }
    return true;
};



// var isIsomorphic = function(s, t) {
//    const length = s.length, map = new Map(), set = new Set();
//     for(let i = 0; i < length; i++) {
//         if(map.has(s[i])){
//             if(map.get(s[i]) !== t[i]) return false;
//         }
//         else {
//             if(set.has(t[i])) return false;
//             map.set(s[i],t[i]);
//             set.add(t[i]);
//         }
//     }
//     return true;
// };

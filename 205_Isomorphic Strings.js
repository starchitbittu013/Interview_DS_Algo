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

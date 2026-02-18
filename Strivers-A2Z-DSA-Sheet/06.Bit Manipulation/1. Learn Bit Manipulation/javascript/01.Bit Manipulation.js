/**
QUESTION:
Given a 32-bit unsigned integer `num` and a 1-based index `i`, return:
1. The ith bit (0/1)
2. The value of `num` with the ith bit set
3. The value of `num` with the ith bit cleared

Approach:
Convert the 1-based index to 0-based, then use bitwise operations to read, set, and clear the bit.

Time Complexity: O(1)
Space Complexity: O(1)
*/

function bitManipulation(num, i) {
    const idx = i - 1; // convert to 0-based index
    const ithBit = (num & (1 << idx)) ? 1 : 0;
    const setValue = num | (1 << idx);
    const clearValue = num & (~(1 << idx));
    return { ithBit, setValue, clearValue };
}

module.exports = { bitManipulation };

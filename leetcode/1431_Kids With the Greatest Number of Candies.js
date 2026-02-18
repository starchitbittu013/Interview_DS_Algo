/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    const maxValue = max(candies);
    console.log(`maxValue: ${maxValue}`);

    for(i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxValue) {
            result[i] = true
        } else result[i] = false;
    }
    return result;
};

function max(candiesArray){
    let max = candiesArray[0];
    for(i = 0; i < candiesArray.length; i++) {
        if(candiesArray[i] > max) {
            max = candiesArray[i];
        }
    }
    return max;
}
// Sort function numberical: Array.sort((a, b) => a - b);

// Time Complexity = O(n) where n is the length of candies array.
// Space Complexity = O(n)
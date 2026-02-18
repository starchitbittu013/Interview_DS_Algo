/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let total = 0;
    for(i = 0; i < flowerbed.length; i++) {
        if(i === 0 && i === flowerbed.length - 1 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            total++;
        }

        if(i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            total++;
        }

        if(i === flowerbed.length - 1 && flowerbed[i] === 0 
            && flowerbed[i - 1] === 0) {
                flowerbed[i] = 1;
                total++;
        }
    
        if(flowerbed[i] === 0 && flowerbed[i - 1] === 0 
            && flowerbed[i + 1] === 0) {                
                flowerbed[i] = 1;
                total++;
        }
    }
    console.log(`total: ${total}`);
    if(total >= n){
        return true;
    } else return false;
};

// Time Complexity = O(n) where n is the length of flowerbed array.
// Space Complexity = O(n)
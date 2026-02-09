// 875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23


// Brute force

function findMax(v) {
    let maxi = -Infinity;
    let n = v.length;
    // Find the maximum
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, v[i]);
    }
    return maxi;
}

function calculateTotalHours(v, hourly) {
    let totalH = 0;
    let n = v.length;
    // Find total hours
    for (let i = 0; i < n; i++) {
        totalH += Math.ceil(v[i] / hourly);
    }
    return totalH;
}

function minimumRateToEatBananas(v, h) {
    // Find the maximum number
    let maxi = findMax(v);

    // Find the minimum value of k
    for (let i = 1; i <= maxi; i++) {
        let reqTime = calculateTotalHours(v, i);
        if (reqTime <= h) {
            return i;
        }
    }

    // Dummy return statement
    return maxi;
}

// Time Complexity: O(max(a[]) * N), where max(a[]) is the maximum element in the array and N = size of the array.


let v = [7, 15, 6, 3];
let h = 8;
let ans = minimumRateToEatBananas(v, h);
console.log("Koko should eat at least " + ans + " bananas/hr.");



// Optimal Approach(Using Binary Search): 

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let n = piles.length;
    let k = 1;

    let max = findMax(piles);

    let low = 1, high = max;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        let totalHours = calculateTotalHours(piles, mid);

        if(totalHours <= h) {
            high = mid - 1;
            k = mid;
        } else {
            low = mid + 1;
        }
    }
    return k;
};

function findMax(piles) {
    let max = -Infinity;

    for(let i = 0; i < piles.length; i++) {
        max = Math.max(max, piles[i]);
    }
    return max;
}

function calculateTotalHours(piles, number) {
    let total = 0;

    for(let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / number);
    }
    return total;
}
// Time Complexity: O(N * log(max(a[]))), where max(a[]) is the maximum element in the array and N = size of the array.

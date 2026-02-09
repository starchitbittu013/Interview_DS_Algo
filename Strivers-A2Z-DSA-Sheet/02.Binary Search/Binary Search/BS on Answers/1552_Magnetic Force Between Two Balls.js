// 1552. Magnetic Force Between Two Balls

// Similar to Aggressive Cows

// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

// Given the integer array position and the integer m. Return the required force.

// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
// Example 2:

// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => (a - b));
    let n = position.length;
    let low = 1, high = position[n - 1] - position[0];

    if(n < 2) return 0;

    function possibleToPlace(distance) {
        let lastPosition = position[0];
        let countOfMagnets = 1;
        for(let i = 1; i < n; i++) {
            if((position[i] - lastPosition) >= distance) {
                countOfMagnets++;
                lastPosition = position[i];
            }        

            if(countOfMagnets === m) return true;;
        }
        return false; 
    } 

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(possibleToPlace(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

// Aggressive Cows : Detailed Solution

// Problem Statement: You are given an array 'arr' of size 'n' which denotes the position of stalls.
// You are also given an integer 'k' which denotes the number of aggressive cows.
// You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.
// Find the maximum possible minimum distance.


function canWePlace(stalls, dist, cows) {
    const n = stalls.length; // size of array
    let cntCows = 1; // number of cows placed
    let last = stalls[0]; // position of last placed cow
    for (let i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            cntCows++; // place next cow
            last = stalls[i]; // update the last location
        }
        if (cntCows >= cows) return true;
    }
    return false;
}

function aggressiveCows(stalls, k) {
    const n = stalls.length; // size of array
    stalls.sort((a, b) => a - b); // sort the stalls array

    let low = 1, high = stalls[n - 1] - stalls[0];
    // apply binary search
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canWePlace(stalls, mid, k)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}

const stalls = [0, 3, 4, 7, 10, 9];
const k = 4;
const ans = aggressiveCows(stalls, k);
console.log("The maximum possible minimum distance is:", ans);
// Good Question. Interesting Logic!!
// 735. Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let result = [];
    
    for(let i = 0; i < asteroids.length; i++) {
        const element = asteroids[i];
        // If 1st element is -ve and result array is empty then push it. 
        // Also, If previous element in result array is also negative and current   
        // number is -ve too, then push it to the array. *** Corner Case ***
        if ((result.length === 0 || result[result.length - 1] < 0) 
            && element < 0) {
            result.push(element);
        } else if (element > 0) {
            result.push(element);
        } else {
            const pop = result.pop();

            // Last element in stack is greater than current element, hence push it 
            // back
            if (Math.abs(pop) > Math.abs(element)) {
                result.push(pop);
            } 
            // If pop element is smaller than current element then repeat again with 
            // previous element, hence decrement i. 
            else if (Math.abs(pop) < Math.abs(element)){
                i--;
            }
            // if both's absolute value are equal then pop both. Already popped last 
            // element in the stack and didn't push current element in stack. 
            else {
                continue;
            }
        }
    }
    return result;
};

console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([-2,-2,1,-2]));
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
console.log(asteroidCollision([[-2,-1,1,2]]));
console.log(asteroidCollision([-2,-2,1,-2]));
console.log(asteroidCollision([[1,-2,-2,-2]]));


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            let top = stack[stack.length - 1];

            if (top < -asteroid) {
                stack.pop(); // top asteroid explodes, check next
            } else if (top === -asteroid) {
                stack.pop(); // both explode
                destroyed = true;
                break;
            } else {
                // current asteroid explodes
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};


// class Solution:
//     def asteroidCollision(self, asteroids):
        
//         # Size of the array
//         n = len(asteroids)
        
//         # List implementation of stack
//         st = []
        
//         # Traverse all the asteroids
//         for i in range(n):
            
//             # Push the asteroid in stack if a 
//             # right moving asteroid is seen
//             if asteroids[i] > 0:
//                 st.append(asteroids[i])
            
//             # Else if the asteroid is moving 
//             # left, perform the collisions
//             else:
                
//                 # Until the right moving asteroids are 
//                 # smaller in size, keep on destroying them 
//                 while (st and st[-1] > 0 and 
//                        st[-1] < abs(asteroids[i])):
                    
//                     # Destroy the asteroid
//                     st.pop()
                
//                 # If there is right moving asteroid 
//                 # which is of same size
//                 if st and st[-1] == abs(asteroids[i]):
                    
//                     # Destroy both the asteroids
//                     st.pop()
                
//                 # Otherwise, if there is no left
//                 # moving asteroid, the right moving 
//                 # asteroid will not be destroyed
//                 elif not st or st[-1] < 0:
                    
//                     # Storing the array in final state
//                     st.append(asteroids[i])
        
//         # Return the final state of asteroids
//         return st

// # Main function to test the solution
// if __name__ == "__main__":
//     arr = [10, 20, -10]
    
//     # Creating an instance of Solution class
//     sol = Solution()
    
//     # Function call to determine the state of 
//     # asteroids after all collisions
//     ans = sol.asteroidCollision(arr)
    
//     print("The state of asteroids after collisions is:", ans)
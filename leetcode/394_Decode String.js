// 394. Decode String

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {    
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            stack.push(Number(s[i]));
            console.log(`Number pushed: ${stack}`); 
        } else if (s[i] === '[') {
            stack.push(s[i]);
            console.log(`[ pushed: ${stack}`); 
        } else if (typeof s[i] === 'string' && s[i] !== ']') {        
            stack.push(s[i]);
            console.log(`str pushed: ${stack}`); 
        } else {
            let string = '';
            let count = '';        
            while (stack[stack.length - 1] !== '[') {
                string = stack.pop() + string;
            }
            console.log(`str popped: ${stack}`); 
            // Pop out '['
            stack.pop();
            console.log(`[ popped: ${stack}`);
            // Pop out numbers
            while (!isNaN(stack[stack.length - 1])) {
                count = stack.pop() + count;   
            }            
            console.log(`num popped: ${stack}`); 
            console.log(`str: ${string}`); 
            console.log(`count: ${count}`); 
            string = string.repeat(Number(count));
            console.log(`str : ${string}`); 
            stack.push(string);
            console.log(`str pushed: ${stack}`); 
        }        
    }
    console.log(stack);    
    return stack.join('');
};

//console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("100[leetcode]"));

/*
function decodeString(s) {
	// stack is used to maintain the string that is decoded already and the count of the current string into consideration
    const stack = [];
	let currStr = '', k = 0;
	
	// iterating through each character in the string
    for(let idx = 0; idx < s.length; ++idx) {    // O(n)
        const char = s[idx];
        if(char === '[') {
		// if the char is `[`, that means the following string is encoded string, so we add the previous string and k (already processed) to the stack 
            stack.push([currStr, k]);
            currStr = '';    // reset the value before the following string
            k = 0;
        } else if(char === ']') {
		// if the char is `]`, we have processed the encoded string, and we need to append it k times to the previous string (we can get these values from the stack - LIFO)
            const [prevStr, times] = stack.pop();
            currStr = prevStr + currStr.repeat(times);
        } else if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
		// if the char is a digit, update the value of k
            k = k * 10 + parseInt(char);
        } else {
		// otherwise, the char is a letter, we can append it to the currStr (which is the curr string into consideration) 
            currStr += char;
        }
    }
    return currStr;    // after the loop finishes, currStr will be the resultant decoded string
}

var decodeString = function(s) {
    const stack = [];
    let i = 0, num = 1, m = 10, curr_str = [];
    while(i < s.length) {
		// constructing the number `k`
        num = 0;
        while(s[i] >= '0' && s[i] <= '9') {
            num = num * m + parseInt(s[i]);
            ++i;
        }
		// a number is always followed by `[`
        if(s[i] === '[') {
			++i;
		}
		// add the number to the stack
        if(num) {
            stack.push(num);
        }
		// `k[` can be followed either by another number or a string, in case of a string, this block will construct the complete string until we find another type of character
        curr_str = [];
        while(s[i] >= 'a' && s[i] <= 'z') {
            curr_str.push(s[i]);
            ++i;
        }
        if(curr_str.length) {
			// stack will always have a number followed by a string until all the decoding is done
			// so if the top value in the stack is another string, we prepend it to the curr_str before pushing the complete string into the stack
            if(stack.length && typeof stack[stack.length - 1] === "string") {
                stack.push(stack.pop() + curr_str.join(''));
            } else {
                stack.push(curr_str.join(''));
            }
        }
        if(s[i] === ']') {
			// as mentioned above, stack will always have a number followed by a string
            let top_str = stack.pop(), count = stack.pop();
			// similarly, if top value is a string, we prepend it to the new decoded string before pushing the complete string into the stack
            const temp_str = [];
			if(stack.length && typeof stack[stack.length - 1] === "string") {
                temp_str.push(stack.pop());
            }
            while(count--) {    // O(k)
                temp_str.push(top_str);
            }
            stack.push(temp_str.join(''));
            ++i;
        } 
    }
	// if using pure stack then we cannot perform this, so we can have another block where we construct the result by popping chars from the stack and then reverse the order and join
    return stack.join('');
};

*/
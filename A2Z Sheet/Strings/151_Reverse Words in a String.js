// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.
 

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?


// using extra space. 

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack = [];
    let n = s.length;

    let str = '';

    for(let i = 0; i < n; i++) {
        if(s[i] === ' ') {
            if(str.length > 0) {
                stack.push(str);
                str = '';  
            }            
          
        } else {
            str += s[i];
        }
    }
    if(str.length > 0) stack.push(str);

    console.log(stack)
    
    let result = '';
    while(stack.length > 1) {
        result += stack.pop() + " ";
    }
    result += stack.pop();

    return result;
};



/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack = [];
    let n = s.length;

    let str = '';
    let i = n - 1;
    let result = '';

    while(i >= 0) {
        if(s[i] === ' ') {
            if(str.length > 0) {
                // Append the word in correct order
                for(let j = str.length - 1; j >= 0; j--) {
                    result += str[j];
                }
                result += ' ';
                str = '';
            }
        } else {
            str += s[i];
        }
        i--;
    }
    
    // Add the last word if there is one
    if(str.length > 0) {
        for(let j = str.length - 1; j >= 0; j--) {
            result += str[j];
        }
    } else {
        // Remove trailing space if present
        if (result.length > 0 && result[result.length - 1] === ' ') {
            let newResult = '';
            for (let k = 0; k < result.length - 1; k++) {
                newResult += result[k];
            }
            result = newResult;
        }
    }
    return result;
};


// import java.io.*;
// class Test
// {
// static private String result(String s)
// {
// 	int left = 0;
// 	int right = s.length() - 1;

// 	String temp = "";
// 	String ans = "";

// 	//Iterate the string and keep on adding to form a word
// 	//If empty space is encountered then add the current word to the result
// 	while (left <= right)
// 	{
// 		char ch = s.charAt(left);
// 		if (ch != ' ')
// 		{
// 			temp += ch;
// 		}
// 		else if (ch == ' ')
// 		{
// 			if (!ans.equals(""))
// 			{
// 				ans = temp + " " + ans;
// 			}
// 			else
// 			{
// 				ans = temp;
// 			}
// 			temp = "";
// 		}
// 		left++;
// 	}

// 	//If not empty string then add to the result(Last word is added)
// 	if (!temp.equals(""))
// 	{
// 		if (!ans.equals(""))
// 		{
// 			ans = temp + " " + ans;
// 		}
// 		else
// 		{
// 			ans = temp;
// 		}
// 	}

// 	return ans;
// }
// public static void main(String[] args)
// {
// 	String st = "TUF is great for interview preparation";
// 	System.out.println("Before reversing words: ");
//     System.out.println(st);
//     System.out.println("After reversing words: ");
// 	System.out.print(result(st));
// }
// }


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim(); // Remove leading/trailing spaces
    let i = s.length - 1;
    let j = i;
    let result = '';

    while (i >= 0) {
        // Move i to the start of the current word
        while (i >= 0 && s[i] !== ' ') {
            i--;
        }
        // Add the word to result
        result += s.slice(i + 1, j + 1) + ' ';

        // Skip spaces
        while (i >= 0 && s[i] === ' ') {
            i--;
        }
        j = i; // Move j to the end of the next word
    }

    return result.trim(); // Remove the last extra space
};

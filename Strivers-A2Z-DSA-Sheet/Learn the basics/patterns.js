// Pattern Problems

// Approach: 

// There are 4 general rules for solving a pattern-based question : 

// We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.
// Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
// We print the numbers inside the inner loop.
// Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns or not.

// Input Format: N = 3
// Result: 
// * * *
// * * 
// *


function pattern(n) {
    for(let i = 0; i < n; i++) {
        let num = 1;
        for(let j = n; j < i ; j--) {
            process.stdout.write(`${num}`);
            num++
        }
        console.log();
    }
}

// Input Format: N = 6
// Result:
//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********

function pattern7(n) {
    for(let i=0; i < n; i++) {
        let str="";
        for(let j=0; j<n-i-1; j++) {
            str+=" ";
        }
        for(let j=0; j < 2*i+1; j++ ) {
            str+= "*";
        }
        for(let j=0; j<n-i-1; j++) {
            str+=" ";
        }
        console.log(str);
    }
}

// Pattern - 8

// Input Format: N = 6
// Result:     
// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *

function pattern8(n) {
    for(let i = n - 1; i >= 0; i--) {
        let str = "";
        for(let j = 0; j < n - i - 1; j++) {
            str += " ";
        }
        for(let j = 0; j < 2 * i + 1; j++) {
            str += "*";
        }
        for(let j = 0; j < n - i - 1; j++) {
            str += " ";
        }
        console.log(str);
    }
}

//Pattern - 9: Diamond Star Pattern

// Input Format: N = 3
// Result: 
//   *  
//  ***
// ***** 
// *****  
//  ***
//   *   


function pattern9(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }

        for(let j = 0; j < 2 * i + 1; j++) {
            str += '*';
        }

        for(let j = 0; j < n- i - 1; j++) {
            str += ' ';
        }
        console.log(str);
    }

    for(let i = n - 1; i >= 0; i--) {
        let str = '';
        for(let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }

        for(let j = 0; j < 2 * i + 1; j++) {
            str += '*';
        }

        for(let j = 0; j < n- i - 1; j++) {
            str += ' ';
        }
        console.log(str);
    }
}

// Pattern - 10: Half Diamond Star Pattern


// Input Format: N = 6
// Result:   
//      *
//      **
//      *** 
//      ****
//      *****
//      ******  
//      *****
//      ****
//      ***    
//      **
//      *


function pattern10(n) {
    // for(let i = 0; i < n; i++) {
    //     let str = '';
    //     // for(let j = 0; j < n - i - 1; j++) {
    //     //     str += ' ';
    //     // }

    //     for(let j = 0; j < i + 1; j++) {
    //         str += '*';
    //     }

    //     for(let j = 0; j < n - i - 1; j++) {
    //         str += ' ';
    //     }
    //     console.log(str);
    // }

    // for(let i = n - 1; i >= 0; i--) {
    //     let str = '';
    //     // for(let j = 0; j < n - i - 1; j++) {
    //     //     str += ' ';
    //     // }

    //     for(let j = 0; j < i + 1; j++) {
    //         str += '*';
    //     }

    //     for(let j = 0; j < n- i - 1; j++) {
    //         str += ' ';
    //     }
    //     console.log(str);
    // }

    for(let i = 0; i < 2 * n; i++) {
        let starCount = i;
        let str = '';

        if (starCount > n - 1) {
            starCount = 2 * n - i;
        }

        for(let j = 0; j < starCount; j++) {
            str += '*';
        }
        console.log(str);
    }
}

// Pattern - 11: Binary Number Triangle Pattern
// Input Format: N = 6
// Result:   
// 1
// 01
// 101
// 0101
// 10101
// 010101

function pattern11(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < i + 1; j++) {            
            if(j % 2 === 0) {
                str = '1' + str;
            } else {
                str = '0' + str;
            }
        }
        console.log(str);
    }
}


// Pattern - 12: Number Crown Pattern

// Input Format: N = 3
// Result: 
// 1    1
// 12  21
// 123321

function pattern12(n) {    
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= i; j++) {            
            str += j;
        }
        for(let j = 0; j < 2 * (n - i); j++) {    // i = 1, spaces = 4, i = 2, spaces = 2
            str += ' ';
        }
        for(let j = i; j >= 1; j--) {            
           str += j;
        }
        console.log(str);
    }
}


// Pattern - 13: Increasing Number Triangle Pattern
// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

// Input Format: N = 6
// Result:   
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21


function pattern13(n) { 
    let start = 1;   
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= i; j++) {            
            str += ' ' + start;
            start++;
        }        
        console.log(str);
    }
}

// Pattern-14: Increasing Letter Triangle Pattern

// Input Format: N = 3
// Result: 
// A
// A B
// A B C

// Input Format: N = 6
// Result:   
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function pattern14(n) {   
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 0; j < i; j++) {            
            str += String.fromCharCode(65 + j) + ' ';            
        }        
        console.log(str);
    }
}

// Pattern-15: Reverse Letter Triangle Pattern

// Input Format: N = 3
// Result: 
// A B C
// A B
// A

// Input Format: N = 6
// Result:   
// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A

function pattern15(n) {   
    for(let i = n; i >= 1; i--) {        
        let str = '';
        for(let j = 0; j < i; j++) {            
            str += String.fromCharCode(65 + j) + ' ';                 
        }        
        console.log(str);
    }
}

// Pattern - 16: Alpha-Ramp Pattern

// Input Format: N = 3
// Result: 
// A
// B B
// C C C

// Input Format: N = 6
// Result:   
// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function pattern16(n) {   
    for(let i = 0; i < n; i++) {        
        let str = '';
        for(let j = 0; j <= i; j++) {            
            str += String.fromCharCode(65 + i) + ' ';                 
        }        
        console.log(str);
    }
}

// Pattern - 17: Alpha-Hill Pattern

// Input Format: N = 3
// Result: 
//   A  
//  ABA 
// ABCBA


// Input Format: N = 6
// Result:   
//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA

function pattern17(n) {   
    for(let i = 0; i < n; i++) {        
        let str = '';
        for(let j = 0; j < n - i - 1; j++) {            
            str += ' ';
        }
        for(let j = 0; j <= i; j++) {
            str += String.fromCharCode(65 + j);
        }
        for(let j = i - 1; j >= 0; j--) {
            str += String.fromCharCode(65 + j);
        }
        for(let j = 0; j < n - i - 1; j++) {            
            str += ' ';
        }        
        console.log(str);
    }
}

// Pattern-18: Alpha-Triangle Pattern

// Input Format: N = 3
// Result: 
// C
// B C
// A B C

// Input Format: N = 6
// Result:   
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function pattern18(n) {   
    for(let i = 0; i < n; i++) {        
        let str = '';
        for(let j = n - i - 1; j < n ; j++) {            
            str += String.fromCharCode(65 + j) + ' ';
        }
        
        console.log(str);
    }
}


// Pattern-19: Symmetric-Void Pattern

// Input Format: N = 3
// Result: 
// ******
// **  **
// *    *
// *    *
// **  **
// ******

function pattern19(n) {  
    // for the upper half of the pattern.
      
    // initial spaces.
    let initialSpace = 0; 
    for(let i = 0; i < n; i++) {        
        let str = '';
        //for printing the stars in the row.
        for(let j = 0; j < n - i ; j++) {            
            str += '*';
        }
        //for printing the spaces in the row.
        for(let j = 0; j < initialSpace; j++) {            
            str += ' ';
        }
        //for printing the stars in the row.
        for(let j = 0; j < n - i; j++) {            
            str += '*';
        }
        // The spaces increase by 2 every time we hit a new row.
        initialSpace += 2;
        
        console.log(str);
    }
    // for lower half of the pattern
      
    // initial spaces.
    initialSpace = 2 * n - 2;

    for(let i = 0; i < n; i++) {        
        let str = '';
        for(let j = 0; j <= i ; j++) {            
            str += '*';
        }

        for(let j = 0; j < initialSpace; j++) {            
            str += ' ';
        }

        for(let j = 0; j <= i; j++) {            
            str += '*';
        }

        initialSpace -= 2;
        
        console.log(str);
    }
}

// Pattern - 20: Symmetric-Butterfly Pattern
// Input Format: N = 3
// Result: 
// *    *
// **  **
// ******
// **  **
// *    *

function pattern20(n) {  
    let initialSpace = 2 * n - 2; 
    for(let i = 1; i < 2 * n; i++) { 
        let stars = i;
        if(i > n) stars = 2 * n - i;        
        let str = '';
        
        for(let j = 0; j < stars; j++) {            
            str += '*';
        }

        for(let j = 0; j < initialSpace; j++) {            
            str += ' ';
        }

        for(let j = 0; j < stars; j++) {            
            str += '*';
        }
        console.log(str);
        if(i < n) initialSpace -= 2;
        else initialSpace += 2;
    }
}

function pattern20A(N) {
    let size = 2 * N; // Total rows

    for (let i = 0; i < size; i++) {
        let stars = i < N ? i + 1 : size - i; // Number of stars
        let spaces = 2 * (N - stars); // Spaces in the middle
        let str = "";

        // Left wing
        for (let j = 0; j < stars; j++) str += "*";
        // Middle spaces
        for (let j = 0; j < spaces; j++) str += " ";
        // Right wing
        for (let j = 0; j < stars; j++) str += "*";

        console.log(str);
    }
}

// Pattern - 21: Hollow Rectangle Pattern

// Input Format: N = 3
// Result: 
// ***
// * *
// ***

// Input Format: N = 6
// Result:   
// ******
// *    *
// *    *
// *    *
// *    *
// ******

function pattern21(n) {
    for (let i = 0; i < n; i++) {
        let str = "";

        for (let j = 0; j < 1; j++) {
            str += '*';
        }

        if(i === 0 || i === n - 1) {
            for (let j = 0; j < n - 2; j++) {
                str += '*';
            }
        } else {
            for (let j = 0; j < n - 2; j++) {
                str += ' ';
            }
        }

        for (let j = 0; j < 1; j++) {
            str += '*';
        }

        console.log(str);
    }
}

function pattern21A(n) {
    for (let i = 0; i < n; i++) {
        let str = "";

        for (let j = 0; j < n; j++) {
            if(i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                str += '*';
            } else {
                str += ' ';
            }           
        }
        console.log(str);
    }
}

// Pattern - 22: The Number Pattern

// Input Format: N = 3
// Result: 
// 3 3 3 3 3 
// 3 2 2 2 3 
// 3 2 1 2 3 
// 3 2 2 2 3 
// 3 3 3 3 3

function pattern22(n) {
    let size = 2 * n - 1; // Total rows and columns

    for (let i = 0; i < size; i++) {
        let str = "";
        
        for (let j = 0; j < size; j++) {
            let value = n - Math.min(i, j, size - 1 - i, size - 1 - j);
            str += value + " ";
        }
        
        console.log(str);
    }
}


pattern22(3);